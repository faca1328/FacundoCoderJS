
let nombreusuario = prompt("ingresa tu Nombre")

alert("Bienvenido/a " + nombreusuario)

let password = false

for (let i = 2; i >= 0; i--) {
    let userpassword = prompt("busca tu password de 4 digitos :)");
    if (userpassword == 9080) {
        alert("Bien! sigamos")
        password = true
        break;
    }
    else {
        alert("Sigue buscando te quedan " + i + " intentos.")
    }

}


if (!password) {
    alert("Bueno sigamos igual, no vamos a ser mala onda :)")
}

let caballoblanco;

    do {caballoblanco = prompt("De que color es el caballo blanco de San Martin ?" + "\nTe dejo opciones para que no sea tan dificil!" + "\n 1) negro  2) blanco  3) cian");

        switch (caballoblanco) {
        case "negro" /* && "1" && "Negro" */:
            alert("cerca pero no");
            break;

        case "blanco" /* && "2" && "Blanco" */:
            alert("correcto !");
            break;

        case "cian" /* && "3" && "Cian" */:
            alert("really? un caballo cian?");
            break;

        default:
            alert("Error");
            break; 
        }
    } while (caballoblanco != "blanco" /* && "2" && "Blanco" */);




    let palabraoculta = "aquiles" && "Aquiles"
do{ palabraocultausuario= prompt("Ultima!, Busca la palabra Oculta !!")
    {if (palabraoculta = palabraocultausuario) { "¡ Aquiles Bailoyo !"}
    else{alert("mira un poco mas arriba")}; }  
}while(palabraoculta != "aquiles" && "Aquiles");




        



