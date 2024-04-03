const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('DATABASE CONNECTED');
}).catch((err)=>{
    console.log(`DATABASE CONNECTION FAILED ${err.message}`);
})