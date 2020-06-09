exports.up = async function (knex) {
    await knex.schema.createTable("users_lost_items", (table) => {
        table.increments("id");
        table
            .integer("playthrough_id")
            .references("id")
            .inTable("users_playthroughs")
            .onDelete("cascade");
        table
            .integer("lost_item_id")
            .references("id")
            .inTable("lost_items")
            .onDelete("cascade");
        table.boolean("found");
        table.boolean("returned");
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("users_lost_items");
};
