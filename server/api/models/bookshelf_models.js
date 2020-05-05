const { bookshelf } = require("./config");

const User = bookshelf.model("User", {
    tableName: "users",
    playthroughs() {
        return this.belongsToMany("Playthrough", "users_playthroughs");
    }
});

const Playthrough = bookshelf.model("Playthrough", {
    tableName: "users_playthroughs",
    house() {
        return this.belongsTo("House");
    },
    students() {
        return this.belongsToMany(
            "Student",
            "users_students",
            "playthrough_id"
        );
    }
});

const House = bookshelf.model("House", {
    tableName: "houses"
});

const Student = bookshelf.model("Student", {
    tableName: "students",
    house() {
        return this.belongsTo("House");
    }
});

module.exports = { Playthrough, House, Student };
