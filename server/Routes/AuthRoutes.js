const { register, login,welcomeMessage } = require("../Controllers/AuthControllers");
const {getAllDetails} = require('../Controllers/DashboardController')
const router =require("express").Router();
router.post("/")
router.post("/register",register)
router.post("/login",login)
router.get('/getDetails',getAllDetails)
router.get('/welcome',welcomeMessage)

module.exports=router