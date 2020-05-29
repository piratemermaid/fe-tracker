const _ = require("lodash");
const { knex } = require("../../../api/models/config");
const gifts = require("../../data/gifts");
const { students } = require("../../data/students");

async function addGifts() {
    await knex("gifts").del();
    await knex.raw(`ALTER SEQUENCE gifts_id_seq RESTART WITH 1`);
    await knex("students_gifts").del();
    await knex.raw(`ALTER SEQUENCE students_gifts_id_seq RESTART WITH 1`);

    const giftsByName = _.keyBy(
        await knex("gifts").insert(gifts).returning("*"),
        "name"
    );

    for (let student of students) {
        const { name, gifts } = student;

        if (gifts && gifts.length > 0) {
            const student_id = await knex("students")
                .where({ name })
                .first()
                .then((student) => {
                    return student.id;
                });

            for (let gift of gifts) {
                await knex("students_gifts").insert({
                    student_id,
                    gift_id: giftsByName[gift].id
                });
            }
        }
    }

    console.log("done");
}

addGifts();
