const express = require("express")
const cron = require("node-cron")
const dotenv=require("dotenv")
const mongoose=require("mongoose")

const app=express();

dotenv.config();

mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log("DB connection is Successful");
}).catch((err)=>{
    console.log(err);
});


const run=()=>{
    cron.schedule('* * * * * *', () => {
        console.log('The task is running every second');               //Schedule the Process
      });
}
run();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})

