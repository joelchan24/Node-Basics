/**
 *  Async Await
 */


let getName =  () => {
    // throw new Error('No existe un nombre del usuario')
   // return 'Joel';
   return new Promise((reject,resolve)=>{
        setTimeout(()=>{
            resolve( 'Joel')
        },3000)
    })
};

let saludo =async()=>{
let name = await getName();
return `Hello ${name}`; 
};

saludo().then((name) => {
    console.log(name);
}).catch((error) => {
    console.log(error);
})