exports.up = async function (knex) {
    await knex.schema.createTable("months", (table) => {
        table.increments("id");
        table.string("name");
    });

    await knex.schema.createTable("lost_items", (table) => {
        table.increments("id");
        table.string("name");
        table.string("location");
        table
            .integer("student_id")
            .references("id")
            .inTable("students")
            .onDelete("cascade");
        table
            .integer("month_id")
            .references("id")
            .inTable("months")
            .onDelete("cascade");
        table.jsonb("condition");
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("lost_items");
    await knex.schema.dropTableIfExists("months");
};
