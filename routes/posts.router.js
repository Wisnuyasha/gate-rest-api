const express = require("express")
const router = express.Router()

const postsController = require("../controller/posts.controller")

router.get("/keluar", postsController.keluar)
router.get("/masuk", postsController.masuk)

module.exports = router