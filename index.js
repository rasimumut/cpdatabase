const express = require('express')
const baglantı = require('./db/dbConnection');
const bcrypt = require('bcrypt')
const cors = require('cors');

//ROUTER
const countryRouter = require('./router/countryRouter')
const userRouter = require('./router/userRouter')
const mountRouter = require('./router/mountRouter')
const hataMidWare = require('./middleware/errMW')
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req, res) => {
    res.status(200).json({'mesaj':'hg bro'});
})

app.use('/api/country',countryRouter)
app.use('/api/user',userRouter)
app.use('/api/mounth',mountRouter)

app.use(hataMidWare)

app.listen(3000,() =>{
    console.log("express ayakta")
},)
