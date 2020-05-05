const { Router } = require("express");
const { getAccount, Session } = require("../helpers/account");
const { knex } = require("../models/config");

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

    await knex("users_playthroughs")
        .insert({
            user_id: user.id,
            playthrough: playthroughs.length + 1,
            byleth_gender: byleth,
            house_id
        })
        .then(() => {
            res.send("success");
        })
        .catch((err) => {
            next(err);
        });
});

// TODO: add user's characters in this api call
router.get("/playthrough", async (req, res, next) => {
    const { sessionString } = req.cookies;
    if (!validSession(sessionString)) {
        res.status(401).send("Invalid session");
        return;
    }

    const { username } = Session.parse(sessionString);

    const user = await getAccount(username);

    const playthrough = await knex("users_playthroughs")
        .where({ user_id: user.id })
        .then((result) => {
            return result[result.length - 1];
        });

    const { byleth_gender, house_id } = playthrough;

    const house = await knex("houses").where({ id: house_id }).first();

    res.send({ playthrough: { byleth_gender, house: house.name } });
});

const validSession = (sessionString) => {
    if (!sessionString || !Session.verify(sessionString)) {
        return false;
    } else {
        return true;
    }
};

module.exports = router;
