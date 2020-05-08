//TODO: remove Rhea and Jeralt, they are not playable

const studentData = [
    {
        name: "Byleth",
        house: "None",
        skills: {
            proficient: ["Sword", "Brawl", "Authority"],
            budding: ["Faith"],
            weakness: []
        }
    },
    {
        name: "Edelgard",
        house: "Black Eagles",
        skills: {
            proficient: ["Sword", "Axe", "Authority", "Heavy Armor"],
            budding: ["Reason"],
            weakness: ["Bow", "Faith"]
        }
    },
    {
        name: "Hubert",
        house: "Black Eagles",
        skills: {
            proficient: ["Reason", "Authority", "Bow"],
            budding: ["Lance"],
            weakness: ["Axe", "Faith", "Flying"]
        }
    },
    {
        name: "Dorothea",
        house: "Black Eagles",
        skills: {
            proficient: ["Sword", "Reason"],
            budding: ["Faith"],
            weakness: ["Riding", "Flying"]
        }
    },
    {
        name: "Ferdinand",
        house: "Black Eagles",
        skills: {
            proficient: ["Sword", "Lance", "Axe", "Riding"],
            budding: ["Heavy Armor"],
            weakness: []
        }
    },
    {
        name: "Bernadetta",
        house: "Black Eagles",
        skills: {
            proficient: ["Lance", "Bow", "Riding"],
            budding: [],
            weakness: ["Sword", "Axe", "Brawl", "Heavy Armor"]
        }
    },
    {
        name: "Caspar",
        house: "Black Eagles",
        skills: {
            proficient: ["Axe", "Brawl"],
            budding: [],
            weakness: ["Bow", "Reason", "Authority"]
        }
    },
    {
        name: "Linhardt",
        house: "Black Eagles",
        skills: {
            proficient: ["Reason", "Faith"],
            budding: [],
            weakness: ["Axe", "Brawl"]
        }
    },
    {
        name: "Petra",
        house: "Black Eagles",
        skills: {
            proficient: ["Sword", "Axe", "Bow", "Flying"],
            budding: [],
            weakness: ["Reason", "Faith"]
        }
    },
    {
        name: "Dimitri",
        house: "Blue Lions",
        skills: {
            proficient: ["Sword", "Lance", "Authority"],
            budding: ["Riding"],
            weakness: ["Axe", "Reason"]
        }
    },
    {
        name: "Dedue",
        house: "Blue Lions",
        skills: {
            proficient: ["Lance", "Axe", "Brawl", "Heavy Armor"],
            budding: [],
            weakness: ["Faith", "Riding", "Flying"]
        }
    },
    {
        name: "Felix",
        house: "Blue Lions",
        skills: {
            proficient: ["Sword", "Bow", "Brawl"],
            budding: ["Reason"],
            weakness: ["Authority"]
        }
    },
    {
        name: "Mercedes",
        house: "Blue Lions",
        skills: {
            proficient: ["Reason", "Faith"],
            budding: ["Bow"],
            weakness: ["Sword", "Lance", "Axe", "Heavy Armor"]
        }
    },
    {
        name: "Ashe",
        house: "Blue Lions",
        skills: {
            proficient: ["Axe", "Bow"],
            budding: ["Lance"],
            weakness: ["Reason"]
        }
    },
    {
        name: "Annette",
        house: "Blue Lions",
        skills: {
            proficient: ["Axe", "Reason", "Authority"],
            budding: [],
            weakness: ["Bow", "Heavy Armor"]
        }
    },
    {
        name: "Sylvain",
        house: "Blue Lions",
        skills: {
            proficient: ["Lance", "Axe", "Riding"],
            budding: ["Reason"],
            weakness: ["Bow"]
        }
    },
    {
        name: "Ingrid",
        house: "Blue Lions",
        skills: {
            proficient: ["Sword", "Lance", "Riding", "Flying"],
            budding: [],
            weakness: []
        }
    },
    {
        name: "Claude",
        house: "Golden Deer",
        skills: {
            proficient: ["Sword", "Bow", "Authority", "Flying"],
            budding: ["Axe"],
            weakness: ["Lance", "Faith"]
        }
    },
    {
        name: "Lorenz",
        house: "Golden Deer",
        skills: {
            proficient: ["Lance", "Reason", "Riding"],
            budding: [],
            weakness: ["Brawl"]
        }
    },
    {
        name: "Hilda",
        house: "Golden Deer",
        skills: {
            proficient: ["Lance", "Axe"],
            budding: ["Heavy Armor"],
            weakness: ["Faith", "Authority"]
        }
    },
    {
        name: "Raphael",
        house: "Golden Deer",
        skills: {
            proficient: ["Axe", "Brawl", "Heavy Armor"],
            budding: [],
            weakness: ["Bow", "Reason", "Riding"]
        }
    },
    {
        name: "Lysithea",
        house: "Golden Deer",
        skills: {
            proficient: ["Reason", "Faith", "Authority"],
            budding: ["Sword"],
            weakness: ["Lance", "Axe", "Heavy Armor"]
        }
    },
    {
        name: "Ignatz",
        house: "Golden Deer",
        skills: {
            proficient: ["Sword", "Bow", "Authority"],
            budding: ["Reason"],
            weakness: ["Flying"]
        }
    },
    {
        name: "Marianne",
        house: "Golden Deer",
        skills: {
            proficient: ["Sword", "Faith", "Riding", "Flying"],
            budding: ["Lance"],
            weakness: ["Brawl", "Heavy Armor"]
        }
    },
    {
        name: "Leonie",
        house: "Golden Deer",
        skills: {
            proficient: ["Lance", "Bow", "Riding"],
            budding: [],
            weakness: []
        }
    },
    {
        name: "Manuela",
        house: "Faculty",
        skills: {
            proficient: ["Sword", "Faith", "Flying"],
            budding: [],
            weakness: ["Reason", "Heavy Armor"]
        }
    },
    {
        name: "Hanneman",
        house: "Faculty",
        skills: {
            proficient: ["Bow", "Reason", "Riding"],
            budding: [],
            weakness: ["Heavy Armor", "Flying"]
        }
    },
    {
        name: "Seteth",
        house: "Faculty",
        skills: {
            proficient: ["Sword", "Lance", "Axe", "Authority", "Flying"],
            budding: [],
            weakness: ["Riding"]
        }
    },
    {
        name: "Flayn",
        house: "Faculty",
        skills: {
            proficient: ["Lance", "Faith"],
            budding: ["Reason"],
            weakness: ["Heavy Armor", "Riding"]
        }
    },
    {
        name: "Cyril",
        house: "Faculty",
        skills: {
            proficient: ["Lance", "Axe", "Bow", "Riding", "Flying"],
            budding: [],
            weakness: ["Reason", "Faith"]
        }
    },
    {
        name: "Catherine",
        house: "Faculty",
        skills: {
            proficient: ["Sword", "Brawl"],
            budding: [],
            weakness: ["Reason"]
        }
    },
    {
        name: "Alois",
        house: "Faculty",
        skills: {
            proficient: ["Axe", "Brawl", "Heavy Armor"],
            budding: [],
            weakness: ["Reason", "Flying"]
        }
    },
    {
        name: "Gilbert",
        house: "Faculty",
        skills: {
            proficient: ["Lance", "Axe", "Heavy Armor", "Riding"],
            budding: [],
            weakness: []
        }
    },
    {
        name: "Shamir",
        house: "Faculty",
        skills: {
            proficient: ["Lance", "Bow"],
            budding: [],
            weakness: ["Faith"]
        }
    }
    // TODO: add DLC and genders
];

let studentSkills = [];

for (let student of studentData) {
    const { name, house, skills } = student;
    for (let type in skills) {
        for (let skillName of skills[type]) {
            studentSkills.push({
                name,
                proficient: type === "proficient",
                budding: type === "buddying",
                weakness: type === "weakness",
                skillName
            });
        }
    }
}

module.exports = {
    students: studentData.map(({ name, house, gender, unique_class }) => {
        return {
            name,
            house,
            gender: gender || null,
            unique_class: unique_class || null
        };
    }),
    studentSkills
};
