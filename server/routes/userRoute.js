const express = require("express")
const {userLogin, userRegister, get_profile, update_profile, delte_profile} = require("../controllers/usercontroller")
const router = express.Router()

router.post("/register", userRegister)
router.post("/login", userLogin)
router.get("/profile", get_profile)
router.patch("/profile", update_profile)
router.delete("/profile", delte_profile)

module.exports = router