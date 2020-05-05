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

// TODO: add skills info
router.get("/students", (req, res) => {
    models.Student.fetchAll({ withRelated: "house" }).then((result) => {
        const students = result.toJSON();
        res.send(
            students.map(({ name, gender, house }) => {
                return { name, gender, house: house.name };
            })
        );
    });
});

module.exports = router;
