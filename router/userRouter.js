const express = require('express')
const User = require("../models/userModel");
const router = express.Router();




router.post('/giris',async(req, res, next) => {
    try{
        const userName = req.body.userName
        const password = req.body.password
        const user = await User.girisYap(userName,password);
        res.json(user);
    }catch (e) {
        next(e)
    }
})

module.exports = router;
