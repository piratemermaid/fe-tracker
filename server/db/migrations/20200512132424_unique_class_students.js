exports.up = async function (knex) {
    await knex.schema.createTable("unique_classes_students", (table) => {
        table.increments("id");
        table
            .integer("class_id")
            .references("id")
            .inTable("classes")
            .onDelete("cascade");
        table
            .integer("student_id")
            .references("id")
            .inTable("students")
            .onDelete("cascade");
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("unique_classes_students");
};
