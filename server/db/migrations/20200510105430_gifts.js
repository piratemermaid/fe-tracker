exports.up = async function (knex) {
    await knex.schema.createTable("gifts", (table) => {
        table.increments("id");
        table.string("name");
        table.integer("grade");
    });

    await knex.schema.createTable("students_gifts", (table) => {
        table.increments("id");
        table
            .integer("student_id")
            .references("id")
            .inTable("students")
            .onDelete("cascade");
        table
            .integer("gift_id")
            .references("id")
            .inTable("gifts")
            .onDelete("cascade");
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("gifts");
    await knex.schema.dropTableIfExists("students_gifts");
};
