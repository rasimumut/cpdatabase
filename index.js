const express = require('express')
const baglantı = require('./db/dbConnection');
const bcrypt = require('bcrypt')
//ROUTER
const countryRouter = require('./router/countryRouter')
const userRouter = require('./router/userRouter')
const hataMidWare = require('./middleware/errMW')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req, res) => {
    res.status(200).json({'mesaj':'hg bro'});
})

app.use('/api/country',countryRouter)
app.use('/api/user',userRouter)


 app.get('/',(req, res) => {
     res.status(200).json({'mesaj':'hg bro'});
 })

app.use(hataMidWare)


app.listen(3000,() =>{
    console.log("express ayakta")
},)
