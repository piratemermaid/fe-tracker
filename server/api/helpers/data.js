const _ = require("lodash");
const { knex } = require("../models/config");

async function lookupPlaythroughId(user) {
    const playthroughs = await knex("users_playthroughs").where({
        user_id: user.id
    });

    const current = playthroughs[playthroughs.length - 1];
    return current.id;
}

function lookupId(table, obj) {
    return knex(table)
        .where(obj)
        .first()
        .then((result) => {
            return result.id;
        });
}

function sortClassesByType(classes) {
    const order = ["Beginner", "Intermediate", "Advanced", "Master", "Unique"];

    return classes.sort((a, b) => {
        return _.indexOf(order, a.type) - _.indexOf(order, b.type);
    });
}

function sortStudents(students, house) {
    const sortedByOrderCol = _.orderBy(students, ["student.order"], ["asc"]);

    let first = ["Byleth"];
    const houseStudents = _.compact(
        sortedByOrderCol.map((student) => {
            const studentHouse = student.student.house.name;
            if (house && studentHouse === house) {
                return student.student.name;
            }
        })
    );
    const nonHouseStudents = _.compact(
        sortedByOrderCol.map((student) => {
            if (!houseStudents.includes(student.student.name)) {
                return student.student.name;
            }
        })
    );

    const order = first.concat(houseStudents, nonHouseStudents);

    return sortedByOrderCol.sort((a, b) => {
        const indexA = _.indexOf(order, a.student.name);
        const indexB = _.indexOf(order, b.student.name);
        return indexA - indexB;
    });
}

function getHighestSkillLevels(skills) {
    const skillLevels = ["D", "D+", "C", "C+", "B", "B+", "A", "A+", "S"];

    if (skills.length > 0) {
        let highestSkills = [];
        for (let skill of skills) {
            const highestCurrent = _.find(highestSkills, {
                name: skill.skill.name
            });
            if (!highestCurrent) {
                highestSkills.push({
                    name: skill.skill.name,
                    level: skill.level
                });
            } else {
                if (
                    _.indexOf(skillLevels, highestCurrent.level) <
                    _.indexOf(skillLevels, skill.level)
                ) {
                    const index = _.findIndex(highestSkills, {
                        name: skill.skill.name
                    });
                    highestSkills.splice(index, 1);
                    highestSkills.push({
                        name: skill.skill.name,
                        level: skill.level
                    });
                }
            }
        }

        return highestSkills;
    } else {
        return [];
    }
}

module.exports = {
    lookupPlaythroughId,
    lookupId,
    sortClassesByType,
    sortStudents,
    getHighestSkillLevels
};
