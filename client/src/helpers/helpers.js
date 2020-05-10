import _ from "lodash";

export function getNextClass(classes) {
    if (!classes || (classes && classes.length < 1)) {
        return null;
    }

    const uncertified = classes.filter((sClass) => {
        if (!sClass.certified) {
            return sClass;
        }
    });

    if (uncertified.length < 1) {
        return null;
    }

    const sorted = sortClasses(uncertified);
    return sorted[0];
}

export function getNextSkillGoals({ classes, skills }) {
    if (classes && classes.length > 0) {
        const classesSorted = sortClasses(classes);
        for (let sClass of classesSorted) {
            const { certified, classSkills } = sClass;
            if (!certified) {
                if (!studentIsReadyForCert({ skills, classSkills })) {
                    return classSkills;
                }
            }
        }
    } else {
        return [];
    }
}

export function sortClasses(classes) {
    const order = [
        "Beginner",
        "Intermediate",
        "Advanced",
        "Master",
        "DLC",
        "Unique"
    ];

    return classes.sort((a, b) => {
        return _.indexOf(order, a.type) - _.indexOf(order, b.type);
    });
}

export function studentMeetsSkillReq({ studentSkillLevel, reqLevel }) {
    const skillLevels = ["D", "D+", "C", "C+", "B", "B+", "A", "A+", "S"];

    if (!studentSkillLevel) {
        return false;
    }

    const studentIndex = _.indexOf(skillLevels, studentSkillLevel);
    const reqIndex = _.indexOf(skillLevels, reqLevel);

    return studentIndex >= reqIndex;
}

/**
 * Compares student's obtained skills with skills required for class,
 * and returns whether they are ready for certification aka
 * meet skill requirements
 * @param {array of objects} skills: student's skills
 * @param {array of objects} classSkills: skills required for class
 */
export function studentIsReadyForCert({ skills, classSkills }) {
    const skillsMet = classSkills.filter((skill) => {
        const studentSkill = _.find(skills, {
            name: skill.name
        });
        if (studentSkill) {
            if (
                (studentSkill,
                studentMeetsSkillReq({
                    studentSkillLevel: studentSkill.level,
                    reqLevel: skill.level
                }))
            ) {
                return skill;
            }
        }
    });
    if (skillsMet.length === classSkills.length) {
        return true;
    } else {
        return false;
    }
}

export function getHighestSkillLevel(studentSkills, name) {
    const matches = _.filter(studentSkills, { name });

    if (matches.length < 1) {
        return null;
    } else if (matches.length === 1) {
        return matches[0].level;
    } else {
        let highestLevel = "E";
        for (let skill of matches) {
            const { level } = skill;
            if (level < highestLevel) {
                highestLevel = level;
            }
        }
        return highestLevel;
    }
}

export function stripSpaces(str) {
    return str.replace(/\s+/g, "");
}
