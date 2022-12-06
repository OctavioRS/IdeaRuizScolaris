let nombre = prompt("Ingrese su nombre")
let contraseña = prompt("Cree una contraseña, no debe ser igual a su nombre");
//CICLO
while (contraseña == nombre) {
    alert("la contraseña no debe ser igual a tu nombre");
    if (contraseña != nombre) {
        alert("contraseña creada con exito!")
    }
    nombre = prompt("Ingrese su nombre")
    contraseña = prompt("Cree una contraseña, no debe ser igual a su nombre")
    alert("contraseña creada con exito!")
    break;
}
//ARRAY
let avisoEstilos = alert("Los estilos disponibles son:")
let Estilos = ["ipa: $500", "apa: $400", "stout: $300", "honey: $200"]
//CICLO
for (let i = 0; i < 4; i++) {
   alert(Estilos[i]);
}
let estilos = Number(prompt(`Ingrese el numero de estilo que desea:
    1.IPA
    2.APA
    3.STOUT 
    4.HONEY`))
let unidades = Number(prompt("elija el numero de unidades"))

let ipa = 500
let apa = 400
let stout = 300
let honey = 200
//CONDICIONAL Y FUNCION
function total(){
    if (estilos == 1){
    alert("el total a pagar es " + (ipa * unidades))
    } else if(estilos == 2){
    alert("el total a pagar es " + (apa * unidades))
    } else if (estilos == 3){
    alert("el total a pagar es " + (stout * unidades))
    } else if(estilos == 4){
    alert ("el total a pagar es " + (honey * unidades))}
    else("elija un estilo")

}

total();

//ARRAY Y OBJETOS
let filtrado = [
    {   nombre : "ipa",
        color : "rubia",
        amargor : "alto",
        maridaje : "carnes"},
    
    {   nombre : "apa",
        color : "rubia",
        amargor : "alto",
        maridaje : "carnes"},

    {   nombre : "stout",
        color : "negro",
        amargor : "bajo",
        maridaje : "pastas"},

    {   nombre : "honey",
        color : "rubia",
        amargor : "bajo",
        maridaje : "pastas"},
]
//USO DE METODOS
const amargas = filtrado.filter(n => n.amargor === "alto");
const suaves = filtrado.filter(n => n.amargor === "bajo");
const maridarCarnes = filtrado.filter(n => n.maridaje === "carnes");
const maridarPastas = filtrado.filter(n => n.maridaje === "pastas");

