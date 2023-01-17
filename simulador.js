
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


//CARRITO
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const contador = document.querySelector(".contador")
const contenedorDeCards = document.querySelector("#containerCards")
let mostrarModal= document.querySelector("#modalContainer");

//Pintar cards


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

        const comprobarRepetido = carrito.some((prod) => prod.id === el.id);
        
        if (comprobarRepetido){
            carrito.map((producto) => {
                if(producto.id === el.id){
                    producto.cantidad++
                }
            })
        } else{
        carrito.push({
            id : el.id,
            nombre : el.nombre,
            amargor : el.amargor,
            precio: el.precio,
            img: el.img,
            cantidad: el.cantidad,
        })};
        setItem()
        contar()
    });

})}
pedirCards()
//******************************************************/
//Contador de productos en el carrito

    let contar = ()=>{
        contador.style.display = "inline-block"
        contador.innerText = carrito.length}
//********************************************************/
//set item
const setItem = () => {
localStorage.setItem("carrito", JSON.stringify(carrito));}
//********************************************************/

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
<img src="${el.img}" class="imgModal">
<h3 class="nombreBirras"> ${el.nombre} </h3>
<span class="disminuir"> ➖ </span>
<p> Cantidad: ${el.cantidad}</p>
<span class="aumentar"> ➕ </span>
<p> $ ${el.precio * el.cantidad} </p>
`
mostrarModal.append(modalContent)

let disminuir = modalContent.querySelector(".disminuir")
let aumentar = modalContent.querySelector(".aumentar")

disminuir.addEventListener("click", ()=>{
    if(el.cantidad <= 0){
        el.cantidad;
    pintarCarrito()
    }else{
        el.cantidad--;
        pintarCarrito()
    }
});

aumentar.addEventListener("click", ()=>{
    el.cantidad++;
    pintarCarrito()
});



//eliminar productos dentro del modal

const eliminarProductos = () => {
const findID = carrito.find ((prod) => prod.id)
carrito = carrito.filter((carritoID) => {
    return carritoID !== findID;
})
contar()
pintarCarrito()
}
const eliminar = document.createElement("span")
eliminar.innerText = "🗑️"
eliminar.className= "delete-product"
eliminar.className="eliminar-btn"
modalContent.append(eliminar)

eliminar.addEventListener("click", eliminarProductos)
});

//SUMANDO PRECIO DE PRODUCTOS
const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

const footerModal= document.createElement("div")
footerModal.className="footerModal"
footerModal.innerHTML=`
<h3> Total a pagar: $ ${total} </h3>
<span class="confirmarCompra btn btn-warning"> Comprar </span>
`
let confirmarLaCompra = footerModal.querySelector(".confirmarCompra")
confirmarLaCompra.addEventListener("click", ()=>{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Gracias por tu compra! En breve sale en camino',
        showConfirmButton: false,
        timer: 2500
      })
})
mostrarModal.append(footerModal)
}

iconoDeCarrito.addEventListener("click", pintarCarrito)