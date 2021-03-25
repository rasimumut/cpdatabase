const express = require('express')
const router = express.Router();
const Country = require('../models/countryModel');

router.get('/',async (req, res) => {
    var mysort = {"caseSum" : -1};
    const allCountry = await Country.find({}).sort(mysort);
    res.json(allCountry)
})

router.get('/:id',async (req, res) => {
    const selectedCountry = await  Country.find({_id:req.params.id})
    res.json(selectedCountry)
})

router.post('/',async (req, res) => {
   try{
       const eklenecekulke = new Country(req.body);
       const sonuc = await eklenecekulke.save();
       res.json(sonuc)
   }catch (err){
       console.log(err)
   }
});

router.patch('/:id',async (req, res) => {
 try{
     // const selectedCountry = await  Country.find({_id:req.params.id})
     // const ulke = res.json(selectedCountry)
     const sonuc = await Country.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
     if (sonuc){
         return res.json({sonuc
         })
     }else{
         return res.status(404).json({
             mesaj:"Country bulunamadı",
         })
     }
 }catch (e){
     console.log(e)
 }


});

router.delete('/:id',async(req, res,next) => {
  try{
      const sonuc = await Country.findByIdAndDelete({_id:req.params.id})
      if (sonuc){
          return res.json({mesaj:"silindi"
          })
      }else{
        throw new Error('Ülke bilgisi bulunamadı')
      }
  }catch (e){
      next(e);
  }


});

module.exports = router;
