const mongoose = require("mongoose");


const uri = 'mongodb+srv://demologin:rakesh91101@cluster0.gtbu5.mongodb.net/demologin?retryWrites=true&w=majority';


const connectDB = ()=>{mongoose.connect(uri, {
    useNewUrlParser: true,
   
    useUnifiedTopology: true
}, () => {
    console.log("DataBase connected successfully.")
})
}

module.exports=connectDB;
