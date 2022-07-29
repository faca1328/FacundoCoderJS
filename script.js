
class libro {

    constructor(titulo,autor,genero,precio){
        this.titulo=titulo;
        this.autor=autor;
        this.genero=genero;
        this.precio=precio;
    }
}

const libreria = [
    new libro("La poesia de adolfo becquer", "Adolfo Becquer" , "desarrollo personal" , 800),
    new libro("Eragon", "Christopher Paolin", "fantasia", 2.300),
    new libro("Cronicas de la torre 1", "Laura Gallego Garcia", "fantasia", 1.250),
    new libro("El demonio de arbennios", "Bernard Torello", "fantasia", 1.800),
    new libro("Fuego y sangre", "Reorge RR Martin", "fantasia", 4.700),
    new libro("Mareas de medianoche", "Steven Erikson", "fantasia", 980),
    new libro("Habitos atomicos", "James Clear", "desarrollo personal", 1.300),
    new libro("Harry potter y el caliz de fuego", "JK Rowling", "fantasia", 2.100),
    new libro("Kings of the wilds", "Nicholas Eames", "fantasia", 1999),
    new libro("El señor de los anillos 1", "JRR Tolkien" , "fantasia", 2.100),
    new libro("Padre rico padre pobre", "Robert T Kiyosaki", "desarrollo personal", 3.000),
    new libro("Piense y hagase rico", "Napoleon Hill", "desarrollo personal", 2300)
];

function mostrar(libreria){
    let info = "" ;

    libreria.forEach(elemento=>{
        info+= "Titulo: "+ elemento.titulo+ "\nAutor: "+elemento.autor+"\nPrecio: $"+elemento.precio+".- \n\n"
    });
    return info;
}



//------------- C A R R I T O ---------//

//Donde se va a agregar el DIV con el .createElemnt
const ContenedorItemsCarrito = document.querySelector('.contenedoritems__carrito');

//BotonES "Añadir al Carrito"
const aniadiralcarritokotw = document.querySelector(".btnkotw");

const aniadiralcarritoPyhr = document.querySelector(".btnpyhr");

const aniadiralcarritoHpyecdf = document.querySelector(".btnhpyecdf");


//Evento del Boton "Añadir al Carrito"
aniadiralcarritokotw.addEventListener("click", aniadirclickeado);

aniadiralcarritoPyhr.addEventListener("click", aniadirclickeado);

aniadiralcarritoHpyecdf.addEventListener("click", aniadirclickeado);


function aniadirclickeado(event){
    const button = event.target;
    const item = button.closest(".itemclickeado");
    
//Titulo
    const itemTitulo= item.querySelector(".item-titulo").textContent;

//Precio
    const preciolibroclickeado = (libreria.find(elemento => elemento.titulo == itemTitulo));

    const itemPrecio = parseInt(preciolibroclickeado.precio);

//Imagen
    const itemImagen = item.querySelector(".item-imagen").src;

    AniadirItemaCarrito(itemTitulo,itemPrecio,itemImagen);
}

function AniadirItemaCarrito(itemTitulo,itemPrecio,itemImagen){

    //Evitar Items Repetidos
/*     const ItemNOrepetir = ContenedorItemsCarrito.getElementsByClassName(".item__carrito--texto");

    for (let i = 0; i < ItemNOrepetir.length; i++){
        if(ItemNOrepetir[i].innerText === itemTitulo){
        
        }
    } */


    //Agregar un Item con codigo HTML
    const ItemEnCarrito = document.createElement('div');
    const ContenidoCarrito = 
    `<div class="item__carrito--contenedor">    <img src= ${itemImagen} class="item__carrito--imagen">    <div class="item__carrito--texto">    <h6>${itemTitulo}</h6>      <p class="precio__item">$ ${itemPrecio}</p>    </div>    <button class="btn btn-danger buttonDelete" type="button">X</button>  </div>`;
    ItemEnCarrito.innerHTML = ContenidoCarrito;
    ContenedorItemsCarrito.append(ItemEnCarrito);

    //Boton borrar
    ItemEnCarrito.querySelector(".buttonDelete").addEventListener("click",borraritem);

    SumaPreciosCarrito()
}

function SumaPreciosCarrito(){
    let total = 0;
    const totalcarrito = document.querySelector('.total__carrito');

    const itemscarrito = document.querySelectorAll('.item__carrito--contenedor');

    itemscarrito.forEach((itemdelcarrito) => {
       const elementoPrecio = itemdelcarrito.querySelector('.precio__item');

       const elementoPrecioTexto = Number(elementoPrecio.textContent.replace("$",""));

        total = total + elementoPrecioTexto;
    });
    
    totalcarrito.innerHTML = `${total}`;

}

//Funcion ´Boton Borrar´ 1 item
function borraritem(evento){
    const clickbotonborrar=evento.target;
    clickbotonborrar.closest('.item__carrito--contenedor').remove();
}


//Boton Compra del Carrito
const ComprarBTN = document.querySelector(".btn__compra");
ComprarBTN.addEventListener("click", ComprarBTNclickeado)
//Funcion que borra todo al comprar del Carrito
function ComprarBTNclickeado(){
    ContenedorItemsCarrito.innerHTML = '';
    SumaPreciosCarrito();

}








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
        



// -------- HACER QUE LAS TARJETAS DE LOS CARROUSELES SE DEN VUELTA ------------//

/* 
const elseñordelosanillos = document.getElementById(elseñordelosanillos);

const kingsofthewild = document.getElementById(kingsofthewild);

const eragon = document.getElementById(eragon);

const harrypotter = document.getElementById(harrypotter);

const cronicasdelastorre = document.getElementById(cronicasdelastorre);

const eldemoniodearbenninos = document.getElementById(eldemoniodearbenninos);

const fuegoysangre = document.getElementById(fuegoysangre);

const mareasdemedianoche = document.getElementById(mareasdemedianoche);


eragon.addEventListener("click") */

// Agregar el elemmento hiden:  http://chuwiki.chuidiang.org/index.php?title=Cambiar_elementos_al_hacer_click









//----------------------------------- E N T R E G A S ----------------------------------------------//



// Entrega 18/07
/* 
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
            break;

        case "desarrollo personal" :
            const filtrado2=libreria.filter(elemento => elemento.genero == "desarrollo personal");
            alert(mostrar(filtrado2));
            break;

        default:
            alert("elegir entre el genero ¨fantasia¨ o ¨desarrollo personal¨ ");
            break; 
    }

    
} */




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