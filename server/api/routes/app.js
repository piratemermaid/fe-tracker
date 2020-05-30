const _ = require("lodash");
const { Router } = require("express");
const models = require("../models/bookshelf_models");

const router = new Router();

router.get("/classes", (req, res) => {
    models.Class.fetchAll({
        withRelated: [
            {
                skills(qb) {
                    qb.column("name", "level");
                }
            },
            "student"
        ]
    }).then((result) => {
        const classes = result.toJSON();

        res.send(
            classes.map(
                ({
                    name,
                    type,
                    gender,
                    abilities,
                    student,
                    mastery_ability,
                    mastery_combat_art,
                    skills
                }) => {
                    let uniqueStudent = null;
                    if (student.length > 0) {
                        uniqueStudent = student[0].name;
                    }
                    return {
                        name,
                        type,
                        gender,
                        abilities,
                        student: uniqueStudent,
                        mastery_ability,
                        mastery_combat_art,
                        skills: skills.map(({ name, level }) => {
                            return { name, level };
                        })
                    };
                }
            )
        );
    });
});

router.get("/students", (req, res) => {
    models.Student.fetchAll({
        withRelated: [
            "house",
            {
                skills(qb) {
                    qb.column("name", "proficient", "budding", "weakness");
                }
            },
            "gifts"
        ]
    }).then((result) => {
        const students = _.sortBy(result.toJSON(), "order");
        res.send(
            students.map(
                ({
                    name,
                    gender,
                    recruitable,
                    house,
                    skills,
                    gifts,
                    order
                }) => {
                    return {
                        name,
                        gender,
                        recruitable,
                        house: house.name,
                        skills: skills.map(
                            ({ name, proficient, budding, weakness }) => {
                                return { name, proficient, budding, weakness };
                            }
                        ),
                        gifts: gifts.map(({ name, grade }) => {
                            return { name, grade };
                        }),
                        order
                    };
                }
            )
        );
    });
});

router.get("/class_percentage", async (req, res) => {
    const { studentName } = req.query;

    const classesResult = await models.Class.fetchAll({
        withRelated: [
            {
                skills(qb) {
                    qb.column("name", "level");
                }
            },
            "student"
        ]
    });

    const classes = classesResult.toJSON().map(({ name, type }) => {
        return { name, type };
    });

    let userClasses = {};
    for (let sClass of classesResult.toJSON()) {
        const { name } = sClass;
        userClasses[name] = 0;
    }

    const userClassesResult = await models.User.fetchAll({
        withRelated: [
            "playthroughs.userStudents.student",
            "playthroughs.userStudents.userStudentClasses.class"
        ]
    });

    for (let userResult of userClassesResult.toJSON()) {
        const { playthroughs } = userResult;
        for (let playthrough of playthroughs) {
            const { userStudents } = playthrough;
            for (let userStudent of userStudents) {
                const { student, userStudentClasses } = userStudent;
                if (
                    student.name === studentName &&
                    userStudentClasses.length > 0
                ) {
                    for (let sClass of userStudentClasses) {
                        const className = sClass.class.name;
                        userClasses[className] = userClasses[className] + 1;
                    }
                }
            }
        }
    }

    const begPercentages = getPercentage(classes, "Beginner", userClasses);
    const interPercentages = getPercentage(
        classes,
        "Intermediate",
        userClasses
    );
    const advPercentages = getPercentage(classes, "Advanced", userClasses);
    const masterPercentages = getPercentage(classes, "Master", userClasses);

    res.send(
        _.union(
            begPercentages,
            interPercentages,
            advPercentages,
            masterPercentages
        )
    );
});

function getPercentage(classes, type, userClasses) {
    const typeClasses = _.filter(classes, { type });

    let total = 0;

    for (let sClass of typeClasses) {
        const { name } = sClass;
        total += userClasses[name];
    }

    return typeClasses.map(({ name }) => {
        if (total === 0 || userClasses[name] === 0) {
            return { name, percentage: 0 };
        } else {
            return { name, percentage: (100 * userClasses[name]) / total };
        }
    });
}

module.exports = router;
