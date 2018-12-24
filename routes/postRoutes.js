const express = require("express")
const router = express.Router()
const PostController = require("../controllers/PostController")

router.get("/",PostController.findAll)
router.get("/post/kunglaw",PostController.findOne)
//router.get("/create",PostController.createForm)
router.post("/post",PostController.create)

module.exports = router