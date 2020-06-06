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

/* let getEmpleado = (id, callback) => {
    let empleadoDB = empleado.find(empleado => {
        return empleado.id === id
    })
} */
let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        callback(`No existe en la BD ${id}`)
    } else {
        callback(null, empleadoDB)
    }
    // console.log(empleadoDB);
}
let getSalario = (empleado, callback) => {
   
    let salarioBD = salarios.find(salario => salario.id === empleado.id )

    if (!salarioBD) {
        callback(`there is no  salary for the employee ${empleado.id}`)
    } else {
        callback( {
            nombre: empleado.nombre,
            salario: salarioBD.salario
        });
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
   
    getSalario(empleado, (err, resp) => {
        
        if (err) {
            return console.log(err)
        }
        console.log(resp)
        
    })
});