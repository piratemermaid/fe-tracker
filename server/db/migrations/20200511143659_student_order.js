exports.up = async function (knex) {
    await knex.schema.table("students", (table) => {
        table.integer("order");
    });
};

exports.down = async function (knex) {
    return knex.schema.table("students", function (table) {
        table.dropColumn("order");
    });
};
