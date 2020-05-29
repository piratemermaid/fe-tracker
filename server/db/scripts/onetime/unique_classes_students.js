const { classes } = require("../../data/classes");
const { lookupId } = require("../../../api/helpers/data");
const { knex } = require("../../../api/models/config");

async function connectUniqueClassesToStudents() {
    const uniqueClasses = classes.filter((sClass) => {
        if (sClass.type === "Unique") {
            return sClass;
        }
    });

    for (let sClass of uniqueClasses) {
        const { name, student } = sClass;
        if (student) {
            const class_id = await lookupId("classes", { name });
            const student_id = await lookupId("students", { name: student });

            await knex("unique_classes_students").insert({
                class_id,
                student_id
            });
        }
    }
}

connectUniqueClassesToStudents();
