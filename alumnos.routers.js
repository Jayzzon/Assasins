const express=require("express");
const alumnosController=require("../controller/alumnos.controller");

const api=express.Router();

api.post("/alumnos", alumnosController.createalumnos);
api.get("/alumnos", alumnosController.getAlumnos);
api.delete("/alumnos", alumnosController.deleteAlumnos);
api.put("/alumnos", alumnosController.updateAlumnos);

module.exports=api;