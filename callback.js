/* setTimeout(function(){
    console.log("HELLO WORLD");
},3000); */

let getUsuarioById=(id,callback)=>{

    let usuario={
        nombre:"Joel",
        id:id,
    }
    if(id===20){
        callback(`el usuario con id ${id}, no existe`)
    }else{
        callback(null,usuario);
    }

   
}

getUsuarioById(10,(err,usuario)=>{
    if(err){
        return console.log(err);
    }
    console.log("Usuario from DB" ,usuario)

})