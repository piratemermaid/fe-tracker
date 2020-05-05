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

module.exports = router;
