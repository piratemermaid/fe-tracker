const { lookupId } = require("../../../api/helpers/data");
const { knex } = require("../../../api/models/config");

const students = [
    {
        name: "Yuri",
        gifts: [
            "Tasty Baked Treat",
            "Goddess Statuette",
            "Arithmetic Textbook",
            "Board Game"
        ]
    },
    {
        name: "Balthus",
        gifts: ["Whetstone", "Ancient Coin", "Ceremonial Sword", "Blue Cheese"]
    },
    {
        name: "Constance",
        gifts: [
            "Lily of the Valley",
            "Tea Leaves",
            "Arithmetic Textbook",
            "Book of Crest Designs"
        ]
    },
    {
        name: "Hapi",
        gifts: [
            "Tasty Baked Treat",
            "Smoked Meat",
            "Hunting Dagger",
            "Pitcher Plant",
            "Exotic Spices",
            "Coffee Beans"
        ]
    },
    {
        name: "Rhea",
        gifts: ["Goddess Statuette", "Ancient Coin", "Landscape Painting"]
    }
];

async function updateGifts() {
    for (let student of students) {
        const { name, gifts } = student;
        const student_id = await lookupId("students", { name });

        for (let gift of gifts) {
            const gift_id = await lookupId("gifts", { name: gift });
            await knex("students_gifts").insert({ student_id, gift_id });
        }
    }

    console.log("done");
}

updateGifts();
