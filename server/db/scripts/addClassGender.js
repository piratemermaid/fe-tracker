const _ = require("lodash");
const { knex } = require("../../api/models/config");
const { classes } = require("../data/classes");

async function addClassGender() {
    for (let sClass of classes) {
        const { name, gender } = sClass;

        if (gender) {
            await knex("classes").where({ name }).update({ gender });
            console.log("added", gender, "to", name);
        }
    }

    console.log("done");
}

addClassGender();
