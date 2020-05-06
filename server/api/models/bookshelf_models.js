const { bookshelf } = require("./config");

const User = bookshelf.model("User", {
    tableName: "users",
    playthroughs() {
        return this.hasMany("Playthrough");
    }
});

const Playthrough = bookshelf.model("Playthrough", {
    tableName: "users_playthroughs",
    house() {
        return this.belongsTo("House");
    },
    userStudents() {
        return this.hasMany("UserStudent", "playthrough_id");
    }
});

const UserStudent = bookshelf.model("UserStudent", {
    tableName: "users_students",
    student() {
        return this.belongsTo("Student");
    },
    userStudentClasses() {
        return this.hasMany("UserStudentClass", "user_student_id");
    },
    userStudentSkills() {
        return this.hasMany("UserStudentSkill", "user_student_id");
    }
});

const UserStudentClass = bookshelf.model("UserStudentClass", {
    tableName: "users_students_classes",
    class() {
        return this.belongsTo("Class");
    }
});

const UserStudentSkill = bookshelf.model("UserStudentSkill", {
    tableName: "users_students_skills",
    skill() {
        return this.belongsTo("Skill");
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
    skills() {
        return this.belongsToMany("Skill", "students_skills");
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

module.exports = { User, Playthrough, Class, Student };
