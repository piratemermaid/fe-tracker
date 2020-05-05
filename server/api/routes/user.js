const { Router } = require("express");
const { getAccount, Session } = require("../helpers/account");
const { knex } = require("../models/config");
const models = require("../models/bookshelf_models");

const router = new Router();

router.get("/", (req, res) => {
    res.send({ api: "user" });
});

router.post("/new_playthrough", async (req, res, next) => {
    const { sessionString } = req.cookies;
    if (!validSession(sessionString)) {
        res.status(401).send("Invalid session");
        return;
    }

    const { house, byleth } = req.query;
    const { username } = Session.parse(sessionString);

    const user = await getAccount(username);

    const playthroughs = await knex("users_playthroughs")
        .where({ user_id: user.id })
        .then((result) => {
            return result;
        });

    const house_id = await knex("houses")
        .where({ name: house })
        .first()
        .then((result) => {
            return result.id;
        });

    const playthrough_result = await knex("users_playthroughs")
        .insert({
            user_id: user.id,
            playthrough: playthroughs.length + 1,
            byleth_gender: byleth,
            house_id
        })
        .returning("id");

    const students = await knex("students")
        .where({ house_id })
        .then((result) => {
            return result;
        });

    for (let student of students) {
        const student_id = await knex("students")
            .where({ name: student.name })
            .first()
            .then((result) => {
                return result.id;
            });

        await knex("users_students").insert({
            playthrough_id: playthrough_result[0],
            student_id
        });
    }

    res.send("success");
});

router.get("/playthrough", async (req, res) => {
    const { sessionString } = req.cookies;
    if (!validSession(sessionString)) {
        res.status(401).send("Invalid session");
        return;
    }

    const { username } = Session.parse(sessionString);
    const user = await getAccount(username);

    models.Playthrough.forge({ user_id: user.id })
        .fetch({ withRelated: ["house", "students"] })
        .then((userData) => {
            const data = userData.toJSON();
            const { playthrough, byleth_gender, house, students } = data;

            res.send({
                playthrough,
                byleth_gender,
                house: house.name,
                students: students.map(({ name }) => {
                    return { name };
                })
            });
        });
});

const validSession = (sessionString) => {
    if (!sessionString || !Session.verify(sessionString)) {
        return false;
    } else {
        return true;
    }
};

module.exports = router;
