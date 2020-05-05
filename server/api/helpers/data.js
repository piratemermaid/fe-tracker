const { knex } = require("../models/config");

async function lookupPlaythroughId(user) {
    const playthroughs = await knex("users_playthroughs")
        .where({ user_id: user.id })
        .then((results) => {
            return results;
        });
    const current = playthroughs[playthroughs.length - 1];
    return current.id;
}

async function lookupId(table, obj) {
    return knex(table)
        .where(obj)
        .first()
        .then((result) => {
            return result.id;
        });
}

module.exports = { lookupPlaythroughId, lookupId };
