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
    },
    classes() {
        return this.belongsToMany(
            "Class",
            "users_students_classes",
            "user_student_id"
        );
    },
    skills() {
        return this.belongsToMany(
            "Skill",
            "users_students_skills",
            "user_student_id"
        );
    }
});

const Class = bookshelf.model("Class", {
    tableName: "classes",
    skills() {
        return this.belongsToMany("Skill");
    }
});

const Skill = bookshelf.model("Skill", {
    tableName: "skills",
    classes() {
        return this.belongsToMany("Class");
    }
});

module.exports = { Playthrough, Class };
