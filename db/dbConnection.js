const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cpdatabase',{useCreateIndex:true, useUnifiedTopology:true,useNewUrlParser:true})
    .then(()=>console.log("veritabanına bağlanıldı"))
    .catch(err => console.log(err))

