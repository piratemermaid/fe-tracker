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
            }
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
                    mastery_ability,
                    mastery_combat_art,
                    skills
                }) => {
                    return {
                        name,
                        type,
                        gender,
                        abilities,
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
        const students = result.toJSON();
        res.send(
            students.map(
                ({ name, gender, recruitable, house, skills, gifts }) => {
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
                        })
                    };
                }
            )
        );
    });
});

module.exports = router;
