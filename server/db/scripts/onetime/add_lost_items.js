const { months, lostItems } = require("../../data/lostItems");
const { lookupId } = require("../../../api/helpers/data");
const { knex } = require("../../../api/models/config");

async function addLostItems() {
    await knex("lost_items").del();
    await knex.raw(`ALTER SEQUENCE lost_items_id_seq RESTART WITH 1`);

    // add Rhea and Jeralt first bc they are not in students table
    const house_id = await lookupId("houses", { name: "Faculty" });
    await knex("students").insert({
        name: "Rhea",
        house_id,
        gender: "female",
        recruitable: false
    });
    await knex("students").insert({
        name: "Jeralt",
        house_id,
        gender: "male",
        recruitable: false
    });

    for (let month of months) {
        const monthExists = await knex("months").where({ name: month }).first();
        if (!monthExists) {
            await knex("months").insert({ name: `${month} Moon` });
            console.log("added month", month, "Moon");
        }
    }

    for (let item of lostItems) {
        const { name, location, student, month, condition } = item;

        const itemExists = await knex("lost_items").where({ name }).first();

        if (!itemExists) {
            console.log(student);
            const student_id = await lookupId("students", { name: student });
            const month_id = await lookupId("months", {
                name: `${month} Moon`
            });

            await knex("lost_items").insert({
                name,
                location,
                student_id,
                month_id,
                condition
            });

            console.log("added lost item", name);
        }
    }

    console.log("DONE");
}

addLostItems();
