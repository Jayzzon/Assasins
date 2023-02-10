const express=require("express");
const cors=require("cors");
const bodyParser=require("bodyParser");
const {
    API_VERSION
}=require("./constans")
const app=express();

//importaciones de las rutas de aplicaciones
const alumnosRoutes=require("./routers/alumnos.routers");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

//configuraciones
alumnosRoutes.use(`/api/${API_VERSION}`, alumnosRoutes);

module.exports=app;