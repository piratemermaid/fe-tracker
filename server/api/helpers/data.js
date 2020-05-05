const _ = require("lodash");
const { knex } = require("../models/config");

async function lookupPlaythroughId(user) {
    const playthroughs = await knex("users_playthroughs").where({
        user_id: user.id
    });

    const current = playthroughs[playthroughs.length - 1];
    return current.id;
}

function lookupId(table, obj) {
    return knex(table)
        .where(obj)
        .first()
        .then((result) => {
            return result.id;
        });
}

function sortClassesByType(classes) {
    const order = ["Beginner", "Intermediate", "Advanced", "Master", "Unique"];

    return classes.sort((a, b) => {
        return _.indexOf(order, a.type) - _.indexOf(order, b.type);
    });
}

module.exports = { lookupPlaythroughId, lookupId, sortClassesByType };
