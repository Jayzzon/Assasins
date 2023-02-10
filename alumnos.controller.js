const alumnos=require("../models/alumnos.model");

async function createalumnos(req,res){
    const alumnos=new alumnos(req.body);
    
    alumnos.save((error, alumnosStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(alumnosStored)
        }
    })

}

async function updateAlumnos(req,res){
    console.log("Actualizar alumno");
}
async function deleteAlumnos(req,res){
    console.log("Eliminar alumno");
}
async function getAlumnos(req,res){
    console.log("Obtener los alumnos")
}
module.exports={
    createalumnos,
    updateAlumnos,
    deleteAlumnos,
    getAlumnos,
}