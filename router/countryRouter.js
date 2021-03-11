const express = require('express')
const router = express.Router();
const Country = require('../models/countryModel');

router.get('/',async (req, res) => {
    const allCountry = await Country.find({})
    res.json(allCountry)
})

// router.get('/:id',(req, res) => {
//     const selectedCountry = await Country.find({})
//     res.json(selectedCountry)
// })

router.post('/',async (req, res) => {
   try{
       const eklenecekulke = new Country(req.body);
       const sonuc = await eklenecekulke.save();
       res.json(sonuc._id)
   }catch (err){
       console.log(err)
   }

});

router.patch('/:id',async (req, res) => {
 try{
     const sonuc = await Country.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
     if (sonuc){
         return res.json({mesaj:"Güncellendi"
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
