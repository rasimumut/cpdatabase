const express = require('express');
const router = express.Router();
const Mount = require('../models/mountModel');


router.get('/',async (req, res) => {
    const allMounth = await Mount.find({})
    res.json(allMounth)
})


router.post('/',async (req, res) => {
    try{
        const eklenecekay = new Mount(req.body);
        const sonuc = await eklenecekay.save();
        res.json(sonuc._id)
    }catch (err){
        console.log(err)
    }
});

module.exports = router;
