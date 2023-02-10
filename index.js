const MONGOSE=require("mongose");

const {
    DB_NAME,
    API_VERSION,
    DB_PORT,
}=require("./contante");

const app=require("./app");

const port=process.env.PORT || 4000;
MONGOSE.set("stricQuery",false);
MONGOSE.connect(`mongadb://${IP_SERVER}:/${DB_PORT}/${DB_NAME}`);



app.listen(port,()=>{
    console.log("API_REST DE LA APP");
    console.log("------------------");
    console.log(`https//${IP_SERVER}:${port}/api/${API_VERSION}`)
    if(error)throw error;
})