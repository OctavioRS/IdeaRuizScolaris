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
botonFinalizar.addEventListener("click", (contraseña , usuario)=>{
   
            Swal.fire('Cuenta creada con éxito')
   
})

//DATOS DE COMPRA
const datosNombre = document.querySelector("#nombre")
const datosDireccion = document.querySelector("#direccion")
const datosTelefono = document.querySelector("#telefono")

datosNombre.addEventListener("input", function(){})

datosDireccion.addEventListener("input", function(){})

datosTelefono.addEventListener("input", function () {
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

//ARRAY TRANSFORMADO A JSON
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

let enJson= JSON.stringify(localArray)
let localJSOn = localStorage.setItem("arrayenJson", enJson)

//utilizado del archivo json
const json = `
[
    {   
        "id": 1,
        "nombre" : "Ipa",
        "color" : "rubia",
        "amargor" : "alto",
        "precio": "$500",
        "img": "images/ipa.jpeg"},
    
    {   "id": 2,
        "nombre" : "Apa",
        "color" : "rubia",
        "amargor" : "alto",
        "precio": "$500",
        "img": "images/apa.jpeg"},

    {   "id": 3,
        "nombre" : "Stout",
        "color" : "negro",
        "amargor" : "bajo",
        "precio": "$500",
        "img": "images/stout.jpeg"},

    {   "id": 4,
        "nombre" : "Honey",
        "color" : "rubia",
        "amargor" : "bajo",
        "precio": "$500",
        "img": "images/honey.jpeg"}
]
`
const dataJson = JSON.parse(json)

//CARDS

let cervezas = [
    {   
        id: 1,
        nombre : "Ipa",
        color : "rubia",
        amargor : "alto",
        precio: 500,
        img: "images/ipa.jpeg"},
    
    {   id: 2,
        nombre : "Apa",
        color : "rubia",
        amargor : "alto",
        precio: 400,
        img: "images/apa.jpeg"},

    {   id: 3,
        nombre : "Stout",
        color : "negro",
        amargor : "bajo",
        precio: 500,
        img: "images/stout.jpeg"},

    {   id: 4,
        nombre : "Honey",
        color : "rubia",
        amargor : "bajo",
        precio: 300,
        img: "images/honey.jpeg"}
]

const carrito = []
const contenedorDeCards = document.querySelector("#containerCards")
const modalPagina = document.querySelector("#modalCarrito")
let mostrarModal= document.querySelector("#modalContainer");

//RECORRIENDO EL ARRAY
cervezas.forEach((el)=> { 
    let cards = document.createElement("div");
    cards.className= "card mx-3" 
    cards.style= "width: 18rem"
    cards.innerHTML= `
    <img src=${el.img}>
    <h2> ${el.nombre}<h2>
    <h3> ${el.amargor}<h3>
    <p> $ ${el.precio}<p>
    
    `
    containerCards.append(cards)

    let botonComprar = document.createElement("button")
    botonComprar.className= " btn btn-warning my-2"
    botonComprar.innerText = "Comprar",

    cards.append(botonComprar)

    botonComprar.addEventListener("click", ()=>
    carrito.push({
        id : el.id,
        nombre : el.nombre,
        amargor : el.amargor,
        precio: el.precio,
        img: el.img,
    }))
    
});

//CREANDO MODAL
const iconoDeCarrito = document.querySelector("#iconoDeCarrito")
iconoDeCarrito.addEventListener("click", ()=>{
const modalHeader = document.createElement("div")
modalHeader.className= "modalHeader"
modalHeader.innerHTML= `
<h1> Carrito </h1>
`
mostrarModal.append(modalHeader)

const modalbutton = document.createElement("button")
modalbutton.innerText="x"
modalbutton.className= "btn btn-danger"

modalbutton.addEventListener("click", ()=> {
    mostrarModal.style.display = "none"
});

//BORRAR MODAL
modalHeader.append(modalbutton)
//recorriendo carrito
carrito.forEach((el)=>{
const modalContent = document.createElement("div")
modalContent.className= "modalContent"
modalContent.innerHTML=
`
<img src=" ${el.img}" class="w-25">
<h3> ${el.nombre} </h3>
<p> ${el.precio} </p>
`
mostrarModal.append(modalContent)
});

//SUMANDO PRECIO DE PRODUCTOS
const total = carrito.reduce((acc, el) => acc + el.precio, 0)

const footerModal= document.createElement("div")
footerModal.className="footerModal"
footerModal.innerHTML=`
<h3> Total a pagar $ ${total} </h3>
`
mostrarModal.append(footerModal)
});


