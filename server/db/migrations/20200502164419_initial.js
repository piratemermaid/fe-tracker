exports.up = async function (knex) {
    await knex.schema.createTable("houses", (table) => {
        table.increments("id");
        table.string("name");
    });

    await knex.schema.createTable("classes", (table) => {
        table.increments("id");
        table.string("name");
        table.string("type");
        table.string("gender");
        table.string("abilities");
        table.string("mastery_ability");
        table.string("mastery_combat_art");
    });

    await knex.schema.createTable("skills", (table) => {
        table.increments("id");
        table.string("name");
    });

    await knex.schema.createTable("students", (table) => {
        table.increments("id");
        table.string("name");
        table.string("gender");
        table.integer("house_id").references("id").inTable("houses");
    });

    await knex.schema.createTable("students_skills", (table) => {
        table.increments("id");
        table.integer("student_id").references("id").inTable("students");
        table.integer("skill_id").references("id").inTable("skills");
        table.boolean("proficient");
        table.boolean("budding");
        table.boolean("weakness");
    });

    await knex.schema.createTable("classes_skills", (table) => {
        table.increments("id");
        table.integer("class_id").references("id").inTable("classes");
        table.integer("skill_id").references("id").inTable("skills");
        table.string("level");
    });

    await knex.schema.createTable("users", (table) => {
        table.increments("id");
        table.string("username").unique().notNullable();
        table.string("email").notNullable();
        table.string("password").notNullable();
        table.string("sessionId");
        table.string("reset_password_token");
        table.timestamp("reset_token_expiry");
    });

    await knex.schema.createTable("users_playthroughs", (table) => {
        table.increments("id");
        table.integer("user_id").references("id").inTable("users");
        table.integer("playthrough");
        table.string("byleth_gender");
        table.integer("house_id").references("id").inTable("houses");
    });

    await knex.schema.createTable("users_students", (table) => {
        table.increments("id");
        table
            .integer("playthrough_id")
            .references("id")
            .inTable("users_playthroughs");
        table.integer("student_id").references("id").inTable("students");
    });

    await knex.schema.createTable("users_students_classes", (table) => {
        table.increments("id");
        table
            .integer("user_student_id")
            .references("id")
            .inTable("users_students");
        table.integer("class_id").references("id").inTable("classes");
        table.boolean("certified");
    });

    await knex.schema.createTable("users_students_skills", (table) => {
        table.increments("id");
        table
            .integer("user_student_id")
            .references("id")
            .inTable("users_students");
        table.integer("skill_id").references("id").inTable("skills");
        table.string("level");
    });
};

exports.down = async function (knex) {
    const tableOrder = [
        "houses",
        "classes",
        "skills",
        "students",
        "students_skills",
        "classes_skills",
        "users",
        "users_playthroughs",
        "users_students",
        "users_students_classes",
        "users_students_skills"
    ];

    for (let i = tableOrder.length - 1; i >= 0; i--) {
        await knex.schema.dropTableIfExists(tableOrder[i]);
    }
};
