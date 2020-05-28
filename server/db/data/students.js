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
        },
        gifts: []
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
        },
        gifts: [
            "Armored Bear Stuffy",
            "Monarch Studies Book",
            "Board Game",
            "Carnation"
        ]
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
        },
        gifts: ["Board Game", "Coffee Beans"]
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
        },
        gifts: ["Whetstone", "Riding Boots", "Tea Leaves"]
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
        },
        gifts: ["Fishing Float", "Tasty Baked Treat", "Book of Crest Designs"]
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
        },
        gifts: ["Smoked Meat", "Hunting Dagger", "Whetstone", "Training Weight"]
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
        },
        gifts: [
            "Watering Can",
            "Dapper Handkerchief",
            "Armored Bear Stuffy",
            "Pitcher Plant"
        ]
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
        },
        gifts: ["Gemstone Beads", "Stylish Hair Clip", "Book of Sheet Music"]
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
        },
        gifts: ["Smoked Meat", "Hunting Dagger", "Exotic Spices", "Sunflower"]
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
        },
        gifts: [
            "Whetstone",
            "Training Weight",
            "Riding Boots",
            "Ceremonial Sword"
        ]
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
        },
        gifts: ["Floral Adornment", "Watering Can", "Exotic Spices"]
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
        },
        gifts: [
            "Smoked Meat",
            "Hunting Dagger",
            "Training Weight",
            "Ceremonial Sword"
        ]
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
        },
        gifts: [
            "Tasty Baked Treat",
            "Gemstone Beads",
            "Armored Bear Stuffy",
            "Goddess Statuette",
            "Lavender"
        ]
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
        },
        gifts: [
            "Tasty Baked Treat",
            "Legends of Chivalry",
            "Ancient Coin",
            "Exotic Spices",
            "Violet"
        ]
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
        },
        gifts: [
            "Stylish Hair Clip",
            "Book of Sheet Music",
            "Arithmetic Textbook"
        ]
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
        },
        gifts: ["Dapper Handkerchief", "Board Game", "Landscape Painting"]
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
        },
        gifts: ["Smoked Meat", "Riding Boots", "Legends of Chivalry"]
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
        },
        gifts: [
            "Whetstone",
            "Riding Boots",
            "Exotic Spices",
            "Board Game",
            "Book of Crest Designs"
        ]
    },
    {
        name: "Lorenz",
        house: "Golden Deer",
        gender: "male",
        skills: {
            proficient: ["Lance", "Reason", "Riding"],
            budding: [],
            weakness: ["Brawl"]
        },
        gifts: ["Floral Adornment", "Tea Leaves", "Rose"]
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
        },
        gifts: ["Tasty Baked Treat", "Smoked Meat", "Training Weight"]
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
        },
        gifts: [
            "Goddess Statuette",
            "Ancient Coin",
            "Ceremonial Sword",
            "Landscape Painting",
            "Forget-me-nots"
        ]
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
        },
        gifts: [
            "Tasty Baked Treat",
            "Armored Bear Stuffy",
            "Arithmetic Textbook",
            "Lily"
        ]
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
        },
        gifts: [
            "Floral Adornment",
            "Dapper Handkerchief",
            "Armored Bear Stuffy",
            "Lily of the Valley"
        ]
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
        },
        gifts: [
            "Gemstone Beads",
            "Stylish Hair Clip",
            "Dapper Handkerchief",
            "Armored Bear Stuffy",
            "Anemone"
        ]
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
        },
        gifts: ["Fishing Float", "Hunting Dagger", "Training Weight"]
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
        },
        gifts: [
            "Gemstone Beads",
            "Goddess Statuette",
            "Book of Sheet Music",
            "Blue Cheese"
        ]
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
        },
        gifts: [
            "Dapper Handkerchief",
            "Tea Leaves",
            "Arithmetic Textbook",
            "Book of Crest Designs"
        ]
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
        },
        gifts: ["Fishing Float", "Dapper Handkerchief", "The History of Fodlan"]
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
        },
        gifts: [
            "Tasty Baked Treat",
            "Stylish Hair Clip",
            "Dapper Handkerchief",
            "Armored Bear Stuffy",
            "Forget-me-nots"
        ]
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
        },
        gifts: [
            "Smoked Meat",
            "Hunting Dagger",
            "Watering Can",
            "Baby's Breath"
        ]
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
        },
        gifts: [
            "Whetstone",
            "Training Weight",
            "Legends of Chivalry",
            "Blue Cheese"
        ]
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
        },
        gifts: [
            "Floral Adornment",
            "Fishing Float",
            "Ancient Coin",
            "Sunflower"
        ]
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
        },
        gifts: ["Fishing Float", "Goddess Statuette", "Ceremonial Sword"]
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
        },
        gifts: ["Hunting Dagger", "Exotic Spices", "Coffee Beans", "Sunflower"]
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
        },
        gifts: ["Tasty Baked Treat", "Hunting Dagger"]
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
        },
        gifts: [
            "Goddess Statuette",
            "Ancient Coin",
            "Exotic Spices",
            "Coffee Beans",
            "Blue Cheese",
            "Landscape Painting",
            "Forget-me-nots"
        ]
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
        },
        gifts: []
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
        },
        gifts: []
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
        },
        gifts: []
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
        },
        gifts: []
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
                budding: type === "budding",
                weakness: type === "weakness",
                skillName
            });
        }
    }
}

let i = 0;
module.exports = {
    students: studentData.map(
        ({ name, house, gender, recruitable, unique_class, gifts }) => {
            i++;
            return {
                name,
                house,
                gender: gender || null,
                recruitable,
                unique_class: unique_class || null,
                gifts,
                order: i
            };
        }
    ),
    studentSkills
};
