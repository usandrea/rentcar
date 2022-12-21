const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 3000;

const user_routes = require("./routes/usuario");

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended:false}));

mongoose.connect("mongodb://localhost:27017/apiRestG11",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4
})
.then(() =>{
    app.use("/api",user_routes);

    app.listen(port, () =>{
        console.log("Servidor corriendo en el puerto", port);
    })
})
.catch(error=>console.log(error));


