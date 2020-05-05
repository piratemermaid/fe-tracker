const { keyBy } = require("lodash");
const { classes, classSkills } = require("../data/classes");
const skills = require("../data/skills");
const { students, studentSkills } = require("../data/students");
const houses = require("../data/houses");
const { hash } = require("../../api/helpers/account");

exports.seed = async function (knex) {
    for (let i = tableOrder.length - 1; i >= 0; i--) {
        await resetTable(knex, tableOrder[i]);
    }

    const housesByName = keyBy(
        await knex("houses")
            .insert(
                houses.map((name) => {
                    return { name };
                })
            )
            .returning("*"),
        "name"
    );

    const classesByName = keyBy(
        await knex("classes")
            .insert(
                classes.map(({ name, type, gender, abilities, mastery }) => {
                    return {
                        name,
                        type,
                        // gender: gender || null,
                        abilities,
                        mastery_ability: mastery.ability,
                        mastery_combat_art: mastery.combat_art
                    };
                })
            )
            .returning("*"),
        "name"
    );

    const skillsByName = keyBy(
        await knex("skills")
            .insert(
                skills.map((name) => {
                    return { name };
                })
            )
            .returning("*"),
        "name"
    );

    const studentsByName = keyBy(
        await knex("students")
            .insert(
                students.map(({ name, gender, house }) => {
                    return {
                        name,
                        gender,
                        house_id: housesByName[house].id
                    };
                })
            )
            .returning("*"),
        "name"
    );

    await knex("students_skills").insert(
        studentSkills.map(
            ({ name, proficient, budding, weakness, skillName }) => {
                return {
                    student_id: studentsByName[name].id,
                    skill_id: skillsByName[skillName].id,
                    proficient,
                    budding,
                    weakness
                };
            }
        )
    );

    await knex("classes_skills").insert(
        classSkills.map(({ name, skillName, level }) => {
            return {
                class_id: classesByName[name].id,
                skill_id: skillsByName[skillName].id,
                level
            };
        })
    );

    await knex("users").insert({
        username: "testuser",
        password: hash("userpass12"),
        email: "a@a.com"
    });
};

// delete table and reset to start at id 1
const resetTable = async (knex, tableName) => {
    await knex(tableName).del();
    await knex.raw(`ALTER SEQUENCE ${tableName}_id_seq RESTART WITH 1`);
};

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
