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

    const playthrough_id = await helpers.lookupPlaythroughId(user);

    const playthrough = await knex("users_playthroughs")
        .where({
            user_id: user.id,
            playthrough: playthrough_id
        })
        .first();

    const { byleth_gender } = playthrough;

    const house = await knex("houses")
        .where({ id: playthrough.house_id })
        .first()
        .then((result) => {
            return result.name;
        });

    const studentsResults = await knex("users_students").where({
        playthrough_id
    });

    let students = [];
    for (let student of studentsResults) {
        const { student_id } = student;
        const name = await knex("students")
            .where({ id: student_id })
            .first()
            .then((result) => {
                return result.name;
            });

        const user_student_id = await helpers.lookupId("users_students", {
            playthrough_id,
            student_id
        });

        const user_student_classes = await knex(
            "users_students_classes"
        ).where({ user_student_id });

        let classes = [];
        for (let sClass of user_student_classes) {
            const { class_id, certified } = sClass;
            const classInfo = await knex("classes")
                .where({ id: class_id })
                .first()
                .then((result) => {
                    return result;
                });

            const classSkillsInfo = await knex("classes_skills").where({
                class_id
            });
            let classSkills = [];
            for (let skill of classSkillsInfo) {
                const { skill_id, level } = skill;
                const skillName = await knex("skills")
                    .where({ id: skill_id })
                    .first()
                    .then((result) => {
                        return result.name;
                    });
                classSkills.push({ name: skillName, level });
            }

            classes.push({
                name: classInfo.name,
                type: classInfo.type,
                certified: certified || false,
                classSkills
            });
        }

        const user_student_skills = await knex("users_students_skills").where({
            user_student_id
        });
        let skills = [];
        for (let skill of user_student_skills) {
            const { skill_id, level } = skill;
            const skillName = await knex("skills")
                .where({ id: skill_id })
                .first()
                .then((result) => {
                    return result.name;
                });
            skills.push({ name: skillName, level });
        }

        students.push({
            name,
            classes: helpers.sortClassesByType(classes),
            skills
        });
    }

    res.send({
        playthrough,
        byleth_gender,
        house: house.name,
        students: students.map(({ name, classes, skills }) => {
            return { name, classes, skills };
        })
    });

    // models.Playthrough.forge({ user_id: user.id })
    //     .fetch({
    //         withRelated: [
    //             "house",
    //             "students.classes",
    //             "students.skills"
    //         ]
    //     })
    //     .then((userData) => {
    //         const data = userData.toJSON();
    //         // console.log(data);
    //         const { playthrough, byleth_gender, house, students } = data;

    //         res.send({
    //             playthrough,
    //             byleth_gender,
    //             house: house.name,
    //             students: students.map(({ name, classes, skills }) => {
    //                 // console.log(classes);
    //                 return {
    //                     name,
    //                     classes: classes.map(({ name }) => {
    //                         return { name };
    //                     }),
    //                     skills: skills.map(({ name }) => {
    //                         return { name };
    //                     })
    //                 };
    //             })
    //         });
    //     });
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

    console.log(skillName, level, exists);

    if (exists) {
        await knex("users_students_skills")
            .where({ user_student_id, skill_id, level })
            .delete()
            .then(() => {
                console.log("delete");
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
                console.log("add");
                res.send("success");
            });
    }
});

const validSession = (sessionString) => {
    if (!sessionString || !Session.verify(sessionString)) {
        return false;
    } else {
        return true;
    }
};

module.exports = router;
