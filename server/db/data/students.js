//TODO: remove Rhea and Jeralt, they are not playable

const studentData = [
    {
        name: "Byleth",
        house: "None",
        gender: "female",
        recruitable: false,
        skills: {
            proficient: ["Sword", "Brawl", "Authority"],
            budding: ["Faith"],
            weakness: []
        }
    },
    {
        name: "Edelgard",
        house: "Black Eagles",
        gender: "female",
        recruitable: false,
        skills: {
            proficient: ["Sword", "Axe", "Authority", "Heavy Armor"],
            budding: ["Reason"],
            weakness: ["Bow", "Faith"]
        }
    },
    {
        name: "Hubert",
        house: "Black Eagles",
        gender: "male",
        recruitable: false,
        skills: {
            proficient: ["Reason", "Authority", "Bow"],
            budding: ["Lance"],
            weakness: ["Axe", "Faith", "Flying"]
        }
    },
    {
        name: "Dorothea",
        house: "Black Eagles",
        gender: "female",
        recruitable: true,
        skills: {
            proficient: ["Sword", "Reason"],
            budding: ["Faith"],
            weakness: ["Riding", "Flying"]
        }
    },
    {
        name: "Ferdinand",
        house: "Black Eagles",
        gender: "male",
        recruitable: true,
        skills: {
            proficient: ["Sword", "Lance", "Axe", "Riding"],
            budding: ["Heavy Armor"],
            weakness: []
        }
    },
    {
        name: "Bernadetta",
        house: "Black Eagles",
        gender: "female",
        recruitable: true,
        skills: {
            proficient: ["Lance", "Bow", "Riding"],
            budding: [],
            weakness: ["Sword", "Axe", "Brawl", "Heavy Armor"]
        }
    },
    {
        name: "Caspar",
        house: "Black Eagles",
        gender: "male",
        recruitable: true,
        skills: {
            proficient: ["Axe", "Brawl"],
            budding: [],
            weakness: ["Bow", "Reason", "Authority"]
        }
    },
    {
        name: "Linhardt",
        house: "Black Eagles",
        gender: "male",
        recruitable: true,
        skills: {
            proficient: ["Reason", "Faith"],
            budding: [],
            weakness: ["Axe", "Brawl"]
        }
    },
    {
        name: "Petra",
        house: "Black Eagles",
        gender: "female",
        recruitable: true,
        skills: {
            proficient: ["Sword", "Axe", "Bow", "Flying"],
            budding: [],
            weakness: ["Reason", "Faith"]
        }
    },
    {
        name: "Dimitri",
        house: "Blue Lions",
        gender: "male",
        recruitable: false,
        skills: {
            proficient: ["Sword", "Lance", "Authority"],
            budding: ["Riding"],
            weakness: ["Axe", "Reason"]
        }
    },
    {
        name: "Dedue",
        house: "Blue Lions",
        gender: "male",
        recruitable: false,
        skills: {
            proficient: ["Lance", "Axe", "Brawl", "Heavy Armor"],
            budding: [],
            weakness: ["Faith", "Riding", "Flying"]
        }
    },
    {
        name: "Felix",
        house: "Blue Lions",
        gender: "male",
        recruitable: true,
        skills: {
            proficient: ["Sword", "Bow", "Brawl"],
            budding: ["Reason"],
            weakness: ["Authority"]
        }
    },
    {
        name: "Mercedes",
        house: "Blue Lions",
        gender: "female",
        recruitable: true,
        skills: {
            proficient: ["Reason", "Faith"],
            budding: ["Bow"],
            weakness: ["Sword", "Lance", "Axe", "Heavy Armor"]
        }
    },
    {
        name: "Ashe",
        house: "Blue Lions",
        gender: "male",
        recruitable: true,
        skills: {
            proficient: ["Axe", "Bow"],
            budding: ["Lance"],
            weakness: ["Reason"]
        }
    },
    {
        name: "Annette",
        house: "Blue Lions",
        gender: "female",
        recruitable: true,
        skills: {
            proficient: ["Axe", "Reason", "Authority"],
            budding: [],
            weakness: ["Bow", "Heavy Armor"]
        }
    },
    {
        name: "Sylvain",
        house: "Blue Lions",
        gender: "male",
        recruitable: true,
        skills: {
            proficient: ["Lance", "Axe", "Riding"],
            budding: ["Reason"],
            weakness: ["Bow"]
        }
    },
    {
        name: "Ingrid",
        house: "Blue Lions",
        gender: "female",
        recruitable: true,
        skills: {
            proficient: ["Sword", "Lance", "Riding", "Flying"],
            budding: [],
            weakness: []
        }
    },
    {
        name: "Claude",
        house: "Golden Deer",
        gender: "male",
        recruitable: false,
        skills: {
            proficient: ["Sword", "Bow", "Authority", "Flying"],
            budding: ["Axe"],
            weakness: ["Lance", "Faith"]
        }
    },
    {
        name: "Lorenz",
        house: "Golden Deer",
        gender: "male",
        skills: {
            proficient: ["Lance", "Reason", "Riding"],
            budding: [],
            weakness: ["Brawl"]
        }
    },
    {
        name: "Hilda",
        house: "Golden Deer",
        gender: "female",
        recruitable: true,
        skills: {
            proficient: ["Lance", "Axe"],
            budding: ["Heavy Armor"],
            weakness: ["Faith", "Authority"]
        }
    },
    {
        name: "Raphael",
        house: "Golden Deer",
        gender: "male",
        recruitable: true,
        skills: {
            proficient: ["Axe", "Brawl", "Heavy Armor"],
            budding: [],
            weakness: ["Bow", "Reason", "Riding"]
        }
    },
    {
        name: "Lysithea",
        house: "Golden Deer",
        gender: "female",
        recruitable: true,
        skills: {
            proficient: ["Reason", "Faith", "Authority"],
            budding: ["Sword"],
            weakness: ["Lance", "Axe", "Heavy Armor"]
        }
    },
    {
        name: "Ignatz",
        house: "Golden Deer",
        gender: "male",
        recruitable: true,
        skills: {
            proficient: ["Sword", "Bow", "Authority"],
            budding: ["Reason"],
            weakness: ["Flying"]
        }
    },
    {
        name: "Marianne",
        house: "Golden Deer",
        gender: "female",
        recruitable: true,
        skills: {
            proficient: ["Sword", "Faith", "Riding", "Flying"],
            budding: ["Lance"],
            weakness: ["Brawl", "Heavy Armor"]
        }
    },
    {
        name: "Leonie",
        house: "Golden Deer",
        gender: "female",
        recruitable: true,
        skills: {
            proficient: ["Lance", "Bow", "Riding"],
            budding: [],
            weakness: []
        }
    },
    {
        name: "Manuela",
        house: "Faculty",
        gender: "female",
        recruitable: true,
        skills: {
            proficient: ["Sword", "Faith", "Flying"],
            budding: [],
            weakness: ["Reason", "Heavy Armor"]
        }
    },
    {
        name: "Hanneman",
        house: "Faculty",
        gender: "male",
        recruitable: true,
        skills: {
            proficient: ["Bow", "Reason", "Riding"],
            budding: [],
            weakness: ["Heavy Armor", "Flying"]
        }
    },
    {
        name: "Seteth",
        house: "Faculty",
        gender: "male",
        recruitable: true,
        skills: {
            proficient: ["Sword", "Lance", "Axe", "Authority", "Flying"],
            budding: [],
            weakness: ["Riding"]
        }
    },
    {
        name: "Flayn",
        house: "Faculty",
        gender: "female",
        recruitable: true,
        skills: {
            proficient: ["Lance", "Faith"],
            budding: ["Reason"],
            weakness: ["Heavy Armor", "Riding"]
        }
    },
    {
        name: "Cyril",
        house: "Faculty",
        gender: "male",
        recruitable: true,
        skills: {
            proficient: ["Lance", "Axe", "Bow", "Riding", "Flying"],
            budding: [],
            weakness: ["Reason", "Faith"]
        }
    },
    {
        name: "Catherine",
        house: "Faculty",
        gender: "female",
        recruitable: true,
        skills: {
            proficient: ["Sword", "Brawl"],
            budding: [],
            weakness: ["Reason"]
        }
    },
    {
        name: "Alois",
        house: "Faculty",
        gender: "male",
        recruitable: true,
        skills: {
            proficient: ["Axe", "Brawl", "Heavy Armor"],
            budding: [],
            weakness: ["Reason", "Flying"]
        }
    },
    {
        name: "Gilbert",
        house: "Faculty",
        gender: "male",
        recruitable: true,
        skills: {
            proficient: ["Lance", "Axe", "Heavy Armor", "Riding"],
            budding: [],
            weakness: []
        }
    },
    {
        name: "Shamir",
        house: "Faculty",
        gender: "female",
        recruitable: true,
        skills: {
            proficient: ["Lance", "Bow"],
            budding: [],
            weakness: ["Faith"]
        }
    },
    {
        name: "Jeritza",
        house: "DLC",
        gender: "male",
        recruitable: true,
        skills: {
            proficient: ["Sword", "Lance", "Brawl", "Riding"],
            budding: ["Flying"],
            weakness: ["Faith", "Authority"]
        }
    },
    {
        name: "Anna",
        house: "DLC",
        gender: "female",
        recruitable: true,
        skills: {
            proficient: ["Sword", "Axe", "Bow", "Faith"],
            budding: ["Riding"],
            weakness: ["Reason", "Authority"]
        }
    },
    {
        name: "Yuri",
        house: "DLC",
        gender: "male",
        recruitable: true,
        skills: {
            proficient: ["Sword", "Reason", "Faith", "Authority"],
            budding: ["Bow"],
            weakness: ["Lance", "Axe", "Riding", "Flying"]
        }
    },
    {
        name: "Balthus",
        house: "DLC",
        gender: "male",
        recruitable: true,
        skills: {
            proficient: ["Sword", "Axe", "Brawl", "Faith", "Heavy Armor"],
            budding: ["Reason"],
            weakness: ["Lance", "Bow", "Flying"]
        }
    },
    {
        name: "Constance",
        house: "DLC",
        gender: "female",
        recruitable: true,
        skills: {
            proficient: ["Sword", "Reason", "Authority", "Flying"],
            budding: ["Brawl"],
            weakness: ["Axe", "Heavy Armor"]
        }
    },
    {
        name: "Hapi",
        house: "DLC",
        gender: "female",
        recruitable: true,
        skills: {
            proficient: ["Reason", "Riding", "Flying"],
            budding: ["Axe"],
            weakness: ["Brawl", "Authority", "Heavy Armor"]
        }
    }
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
    students: studentData.map(
        ({ name, house, gender, recruitable, unique_class }) => {
            return {
                name,
                house,
                gender: gender || null,
                recruitable,
                unique_class: unique_class || null
            };
        }
    ),
    studentSkills
};
