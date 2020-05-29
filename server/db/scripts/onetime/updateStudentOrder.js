const _ = require("lodash");
const { knex } = require("../../../api/models/config");
const { students } = require("../../data/students");

async function updateStudentOrder() {
    for (let student of students) {
        const { name, order } = student;

        const id = await knex("students")
            .where({ name })
            .first()
            .then((student) => {
                return student.id;
            });

        await knex("students").where({ id }).update({ order });
    }

    console.log("done");
}

updateStudentOrder();
