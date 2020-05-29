const _ = require("lodash");
const { knex } = require("../../../api/models/config");
const { studentSkills } = require("../../data/students");

async function fixBuddingSkills() {
    for (let student of studentSkills) {
        const { name, skillName, budding } = student;

        if (budding) {
            const student_id = await knex("students")
                .where({ name })
                .first()
                .then((student) => {
                    return student.id;
                });

            const skill_id = await knex("skills")
                .where({ name: skillName })
                .first()
                .then((skills) => {
                    return skills.id;
                });

            await knex("students_skills")
                .where({ student_id, skill_id })
                .update({ budding: true });
        }
    }

    console.log("done");
}

fixBuddingSkills();
