const classData = [
    {
        name: "Myrmidon",
        type: "Beginner",
        skills: [{ name: "Sword", level: "D" }],
        abilities: null,
        mastery: { ability: "Speed +3", combat_art: "Swap" }
    },
    {
        name: "Soldier",
        type: "Beginner",
        skills: [{ name: "Lance", level: "D" }],
        abilities: null,
        mastery: { ability: "Defense +2", combat_art: "Reposition" }
    },
    {
        name: "Fighter",
        type: "Beginner",
        skills: [
            { name: "Axe", level: "D" },
            { name: "Bow", level: "D" },
            { name: "Brawl", level: "D" }
        ],
        abilities: null,
        mastery: { ability: "Strength +2", combat_art: "Shove" }
    },
    {
        name: "Monk",
        type: "Beginner",
        skills: [
            { name: "Reason", level: "D" },
            { name: "Faith", level: "D" }
        ],
        abilities: null,
        mastery: { ability: "Magic +2", combat_art: "Draw Back" }
    },
    {
        name: "Lord",
        type: "Intermediate",
        skills: [
            { name: "Sword", level: "D+" },
            { name: "Authority", level: "C" }
        ],
        abilities: "Charm",
        mastery: { ability: "Resistance +2", combat_art: "Subdue" }
    },
    {
        name: "Mercenary",
        type: "Intermediate",
        skills: [{ name: "Sword", level: "C" }],
        abilities: null,
        mastery: { ability: "Vantage", combat_art: null }
    },
    {
        name: "Thief",
        type: "Intermediate",
        skills: [{ name: "Sword", level: "C" }],
        abilities: "Steal, Locktouch",
        mastery: { ability: "Steal", combat_art: null }
    },
    {
        name: "Armored Knight",
        type: "Intermediate",
        skills: [
            { name: "Axe", level: "C" },
            { name: "Heavy Armor", level: "D" }
        ],
        abilities: null,
        mastery: { ability: "Armored Blow", combat_art: null }
    },
    {
        name: "Cavalier",
        type: "Intermediate",
        skills: [
            { name: "Lance", level: "C" },
            { name: "Riding", level: "D" }
        ],
        abilities: "Canto",
        mastery: { ability: "Desperation", combat_art: null }
    },
    {
        name: "Brigand",
        type: "Intermediate",
        skills: [{ name: "Axe", level: "C" }],
        abilities: null,
        mastery: { ability: "Death Blow", combat_art: null }
    },
    {
        name: "Archer",
        type: "Intermediate",
        skills: [{ name: "Bow", level: "C" }],
        abilities: "Bowrange +1",
        mastery: { ability: "Hit +20", combat_art: null }
    },
    {
        name: "Brawler",
        type: "Intermediate",
        gender: "male",
        skills: [{ name: "Brawl", level: "C" }],
        abilities: "Unarmed Combat",
        mastery: { ability: "Unarmed Combat", combat_art: null }
    },
    {
        name: "Mage",
        type: "Intermediate",
        skills: [{ name: "Reason", level: "C" }],
        abilities: "Fire",
        mastery: { ability: "Fiendish Blow", combat_art: null }
    },
    {
        name: "Dark Mage",
        type: "Intermediate",
        gender: "male",
        skills: [{ name: "Reason", level: "C" }],
        abilities: "Miasma, Heartseeker",
        mastery: { ability: "Poison Strike", combat_art: null }
    },
    {
        name: "Priest",
        type: "Intermediate",
        skills: [{ name: "Faith", level: "C" }],
        abilities: "Heal, White Magic Heal +5",
        mastery: { ability: "Miracle", combat_art: null }
    },
    {
        name: "Pegasus Knight",
        type: "Intermediate",
        gender: "female",
        skills: [
            { name: "Lance", level: "C" },
            { name: "Flying", level: "D" }
        ],
        abilities: "Canto, Avo + 10",
        mastery: { ability: "Darting Blow", combat_art: "Triangle Attack" }
    },
    {
        name: "Hero",
        type: "Advanced",
        gender: "male",
        skills: [
            { name: "Sword", level: "B" },
            { name: "Axe", level: "C" }
        ],
        abilities: "Swordfaire, Vantage",
        mastery: { ability: "Defiant Strength", combat_art: null }
    },
    {
        name: "Swordmaster",
        type: "Advanced",
        skills: [{ name: "Sword", level: "A" }],
        abilities: "Swordfaire, Sword Crit +10",
        mastery: { ability: null, combat_art: "Astra" }
    },
    {
        name: "Assassin",
        type: "Advanced",
        skills: [
            { name: "Sword", level: "B" },
            { name: "Bow", level: "C" }
        ],
        abilities: "Swordfaire, Locktouch, Stealth",
        mastery: { ability: "Lethality", combat_art: "Assassinate" }
    },
    {
        name: "Fortress Knight",
        type: "Advanced",
        skills: [
            { name: "Axe", level: "B" },
            { name: "Heavy Armor", level: "B" }
        ],
        abilities: "Axefaire, Weight -5",
        mastery: { ability: "Pavise", combat_art: null }
    },
    {
        name: "Paladin",
        type: "Advanced",
        skills: [
            { name: "Lance", level: "B" },
            { name: "Riding", level: "B" }
        ],
        abilities: "Canto, Lancefaire, Tererain Resistance",
        mastery: { ability: "Aegis", combat_art: null }
    },
    {
        name: "Wyvern Rider",
        type: "Advanced",
        skills: [
            { name: "Axe", level: "B" },
            { name: "Flying", level: "C" }
        ],
        abilities: "Canto, Axefaire",
        mastery: { ability: "Seal Defense", combat_art: null }
    },
    {
        name: "Warrior",
        type: "Advanced",
        skills: [{ name: "Axe", level: "A" }],
        abilities: "Axefaire, Axe Crit +10",
        mastery: { ability: "Wrath", combat_art: null }
    },
    {
        name: "Sniper",
        type: "Advanced",
        skills: [{ name: "Bow", level: "A" }],
        abilities: "Bowfaire, Bowrange +1",
        mastery: { ability: "Hunter's Volley", combat_art: null }
    },
    {
        name: "Grappler",
        type: "Advanced",
        gender: "male",
        skills: [{ name: "Brawl", level: "A" }],
        abilities: "Fistfaire, Unarmed Combat",
        mastery: { ability: "Tomebreaker", combat_art: "Fierce Iron Fist" }
    },
    {
        name: "Warlock",
        type: "Advanced",
        skills: [{ name: "Reason", level: "A" }],
        abilities: "Black Tomefaire, Black Magic Uses x2",
        mastery: { ability: "Bowbreaker", combat_art: null }
    },
    {
        name: "Bishop",
        type: "Advanced",
        skills: [{ name: "Faith", level: "A" }],
        abilities:
            "White Magic Uses x2, White Magic Heal +10, Terrain Resistance",
        mastery: { ability: "Renewal", combat_art: null }
    },
    {
        name: "Dark Bishop",
        type: "Advanced",
        gender: "male",
        skills: [{ name: "Reason", level: "A" }],
        abilities: "Miasma, Fiendish Blow, Heartseeker",
        mastery: { ability: "Lifetaker", combat_art: null }
    },
    {
        name: "Falcon Knight",
        type: "Master",
        gender: "female",
        skills: [
            { name: "Sword", level: "C" },
            { name: "Lance", level: "A" },
            { name: "Flying", level: "B+" }
        ],
        abilities: "Canto, Lancefaire, Avo +10",
        mastery: { ability: "Defaint Avo", combat_art: null }
    },
    {
        name: "Wyvern Lord",
        type: "Master",
        skills: [
            { name: "Lance", level: "C" },
            { name: "Axe", level: "A" },
            { name: "Flying", level: "A" }
        ],
        abilities: "Canto, Axefaire, Avo +10",
        mastery: { ability: "Defiant Crit", combat_art: null }
    },
    {
        name: "Mortal Savant",
        type: "Master",
        skills: [
            { name: "Sword", level: "A" },
            { name: "Reason", level: "B+" }
        ],
        abilities: "Swordfaire, Black Tomefaire",
        mastery: { ability: "Warding Blow", combat_art: null }
    },
    {
        name: "Great Knight",
        type: "Master",
        skills: [
            { name: "Axe", level: "B+" },
            { name: "Heavy Armor", level: "A" },
            { name: "Riding", level: "B+" }
        ],
        abilities: "Canto, Axefaire, Lancefaire",
        mastery: { ability: "Defiant Def", combat_art: null }
    },
    {
        name: "Bow Knight",
        type: "Master",
        skills: [
            { name: "Lance", level: "C" },
            { name: "Bow", level: "A" },
            { name: "Riding", level: "A" }
        ],
        abilities: "Canto, Bowfaire, Bowrange +2",
        mastery: { ability: "Defiant Speed", combat_art: null }
    },
    {
        name: "Dark Knight",
        type: "Master",
        skills: [
            { name: "Lance", level: "C" },
            { name: "Reason", level: "B+" },
            { name: "Riding", level: "A" }
        ],
        abilities: "Canto, Black Tomefaire, Dark Tomefaire",
        mastery: { ability: "Seal Res", combat_art: null }
    },
    {
        name: "Holy Knight",
        type: "Master",
        skills: [
            { name: "Lance", level: "C" },
            { name: "Faith", level: "B+" },
            { name: "Riding", level: "A" }
        ],
        abilities: "Canto, White Tomefaire, Terrain Resistance",
        mastery: { ability: "Defiant Res", combat_art: null }
    },
    {
        name: "War Master",
        type: "Master",
        gender: "male",
        skills: [
            { name: "Axe", level: "A" },
            { name: "Brawl", level: "A" }
        ],
        abilities: "Fistfaire, Axefaire, Crit +20",
        mastery: { ability: "Quick Riposte", combat_art: "War Master's Strike" }
    },
    {
        name: "Gremory",
        type: "Master",
        gender: "female",
        skills: [
            { name: "Reason", level: "A" },
            { name: "Faith", level: "A" }
        ],
        abilities:
            "Black Magic Uses x2, Dark Magic Uses x2, White Magic Uses x2",
        mastery: { ability: "Defiant Mag", combat_art: null }
    },
    {
        name: "Dancer",
        type: "Unique",
        skills: null,
        abilities: "Sword Dance Combat Art, Dance Ability",
        mastery: { ability: "Special Dance", combat_art: null }
    },
    {
        name: "Enlightened One",
        type: "Unique",
        skills: null,
        student: "Byleth",
        abilities: "Swordfaire, Terrain Resistance",
        mastery: { ability: "Sacred Power", combat_art: null }
    },
    {
        name: "Armored Lord",
        type: "Unique",
        skills: null,
        student: "Edelgard",
        abilities: "Charm, Axefaire",
        mastery: { ability: "Pomp & Circumstance", combat_art: null }
    },
    {
        name: "Emperor",
        type: "Unique",
        skills: null,
        student: "Edelgard",
        abilities: "Charm, Axefaire",
        mastery: { ability: "Flickering Flower", combat_art: null }
    },
    {
        name: "High Lord",
        type: "Unique",
        skills: null,
        student: "Dimitri",
        abilities: "Charm, Lancefaire",
        mastery: { ability: "Pomp & Circumstance", combat_art: null }
    },
    {
        name: "Great Lord",
        type: "Unique",
        skills: null,
        student: "Dimitri",
        abilities: "Charm, Lancefaire",
        mastery: { ability: null, combat_art: "Paraselene" }
    },
    {
        name: "Wyvern Master",
        type: "Unique",
        skills: null,
        student: "Claude",
        abilities: "Charm, Bowfaire, Canto",
        mastery: { ability: "Pomp & Circumstance", combat_art: null }
    },
    {
        name: "Barbarossa",
        type: "Unique",
        skills: null,
        student: "Claude",
        abilities: "Charm, Bowfaire, Canto",
        mastery: { ability: null, combat_art: "Wind God" }
    },
    {
        name: "Trickster",
        type: "DLC",
        skills: [
            { name: "Sword", level: "B" },
            { name: "Faith", level: "B" }
        ],
        abiliities: "Locktouch, Stealth, Lucky Seven",
        mastery: { ability: "Duelist's Blow", combat_art: "Foul Play" }
    },
    {
        name: "War Monk",
        type: "DLC",
        gender: "male",
        skills: [
            { name: "Brawl", level: "B+" },
            { name: "Faith", level: "C" }
        ],
        abiliities: "Fistfaire, Unarmed Combat, Heal",
        mastery: { ability: "Brawl Avoid +20", combat_art: "Pneuma Gale" }
    },
    {
        name: "War Cleric",
        type: "DLC",
        gender: "female",
        skills: [
            { name: "Brawl", level: "B+" },
            { name: "Faith", level: "C" }
        ],
        abiliities: "Fistfaire, Unarmed Combat, Heal",
        mastery: { ability: "Brawl Avoid +20", combat_art: "Pneuma Gale" }
    },
    {
        name: "Dark Flier",
        type: "DLC",
        gender: "female",
        skills: [
            { name: "Reason", level: "B+" },
            { name: "Flying", level: "C" }
        ],
        abiliities: "Canto, Black Tomefaire, Transmute",
        mastery: { ability: "Transmute", combat_art: null }
    },
    {
        name: "Valkyrie",
        type: "DLC",
        gender: "female",
        skills: [
            { name: "Reason", level: "B" },
            { name: "Riding", level: "B" }
        ],
        abiliities: "Canto, Black Magic Range +1, Dark Magic Range +1",
        mastery: { ability: "Uncanny Blow", combat_art: null }
    }
];

let classSkills = [];
for (let sclass of classData) {
    const { name, skills } = sclass;
    if (skills) {
        for (let skill of skills) {
            classSkills.push({
                name,
                skillName: skill.name,
                level: skill.level
            });
        }
    }
}

module.exports = {
    classes: classData.map(
        ({ name, type, gender, student, abilities, mastery }) => {
            return {
                name,
                type,
                gender: gender || null,
                student,
                abilities,
                mastery
            };
        }
    ),
    classSkills
};
