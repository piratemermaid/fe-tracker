const { Router } = require("express");
const { knex } = require("../models/config");
const bcrypt = require("bcrypt");
const { getAccount, hash, session, setSession } = require("../helpers/account");

const router = new Router();

router.post("/signup", async (req, res, next) => {
    const { username, email, password, passwordMatch } = req.body;

    if (password !== passwordMatch) {
        res.status(401).send("Passwords do not match");
        return;
    }

    const account = await getAccount(username);
    if (account) {
        res.status(401).send("Username taken");
        return;
    }

    if (!account) {
        knex("users")
            .insert({
                username,
                email,
                password: hash(password)
            })
            .then(() => {
                res.send({ signup: "success" });
            })
            .catch((err) => {
                next(err);
            });
    }
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const account = await getAccount(username);

    if (!account) {
        res.status(401).send("Incorrect username/password");
    } else {
        if (await bcrypt.compare(password, account.password)) {
            await setSession({
                username,
                res,
                sessionId: account.sessionId
            }).then(() => {
                res.send({ login: "success" });
            });
        } else {
            res.status(401).send("Incorrect username/password");
        }
    }
});

router.get("/logout", (req, res, next) => {
    const { username } = Session.parse(req.cookies.sessionString);

    knex("users")
        .where({ username })
        .update({ sessionId: null })
        .then(() => {
            res.clearCookie("sessionString");

            res.send({ logout: "success" });
        })
        .catch((err) => {
            next(err);
        });
});

router.get("/authenticated", async (req, res) => {
    const { sessionString } = req.cookies;

    if (!sessionString || !Session.verify(sessionString)) {
        res.status(400).send("Invalid session");
    } else {
        const { username, id } = Session.parse(sessionString);
        const account = await getAccount(username);
        const authenticated = account.sessionId === id;

        if (authenticated) {
            res.send({ authenticated: "success" });
        } else {
            res.status(400).send("Invalid session");
        }
    }
});

module.exports = router;
