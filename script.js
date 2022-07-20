class libro {

    constructor(titulo,autor,genero,precio){
        this.titulo=titulo;
        this.autor=autor;
        this.genero=genero;
        this.precio=precio;
    }
}

const libreria = [
    new libro("la poesia de adolfo becquer", "adolfo becquer" , "desarrollo personal" , 800),
    new libro("eragon", "christopher paolin", "fantasia", 2300),
    new libro("cronicas de la torre 1", "laura gallego garcia", "fantasia", 1250),
    new libro("el demonio de arbennios", "bernard torello", "fantasia", 1800),
    new libro("fuego y sangre", "george rr martin", "fantasia", 4700),
    new libro("mareas de medianoche", "steven erikson", "fantasia", 980),
    new libro("habitos atomicos", "james clear", "desarrollo personal", 1300),
    new libro("harry potter y el caliz de fuego", "jk rowling", "fantasia", 2100),
    new libro("kings of the wilds", "nicholas eames", "fantasia", 1999),
    new libro("el señor de los anillos 1", "jrr tolkien" , "fantasia", 2100),
    new libro("padre rico padre pobre", "robert t kiyosaki", "desarrollo personal", 3000),
    new libro("piense y hagase rico", "napoleon hill", "desarrollo personal", 2300)
];

function mostrar(libreria){
    let info = "" ;

    libreria.foreach(elemento=>{
        info+= "Titulo: "+ elemento.titulo+ "\nAutor: "+elemento.autor+"\nPrecio: $"+elemento.precio+".- \n\n"
    });
    return info;
}


let buscar = true;

while (buscar){
    let buscador = prompt("ingresa el genero que mas te guste (fantasia o desarrollo personal) para ver nuestro catalogo. \nPara salir ingresar: x");

    if(buscador.toLowerCase()== "x"){
        buscar=false;
        break;}

    switch(buscador.toLowerCase()){
        case "fantasia" :
            const filtrado=libreria.filter(elemento => elemento.genero == "fantasia");
            alert(mostrar(filtrado));
            

/*             let filtrado = libreria.filter((libro)=>libro.genero.toLowerCase().includes(buscador.toLowerCase()));
            function mostrar (array){
                let info = " ";
                array.foreach(element=>{
                    info+= "Titulo: "+element.titulo+"\nAutor: "+element.autor+"\nPrecio: $"+element.precio+"\n\n"
                })
                return info;
            }
            alert(mostrar(filtrado(buscador,libreria))); */
            break;

        case "desarrollo personal" :
            const filtrado2=libreria.filter(elemento => elemento.genero == "desarrollo personal");
            //alert(mostrar(filtrado2));
            console.log(filtrado2);
            break;

        default:
            alert("elegir entre el genero ¨fantasia¨ o ¨desarrollo personal¨ ");
            break; 
    }

    
}










/* --------   Codigo de entregas anteriores 17/7/22    ----------- */

/* 
let nombreusuario = prompt("ingresa tu Nombre")

alert("Bienvenido/a " + nombreusuario)

let password = false

for (let i = 2; i >= 0; i--) {
    let userpassword = prompt("busca tu password de 4 digitos (9080)");
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



/* ---- carrousel del index ---- */

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener('click',()=>{

        
        let posicion  = i
        
        let operacion = posicion * -50

        
        grande.style.transform = `translateX(${ operacion }%)`

        
        punto.forEach( ( cadaPunto , i )=>{
            
            punto[i].classList.remove('activo')
        })
        
        punto[i].classList.add('activo')

    })
})
        



