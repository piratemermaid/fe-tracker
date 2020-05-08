import _ from "lodash";

export function getNextClass(classes) {
    for (let sClass of classes) {
        const { certified } = sClass;
        if (!certified) {
            return sClass;
        }
    }
    return null;
}

// TODO: test this more
export function studentMeetsSkillReq(name, studentSkillLevel, reqLevel) {
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
