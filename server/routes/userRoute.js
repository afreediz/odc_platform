const express = require("express")
const {userPrivate, userLogin, userRegister, get_profile, update_profile, delte_profile} = require("../controllers/usercontroller")
const { authenticateUser } = require("../middlewares/authenticateUser")
const router = express.Router()

router.get("/private", authenticateUser, userPrivate)
router.post("/register", userRegister)
router.post("/login", userLogin)
router.get("/profile", authenticateUser, get_profile)
router.delete("/profile", authenticateUser, delte_profile)

module.exports = router