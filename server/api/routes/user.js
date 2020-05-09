const { Router } = require("express");
const { getAccount, Session } = require("../helpers/account");
const { knex } = require("../models/config");
const models = require("../models/bookshelf_models");
const helpers = require("../helpers/data");

const router = new Router();

// TODO: enter students with certified false, not null

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

    // always add Byleth
    await knex("users_students").insert({
        playthrough_id: playthrough_result[0],
        student_id: 1
    });

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
    models.User.forge({ username })
        .fetch({
            withRelated: [
                "playthroughs.house",
                "playthroughs.userStudents.student",
                {
                    "playthroughs.userStudents.userStudentClasses.class.skills"(
                        qb
                    ) {
                        qb.column("name", "level");
                    }
                },
                "playthroughs.userStudents.userStudentSkills.skill"
            ]
        })
        .then((userData) => {
            const data = userData.toJSON();

            const playthrough = data.playthroughs[data.playthroughs.length - 1];
            if (!playthrough) {
                res.send(null);
                return;
            }

            const { byleth_gender, house, userStudents } = playthrough;

            res.send({
                playthrough,
                byleth_gender,
                house: house.name,
                students: userStudents.map(
                    ({ student, userStudentClasses, userStudentSkills }) => {
                        return {
                            name: student.name,
                            classes: userStudentClasses.map((sClass) => {
                                const { certified } = sClass;
                                return {
                                    name: sClass.class.name,
                                    type: sClass.class.type,
                                    certified,
                                    classSkills: sClass.class.skills.map(
                                        ({ name, level }) => {
                                            return { name, level };
                                        }
                                    )
                                };
                            }),
                            skills: userStudentSkills.map(
                                ({ level, skill }) => {
                                    return { name: skill.name, level };
                                }
                            )
                        };
                    }
                )
            });
        });
});

router.post("/update_student_class_goal", async (req, res) => {
    const { sessionString } = req.cookies;
    if (!validSession(sessionString)) {
        res.status(401).send("Invalid session");
        return;
    }

    const { studentName, className } = req.query;
    const { username } = Session.parse(sessionString);

    const user = await getAccount(username);

    const playthrough_id = await helpers.lookupPlaythroughId(user);
    const student_id = await helpers.lookupId("students", {
        name: studentName
    });
    const user_student_id = await helpers.lookupId("users_students", {
        playthrough_id,
        student_id
    });
    const class_id = await helpers.lookupId("classes", { name: className });

    const exists = await knex("users_students_classes")
        .where({
            user_student_id,
            class_id
        })
        .first()
        .then((result) => {
            if (!result) {
                return false;
            } else {
                return true;
            }
        });

    if (!exists) {
        await knex("users_students_classes")
            .insert({
                user_student_id,
                class_id
            })
            .then((result) => {
                res.send("success");
            });
    } else {
        await knex("users_students_classes")
            .del()
            .where({
                user_student_id,
                class_id
            })
            .then((result) => {
                res.send("success");
            });
    }
});

router.post("/update_student_class", async (req, res) => {
    const { sessionString } = req.cookies;
    if (!validSession(sessionString)) {
        res.status(401).send("Invalid session");
        return;
    }

    const { studentName, className } = req.query;
    const { username } = Session.parse(sessionString);

    const user = await getAccount(username);

    const playthrough_id = await helpers.lookupPlaythroughId(user);
    const student_id = await helpers.lookupId("students", {
        name: studentName
    });
    const user_student_id = await helpers.lookupId("users_students", {
        playthrough_id,
        student_id
    });
    const class_id = await helpers.lookupId("classes", { name: className });
    const user_student_class_certified = await knex("users_students_classes")
        .where({ user_student_id, class_id })
        .first()
        .then((result) => {
            return result.certified || false;
        });

    await knex("users_students_classes")
        .where({ user_student_id, class_id })
        .update({ certified: !user_student_class_certified })
        .then(() => {
            res.send("success");
        });
});

// TODO: remove skill levels (uncheck)
// should keep track of all skill levels that have been checked
// e.g. if C gets unchecked, go back to D if it was checked
router.post("/update_student_skill", async (req, res) => {
    const { sessionString } = req.cookies;
    if (!validSession(sessionString)) {
        res.status(401).send("Invalid session");
        return;
    }

    const { studentName, skillName, level } = req.query;
    const { username } = Session.parse(sessionString);

    const user = await getAccount(username);

    const playthrough_id = await helpers.lookupPlaythroughId(user);
    const student_id = await helpers.lookupId("students", {
        name: studentName
    });
    const user_student_id = await helpers.lookupId("users_students", {
        playthrough_id,
        student_id
    });
    const skill_id = await helpers.lookupId("skills", { name: skillName });
    const exists = await knex("users_students_skills")
        .where({ user_student_id, skill_id, level })
        .first()
        .then((result) => {
            if (result) {
                return true;
            } else {
                return false;
            }
        });

    if (exists) {
        await knex("users_students_skills")
            .where({ user_student_id, skill_id, level })
            .delete()
            .then(() => {
                res.send("success");
            });
    } else {
        // TODO: delete higher level skills
        // e.g. if user deletes level B and has C checked,
        // also delete C
        await knex("users_students_skills")
            .insert({
                user_student_id,
                skill_id,
                level
            })
            .then(() => {
                res.send("success");
            });
    }
});

router.post("/add_students", async (req, res) => {
    const { sessionString } = req.cookies;
    if (!validSession(sessionString)) {
        res.status(401).send("Invalid session");
        return;
    }

    const { names } = req.query;

    const { username } = Session.parse(sessionString);
    const user = await getAccount(username);
    const playthrough_id = await helpers.lookupPlaythroughId(user);

    for (let name of names) {
        const student_id = await helpers.lookupId("students", { name });
        await knex("users_students").insert({
            playthrough_id,
            student_id
        });
    }

    res.send("success");
});

router.post("/remove_student", async (req, res) => {
    const { sessionString } = req.cookies;
    if (!validSession(sessionString)) {
        res.status(401).send("Invalid session");
        return;
    }

    const { name } = req.query;

    const { username } = Session.parse(sessionString);
    const user = await getAccount(username);
    const playthrough_id = await helpers.lookupPlaythroughId(user);
    const student_id = await helpers.lookupId("students", { name });

    await knex("users_students")
        .where({
            playthrough_id,
            student_id
        })
        .del();

    res.send("success");
});

const validSession = (sessionString) => {
    if (!sessionString || !Session.verify(sessionString)) {
        return false;
    } else {
        return true;
    }
};

module.exports = router;
