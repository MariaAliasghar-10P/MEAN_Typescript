"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const User_1 = require("../models/User");
router.post("/users", (req, res) => {
    const user = new User_1.User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    if (user.username == null ||
        user.username == "" ||
        user.email == null ||
        user.email == "" ||
        user.password == null ||
        user.password == "") {
        res.json({
            success: false,
            message: "Ensure username , password and email are correctly entered",
        });
    }
    else {
        user.save(function (err) {
            if (err)
                res.json({ success: false, message: "user already exists" });
            else {
                res.json({ success: true, message: "user created successfully" });
            }
        });
    }
});
router.post("/authenticate", function (req, res) {
    User_1.User.findOne({ username: req.body.username })
        .select("email username password")
        .exec(function (err, user) {
        if (err)
            throw err;
        if (!user) {
            res.json({ message: false, success: "could not authenticate user" });
        }
        else if (user) {
            if (req.body.password) {
                var validPassword = user.comparePassword(req.body.password);
            }
            else {
                res.json({ success: false, message: "no password provided" });
            }
            if (!validPassword) {
                res.json({
                    success: false,
                    message: "could not authenticate password",
                });
            }
            else {
                res.json({ success: true, message: "successfully authenticated" });
            }
        }
    });
});
exports.default = router;
//# sourceMappingURL=Api.js.map