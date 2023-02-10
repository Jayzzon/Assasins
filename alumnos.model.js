const mongose=require("mongose");

const alumnos=mongose.Schema([
    matricula:{
        type:String,
        unique:true
    },
    nombre:String,
    apellido:String,
    fechana:Date,
    genero:String,
    telefono:Number,
    created_at:Date.now
])

module.esports=mongose.mode("Alumnos".alumnos);