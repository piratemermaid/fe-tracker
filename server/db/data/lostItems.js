const months = [
    "Garland",
    "Blue Sea",
    "Verdant Rain",
    "Horsebow",
    "Wyvern",
    "Red Wolf",
    "Ethereal",
    "Guardian",
    "Pegasus"
];

const lostItems = [
    {
        name: "Wooden Flask",
        location: "Second Floor Lobby",
        student: "Jeralt",
        month: "Garland"
    },
    {
        name: "Sketch of a Sigil",
        location: "Second Floor Hallway",
        student: "Hanneman",
        month: "Garland"
    },
    {
        name: "Hand Drawn Map",
        location: "Dining Hall Gardens",
        student: "Leonie",
        month: "Garland"
    },
    {
        name: "White Glove",
        location: "Black Eagle Classroom",
        student: "Edelgard",
        month: "Garland",
        condition: { type: "house", name: "Black Eagles" }
    },
    {
        name: "Wooden Button",
        location: "Training Grounds",
        student: "Raphael",
        month: "Garland"
    },
    {
        name: "Tattered Overcoat",
        location: "Training Grounds",
        student: "Caspar",
        month: "Garland"
    },
    {
        name: "School of Sorcery Book",
        location: "Dining Hall",
        student: "Annette",
        month: "Garland"
    },
    {
        name: "Leather Bow Sheath",
        location: "Reception Hall",
        student: "Claude",
        month: "Garland",
        condition: { type: "house", name: "Golden Deer" }
    },
    {
        name: "Elegant Hair Clip",
        location: "Second Floor Audience Chamber",
        student: "Rhea",
        month: "Garland"
    },
    {
        name: "Used Bottle of Perfume",
        location: "Marketplace",
        student: "Hilda",
        month: "Blue Sea"
    },
    {
        name: "Confessional Letter",
        location: "Stables",
        student: "Marianne",
        month: "Blue Sea"
    },
    {
        name: "Artificial Flower",
        location: "Pathway North of Knight's Hall",
        student: "	Lorenz",
        month: "Blue Sea"
    },
    {
        name: "Bag of Tea Leaves",
        location: "	Black Eagles Classroom",
        student: "Ferdinand",
        month: "Blue Sea"
    },
    {
        name: "Thunderbrand Replica	",
        location: "Training Grounds",
        student: "Caspar",
        month: "Blue Sea"
    },
    {
        name: "Badge of Graduation",
        location: "Training Grounds",
        student: "Catherine",
        month: "Blue Sea"
    },
    {
        name: "Noxious Handkerchief",
        location: "Training Grounds",
        student: "Hubert",
        month: "Blue Sea",
        condition: { type: "house", name: "Black Eagles" }
    },
    {
        name: "Mysterious Notebook",
        location: "Cathedral - Holy Mausoleum Entrance",
        student: "	Alois",
        month: "Blue Sea"
    },
    {
        name: "Wellness Herbs",
        location: "Second Floor - Infirmary",
        student: "Manuela",
        month: "Blue Sea"
    },
    {
        name: "Secret Ledger",
        location: "Dining Hall Gardens",
        student: "Anna",
        month: "Blue Sea",
        condition: { type: "DLC" }
    },
    {
        name: "Needle and Thread",
        location: "1st Floor Dormitories - Outside Bernadetta's Room",
        student: "Bernadetta",
        month: "Verdant Rain"
    },
    {
        name: "Portrait of Rhea",
        location: "2nd Floor Dormitories - Hallway",
        student: "Cyril",
        month: "Verdant Rain"
    },
    {
        name: "Feather Pillow",
        location: "Dining Hall",
        student: "Linhardt",
        month: "Verdant Rain"
    },
    {
        name: "Curry Comb",
        location: "Entrance Hall",
        student: "Ingrid",
        month: "Verdant Rain"
    },
    {
        name: "Encyclopedia of Sweets",
        location: "Golden Deer Classroom",
        student: "Lysithea",
        month: "Verdant Rain"
    },
    {
        name: "Unused Lipstick",
        location: "Reception Hall",
        student: "Sylvain",
        month: "Verdant Rain"
    },
    {
        name: "Exotic Flower",
        location: "Reception Hall",
        student: "	Petra",
        month: "Verdant Rain"
    },
    {
        name: "Sword Belt Fragment",
        location: "Training Hall",
        student: "Felix",
        month: "Verdant Rain"
    },
    {
        name: "Art Book",
        location: "Cathedral",
        student: "Ignatz",
        month: "Verdant Rain"
    },
    {
        name: "Nimbus Charm",
        location: "Abyss Entrance",
        student: "Constance",
        month: "Verdant Rain",
        condition: { type: "DLC" }
    },
    {
        name: "Makeup Brush",
        location: "Sauna",
        student: "Yuri",
        month: "Verdant Rain",
        condition: { type: "DLC" }
    },
    {
        name: "Antique Clasp",
        location: "Fishing Pond",
        student: "	Flayn",
        month: "Horsebow"
    },
    {
        name: "Agricultural Survey",
        location: "Stables",
        student: "	Ferdinand",
        month: "Horsebow"
    },
    {
        name: "How to Be Tidy",
        location: "Stables",
        student: "Marianne",
        month: "Horsebow"
    },
    {
        name: "Gardening Shears",
        location: "Training Grounds",
        student: "Dedue",
        month: "Horsebow",
        condition: { type: "house", name: "Blue Lions" }
    },
    {
        name: "Black Leather Gloves",
        location: "Training Grounds",
        student: "Dimitri",
        month: "Horsebow",
        condition: { type: "house", name: "Blue Lions" }
    },
    {
        name: "Silver Brooch",
        location: "Officer's Academy Courtyard",
        student: "Dorothea",
        month: "Horsebow"
    },
    {
        name: "Spotless Bandage",
        location: "Golden Deer Classroom",
        student: "Hilda",
        month: "Horsebow"
    },
    {
        name: "Silver Necklace",
        location: "Entrance Hall",
        student: "Gilbert",
        month: "Horsebow"
    },
    {
        name: "How to Bake Sweets",
        location: "Cathedral",
        student: "Mercedes",
        month: "Horsebow"
    },
    {
        name: "Bundle of Herbs",
        location: "Cathedral",
        student: "Ashe",
        month: "Horsebow"
    },
    {
        name: "Seiros Scriptures",
        location: "Cathedral",
        student: "Rhea",
        month: "Horsebow"
    },
    {
        name: "Hammer and Chisel",
        location: "Second Floor",
        student: "Hanneman",
        month: "Horsebow"
    },
    {
        name: "Bundle of Dry Hemp",
        location: "Marketplace",
        student: "Shamir",
        month: "Wyvern"
    },
    {
        name: "Jousting Almanac",
        location: "	Entrance Hall",
        student: "Ingrid",
        month: "Wyvern"
    },
    {
        name: "Black Iron Spur",
        location: "Dining Hall",
        student: "Felix",
        month: "Wyvern"
    },
    {
        name: "Burlap Sack of Rocks",
        location: "Dining Hall",
        student: "Raphael",
        month: "Wyvern"
    },
    {
        name: "Small Tanned Hide",
        location: "Reception Hall",
        student: "Petra",
        month: "Wyvern"
    },
    {
        name: "Letter to Rhea",
        location: "Training Grounds",
        student: "Catherine",
        month: "Wyvern"
    },
    {
        name: "Shiny Striated Pebble",
        location: "First Floor - Dormitories",
        student: "Hapi",
        month: "Wyvern",
        condition: { type: "DLC" }
    },
    {
        name: "Still Life Picture",
        location: "1st Floor Dormitory",
        student: "Bernadetta",
        month: "Red Wolf"
    },
    {
        name: "Well Used Hatchet",
        location: "Dining Hall Gardens",
        student: "Cyril",
        month: "Red Wolf"
    },
    {
        name: "Crude Arrowheads",
        location: "Dining Hall Balcony",
        student: "Leonie",
        month: "Red Wolf"
    },
    {
        name: "Foreign Gold Coin",
        location: "Fishing Pond",
        student: "Alois",
        month: "Red Wolf"
    },
    {
        name: "Old Map of Enbarr",
        location: "Fishing Pond",
        student: "Flayn",
        month: "Red Wolf"
    },
    {
        name: "A Treatise on Etiquitte",
        location: "Entrance Hall",
        student: "Lorenz",
        month: "Red Wolf"
    },
    {
        name: "Songstress Poster",
        location: "Officer's Academy",
        student: "Dorothea",
        month: "Red Wolf"
    },
    {
        name: "The Saints Revealed",
        location: "Reception Hall",
        student: "Linhardt",
        month: "Red Wolf"
    },
    {
        name: "Crumpled Love Letter",
        location: "Knight's Hall",
        student: "Sylvain",
        month: "Red Wolf"
    },
    {
        name: "Unfinished Fable",
        location: "Second Floor - Advisory Room",
        student: "Seteth",
        month: "Red Wolf"
    },
    {
        name: "Clean Dusting Cloth",
        location: "Second Floor - Infirmary",
        student: "Manuela",
        month: "Red Wolf"
    },
    {
        name: "Fruit Preserves",
        location: "Cathedral",
        student: "Mercedes",
        month: "Red Wolf"
    },
    {
        name: "Mild Stomach Poison",
        location: "Golden Deer Classroom",
        student: "Claude",
        month: "Red Wolf",
        condition: { type: "house", name: "Golden Deer" }
    },
    {
        name: "Repellent Powder",
        location: "Dining Hall Gardens",
        student: "Constance",
        month: "Red Wolf",
        condition: { type: "DLC" }
    },
    {
        name: "Evil-Repelling Amulet",
        location: "Fishing Pond",
        student: "Ashe",
        month: "Ethereal"
    },
    {
        name: "Centipede Picture",
        location: "Stables",
        student: "Shamir",
        month: "Ethereal"
    },
    {
        name: "Big Spoon",
        location: "Dining Hall",
        student: "Raphael",
        month: "Ethereal"
    },
    {
        name: "Princess Doll",
        location: "Reception Hall",
        student: "Lysithea",
        month: "Ethereal"
    },
    {
        name: "Blue Stone",
        location: "Golden Deer Classroom",
        student: "Ignatz",
        month: "Ethereal"
    },
    {
        name: "Old Cleaning Cloth",
        location: "Second Floor Lobby",
        student: "Cyril",
        month: "Ethereal"
    },
    {
        name: "Carving Hammer",
        location: "Knight's Hall",
        student: "Gilbert",
        month: "Ethereal"
    },
    {
        name: "Lens Cloth",
        location: "Knight's Hall",
        student: "Hanneman",
        month: "Ethereal"
    },
    {
        name: "Book of Ghost Stories",
        location: "Cathedral - East Side",
        student: "Mercedes",
        month: "Ethereal"
    },
    {
        name: "Old Fishing Rod",
        location: "Cathedral - Saint Statue Room",
        student: "Seteth",
        month: "Ethereal"
    },
    {
        name: "Animated Bait",
        location: "Library",
        student: "Linhardt",
        month: "Ethereal"
    },
    {
        name: "Unfinished Score",
        location: "Blue Lion Classroom",
        student: "Annette",
        month: "Ethereal"
    },
    {
        name: "Introduction to Magic",
        location: "Fishing Pond",
        student: "Alois",
        month: "Guardian"
    },
    {
        name: "Light Purple Veil",
        location: "Greenhouse",
        student: "Manuela",
        month: "Guardian"
    },
    {
        name: "Lovely Comb",
        location: "Greenhouse",
        student: "Dorothea",
        month: "Guardian"
    },
    {
        name: "Pegasus Horseshoes",
        location: "Stables",
        student: "Ingrid",
        month: "Guardian"
    },
    {
        name: "Weathered Cloak",
        location: "Entrance Hall",
        student: "Catherine",
        month: "Guardian"
    },
    {
        name: "Noseless Puppet",
        location: "Knight's Hall Entrance",
        student: "Gilbert",
        month: "Guardian"
    },
    {
        name: "Iron Cooking Pot",
        location: "Knight's Hall",
        student: "Dedue",
        month: "Guardian",
        condition: { type: "house", name: "Blue Lions" }
    },
    {
        name: "Training Logbook",
        location: "Knight's Hall",
        student: "Dimitri",
        month: "Guardian",
        condition: { type: "house", name: "Blue Lions" }
    },
    {
        name: "Letter to the Goddess",
        location: "Golden Deer Classroom",
        student: "Ignatz",
        month: "Guardian"
    },
    {
        name: "Handmade Hair Clip",
        location: "Golden Deer Classroom",
        student: "Hilda",
        month: "Guardian"
    },
    {
        name: "Toothed Dagger",
        location: "Training Grounds",
        student: "	Felix",
        month: "Guardian"
    },
    {
        name: "Animal Bone Dice",
        location: "Training Grounds",
        student: "Shamir",
        month: "Guardian"
    },
    {
        name: "Snapped Writing Quill",
        location: "Second Floor - Advisory Room",
        student: "Seteth",
        month: "Guardian"
    },
    {
        name: "Bag of Seeds",
        location: "Cathedral",
        student: "Marianne",
        month: "Guardian"
    },
    {
        name: "Dusty Book of Fables	",
        location: "Cathedral",
        student: "Flayn",
        month: "Guardian"
    },
    {
        name: "Fur Scarf",
        location: "Near Amiibo Gazebo",
        student: "Leonie",
        month: "Guardian"
    },
    {
        name: "Board Game Piece",
        location: "Entrance Hall next to Lysithea",
        student: "Claude",
        month: "Guardian",
        condition: { type: "house", name: "Golden Deer" }
    },
    {
        name: "Wax Diptych",
        location: "Dining Hall",
        student: "Annette",
        month: "Pegasus"
    },
    {
        name: "Maintenance Oil",
        location: "Dining Hall",
        student: "Ferdinand",
        month: "Pegasus"
    },
    {
        name: "Annotated Dictionary",
        location: "Dining Hall",
        student: "Petra",
        month: "Pegasus"
    },
    {
        name: "Grounding Charm",
        location: "Dining Hall",
        student: "Caspar",
        month: "Pegasus"
    },
    {
        name: "Hedgehog Case",
        location: "Graveyard",
        student: "Bernadetta",
        month: "Pegasus"
    },
    {
        name: "New Bottle of Perfume",
        location: "Reception Hall",
        student: "Lysithea",
        month: "Pegasus"
    },
    {
        name: "Silk Handkerchief",
        location: "Golden Deer Classroom",
        student: "Lorenz",
        month: "Pegasus"
    },
    {
        name: "The History of Sreng",
        location: "Blue Lions Classroom",
        student: "Sylvain",
        month: "Pegasus"
    },
    {
        name: "Moon Knight's Tale",
        location: "Cathedral",
        student: "Ashe",
        month: "Pegasus"
    },
    {
        name: "Faded Star Chart",
        location: "Second Floor - Library",
        student: "Rhea",
        month: "Pegasus"
    },
    {
        name: "Balance Scale",
        location: "Above Graveyard",
        student: "Anna",
        month: "Pegasus",
        condition: { type: "DLC" }
    },
    {
        name: "Basket of Berries",
        location: "Greenhouse",
        student: "Hapi",
        month: "Pegasus",
        condition: { type: "DLC" }
    },
    {
        name: "Stiff Hand Wrap",
        location: "Fishing Pond",
        student: "Balthus",
        month: "Pegasus",
        condition: { type: "DLC" }
    }
];

module.exports = { months, lostItems };
