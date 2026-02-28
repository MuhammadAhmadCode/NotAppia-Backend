require("dotenv").config()
const app = require("./src/app");
const connectToDB = require("./src/db/db");

connectToDB()

const port = process.env.port || 3000
app.listen(3000,()=>{
    console.log("Server Running on port 3000")
})