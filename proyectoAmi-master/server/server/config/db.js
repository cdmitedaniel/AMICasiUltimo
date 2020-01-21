
const mongoose = require ('mongoose')
const dbURL = require('./propierties').DB;


module.exports=()=>{
    mongoose.connect(dbURL,{useNewUrlParser:true})
    .then(()=>console.log( `Mongo connected on ${dbURL}`))
    .catch(err=>Console.log(`Connection has error ${err}`))

process.on('SIGINT',()=>{
    mongoose.connection.close(()=>{
        console.log(`Mongo is disconnected`)
        process.exit(0)
    })
})


}





// const mongoose = require('mongoose');
// //const URI = 'mongodb://localhost/proyecto';
// const URI = 'mongodb://admin:2019@68.66.207.7:27017/proyecto';


// mongoose.connect(URI)
//     .then(db => console.log('db is connected'))
//     .catch(err => console.error(err));

// module.exports = mongoose;