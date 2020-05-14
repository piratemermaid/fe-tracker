const { students } = require("../data/students");
const { lookupId } = require("../../api/helpers/data");
const { knex } = require("../../api/models/config");

async function reorderStudents() {
    for (let student of students) {
        const { name, order } = student;

        const student_id = await lookupId("students", { name });
        const orderCurrent = await knex("students")
            .where({ name })
            .first()
            .then((x) => {
                return x.order;
            });

        if (order !== orderCurrent) {
            await knex("students")
                .where({ name })
                .update({ order })
                .then(() => {
                    console.log("updated", name);
                });
        }
    }

    console.log("done");
}

reorderStudents();
