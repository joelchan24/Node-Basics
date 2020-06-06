let empleados = [{
        id: 1,
        nombre: "Joel"
    },
    {
        id: 2,
        nombre: "Pedro"
    },
    {
        id: 3,
        nombre: "Melissa"
    }
]

let salarios = [{
    id: 1,
    salario: 100
}, {
    id: 2,
    salario: 200
}]

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {

        let getSalarioBD= salarios.find((sal)=>{
            return sal.id=empleado.id;
        })

        if(!getEmpleado){
            reject(`no hay salario para ese empleado ${empleado}`)
        }else{
            resolve(getSalarioBD);
        }




    })
}

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe en la BD ${id}`)
        } else {
            resolve(empleadoDB)
        }
    })

    // console.log(empleadoDB);
}
//This Code it is okay but not is the better
/* getEmpleado(22).then(empleado => {
    console.log('empleado ', empleado);
    getSalario(empleado).then((sal)=>{
        console.log("Salario",sal)

    },(error)=>{
        console.log(error);
    })
}, (erro) => {
    console.log(erro);
}); */
//Promises in Chain

getEmpleado(1).then((resolve)=>{
    return getSalario(resolve)
}).then((resp)=>{
    console.log("Salario",resp)
}).catch((error)=>{
    console.log(error);
})
