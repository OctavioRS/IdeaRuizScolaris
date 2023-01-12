//CUENTA DEL CLIENTE

const formulario = document.querySelector("#usuarioContraseña")
let datosfinales= document.querySelector("#datosFinales")
let mensajeFInal = document.querySelector(".mensajeFinal")
let usuario = document.querySelector("#usuario").value
let contraseña = document.querySelector("#contraseña").value
formulario.addEventListener("submit" , (e)=>{
    e.preventDefault();
     const {nombre, contraseña} = e.target;
     datosfinales.innerHTML =`
     <p> tus datos son: <br>
     ${nombre.value} <br>
     ${contraseña.value}
     `
     localStorage.setItem(nombre.value,contraseña.value)
     
})

const botonFinalizar= document.querySelector("#finalizar")
botonFinalizar.addEventListener("click", ()=>{
            Swal.fire('Cuenta creada con éxito')
})

//DATOS DE COMPRA
const datosNombre = document.querySelector("#nombre")
const datosDireccion = document.querySelector("#direccion")
const datosTelefono = document.querySelector("#telefono")

datosNombre.addEventListener("input", function(){})

datosDireccion.addEventListener("input", function(){})

datosTelefono.addEventListener("input", function (){
})

let form = document.querySelector("#form")
let datosIngresados = document.querySelector("#datosDelCliente")
const datosDeCompra = form.addEventListener("submit", function (e){
    e.preventDefault();
    datosDelCliente.innerHTML=`
 <h5> Los datos ingresados son: </h5>

<p>${datosNombre.value}</p>
<p>${datosDireccion.value}</p>
<p>${datosTelefono.value}</p>
    `
});
/*
//ARRAY DE PRODUCTOS
let localArray= [
    {   
        id: 1,
        nombre : "Ipa",
        color : "rubia",
        amargor : "alto",
        precio: "$500",
        img: "images/ipa.jpeg"},
    
    {   id: 2,
        nombre : "Apa",
        color : "rubia",
        amargor : "alto",
        precio: "$500",
        img: "images/apa.jpeg"},

    {   id: 3,
        nombre : "Stout",
        color : "negro",
        amargor : "bajo",
        precio: "$500",
        img: "images/stout.jpeg"},

    {   id: 4,
        nombre : "Honey",
        color : "rubia",
        amargor : "bajo",
        precio: "$500",
        img: "images/honey.jpeg"},
];

//Transformando array en string
let enJson= JSON.stringify(localArray)
//Guardando en localstorage
let localJSOn = localStorage.setItem("arrayenJson", enJson)
//Recuperando de local storage
let arrayRecuperado = localStorage.getItem("arrayenJson")
//Transformando nuevamente en array
let transformArray = JSON.parse(arrayRecuperado)
*/





//CARRITO
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
const contenedorDeCards = document.querySelector("#containerCards")
//MODAL
const modalPagina = document.querySelector("#modalCarrito")
let mostrarModal= document.querySelector("#modalContainer");

//RECORRIENDO EL ARRAY CON DATOS DEL JSON


const pedirCards = async()=>{
const resp = await fetch("./base.json")
const data= await resp.json()
data.forEach((el)=> { 
    let cards = document.createElement("div");
    cards.className= "card mx-3 py-2" 
    cards.style= "width: 18rem"
    cards.innerHTML= `
    <img src=${el.img}>
    <h2> ${el.nombre}<h2>
    <h3> Amargor: ${el.amargor}<h3>
    <p> $ ${el.precio}<p>
    
    `
    contenedorDeCards.append(cards)

    let botonComprar = document.createElement("button")
    botonComprar.className= " btn btn-warning my-2"
    botonComprar.innerText = "Comprar",

    cards.append(botonComprar)

    botonComprar.addEventListener("click", () => {
        carrito.push({
            id : el.id,
            nombre : el.nombre,
            amargor : el.amargor,
            precio: el.precio,
            img: el.img,
        });
        localStorage.setItem("carrito", JSON.stringify(carrito));
    });

})}

pedirCards()


//CREANDO MODAL
const iconoDeCarrito = document.querySelector("#iconoDeCarrito")

const pintarCarrito = () => {
mostrarModal.innerHTML = "";
mostrarModal.style.display = "block"
const modalHeader = document.createElement("div")
modalHeader.className= "modalHeader"
modalHeader.innerHTML= `
<h1> Carrito </h1>
`
mostrarModal.append(modalHeader)
//BORRAR MODAL
const modalbutton = document.createElement("button")
modalbutton.innerText="x"
modalbutton.className= "btn btn-danger"

modalbutton.addEventListener("click", ()=> {
    mostrarModal.style.display = "none"
});
modalHeader.append(modalbutton)

//recorriendo carrito 
carrito.forEach((el)=>{
const modalContent = document.createElement("div")
modalContent.className= "modalContent"
modalContent.innerHTML=
`
<img src=" ${el.img}" class="w-10">
<h3> ${el.nombre} </h3>
<p> ${el.precio} </p>
`
mostrarModal.append(modalContent)

//eliminar productos dentro del modal

const eliminarProductos = () => {
const findID = carrito.find ((prod) => prod.id)
carrito = carrito.filter((carritoID) => {
    return carritoID !== findID;
})

 pintarCarrito()
}
const eliminar = document.createElement("span")
eliminar.innerText = "❌"
eliminar.className= "delete-product"
eliminar.className="eliminar-btn"
modalContent.append(eliminar)


eliminar.addEventListener("click", eliminarProductos)
});

//SUMANDO PRECIO DE PRODUCTOS
const total = carrito.reduce((acc, el) => acc + el.precio, 0)

const footerModal= document.createElement("div")
footerModal.className="footerModal"
footerModal.innerHTML=`
<h3> Total a pagar $ ${total} </h3>
`
mostrarModal.append(footerModal)
}

iconoDeCarrito.addEventListener("click", pintarCarrito)