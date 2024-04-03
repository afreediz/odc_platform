const express = require("express")
const usercontroller = require("../controller/usercontroller")
const router = express.Router()

router.post("/register", usercontroller.addUser)
router.post("/login", usercontroller.userLogin)
router.get("/profile", usercontroller.userLogin)
router.delete("/profile",)
router.update("/profile", usercontroller.userLogin)

module.exports = router