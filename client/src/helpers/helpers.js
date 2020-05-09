import _ from "lodash";

export function getNextClass(classes) {
    if (classes.length < 1) {
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

// TODO: test this more
export function studentMeetsSkillReq(studentSkillLevel, reqLevel) {
    if (!studentSkillLevel) {
        return false;
    }

    return studentSkillLevel <= reqLevel;
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
