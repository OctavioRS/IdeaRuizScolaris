//CUENTA DEL CLIENTE

const formulario = document.querySelector("#usuarioContraseña")
let datosfinales= document.querySelector("#datosFinales")
let mensajeFInal = document.querySelector(".mensajeFinal")
let usuario = document.querySelector("#usuario").value
let contraseña = document.querySelector("#contraseña").value
//Formulario
formulario.addEventListener("submit" , (e)=>{
    e.preventDefault();
     const {nombre, contraseña} = e.target;
     datosfinales.innerHTML =`
     <p> Tus datos son: <br>
     ${nombre.value} <br>
     ${contraseña.value}
     `
//Guardando en local storage
     localStorage.setItem(nombre.value,contraseña.value)
})
//Boton que confirma la creación de la cuenta
const botonCrear= document.querySelector("#crear")
botonCrear.addEventListener("click", ()=>{
            Swal.fire('Cuenta creada con éxito')
          
})
//Boton para volver a la página principal
const botonFinalizar= document.querySelector("#finalizar")
botonFinalizar.addEventListener("click", ()=>{
  location.href = "index.html";})