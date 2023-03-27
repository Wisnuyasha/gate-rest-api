const express = require("express")
const router = express.Router()

const postsController = require("../controller/posts.controller")

router.post("/keluar", postsController.keluar)
router.get("/masuk", postsController.masuk)

module.exports = router