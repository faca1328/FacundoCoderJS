/* 
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
        case "negro" :
            alert("cerca pero no");
            break;

        case "blanco" :
            alert("correcto !");
            break;

        case "cian" :
            alert("really? un caballo cian?");
            break;

        default:
            alert("Error");
            break; 
        }
    } while (caballoblanco != "blanco" );
 */

/* 
let palabraoculta = "aquiles"

do{ palabraocultausuario= prompt("Ultima!, Busca la palabra Oculta !!");

    if (palabraoculta = palabraocultausuario) { "¡ Aquiles Bailoyo !"}
    else {alert("mira un poco mas arriba")};
}while(palabraoculta != "aquiles" );

 */



/* ---- carrousel del index ---- */

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -50

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})
        



