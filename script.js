class libro {

    constructor(titulo, autor, genero, precio) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.precio = precio;
    }
}

const libreria = [
    new libro("La poesia de adolfo becquer", "Adolfo Becquer", "desarrollo personal", 800),
    new libro("Eragon", "Christopher Paolin", "fantasia", 2300),
    new libro("Crónicas de la Torre 1", "Laura Gallego Garcia", "fantasia", 1250),
    new libro("El Demonio de Arbennios", "Bernard Torello", "fantasia", 1800),
    new libro("Fuego y Sangre", "Reorge RR Martin", "fantasia", 4700),
    new libro("Mareas de Medianoche", "Steven Erikson", "fantasia", 980),
    new libro("Habitos atomicos", "James Clear", "desarrollo personal", 1300),
    new libro("Harry Potter y el caliz de fuego", "JK Rowling", "fantasia", 2100),
    new libro("Kings of the Wilds", "Nicholas Eames", "fantasia", 1999),
    new libro("El Señor de los Anillos 1", "JRR Tolkien", "fantasia", 2100),
    new libro("Padre rico padre pobre", "Robert T Kiyosaki", "desarrollo personal", 3000),
    new libro("Piense y hagase rico", "Napoleon Hill", "desarrollo personal", 2300)
];




//------------- C A R R I T O ---------//

//Donde se va a agregar el DIV con el .createElemnt
const ContenedorItemsCarrito = document.querySelector('.contenedoritems__carrito');

//BotonES "Añadir al Carrito"
const aniadiralcarritokotw = document.querySelector(".btnkotw");

const aniadiralcarritoPyhr = document.querySelector(".btnpyhr");

const aniadiralcarritoHpyecdf = document.querySelector(".btnhpyecdf");

const aniadiralcarritoLotr = document.querySelector(".btn__lotr");

//se pueden agregar dos clases a un mismo elemento?
const aniadiralcarritoKotw2 = document.querySelector(".btn__kotw");

const aniadiralcarritoEragon = document.querySelector(".btn__eragon");

const aniadiralcarritoHp = document.querySelector(".btn__hp");

const aniadiralcarritoCdlt = document.querySelector(".btn__cdlt");

const aniadiralcarritoEdda = document.querySelector(".btn__edda");

const aniadiralcarritoFys = document.querySelector(".btn__fys");

const aniadiralcarritoMdm = document.querySelector(".btn__mdm");



//Evento del Boton "Añadir al Carrito"
aniadiralcarritokotw.addEventListener("click", aniadirclickeado);

aniadiralcarritoPyhr.addEventListener("click", aniadirclickeado);

aniadiralcarritoHpyecdf.addEventListener("click", aniadirclickeado);

aniadiralcarritoLotr.addEventListener("click", aniadirclickeado);

aniadiralcarritoEragon.addEventListener("click", aniadirclickeado);

aniadiralcarritoHp.addEventListener("click", aniadirclickeado);

aniadiralcarritoCdlt.addEventListener("click", aniadirclickeado);

aniadiralcarritoEdda.addEventListener("click", aniadirclickeado);

aniadiralcarritoFys.addEventListener("click", aniadirclickeado);

aniadiralcarritoMdm.addEventListener("click", aniadirclickeado);

//Ver como no repetir
aniadiralcarritoKotw2.addEventListener("click", aniadirclickeado);



function aniadirclickeado(event) {
    const button = event.target;
    const item = button.closest(".itemclickeado");

    //Titulo
    const itemTitulo = item.querySelector(".item-titulo").textContent;

    //Precio
    const preciolibroclickeado = (libreria.find(elemento => elemento.titulo == itemTitulo));

    const itemPrecio = parseInt(preciolibroclickeado.precio);


    //Imagen
    const itemImagen = item.querySelector(".item-imagen").src;

    AniadirItemaCarrito(itemTitulo, itemPrecio, itemImagen);

    const ItemAutor = preciolibroclickeado.autor;

    const ItemGenero = preciolibroclickeado.genero;

    AniadirItemcarritoLS(ItemAutor, ItemGenero, itemPrecio, itemTitulo);


}


// ------ L O C A L - S T O R A G E ----- //
function AniadirItemcarritoLS(ItemAutor, ItemGenero, itemPrecio, itemTitulo) {

    class CarritoparaLS {
        constructor(titulo, autor, genero, precio, cantidad) {
            this.titulo = titulo;
            this.autor = autor;
            this.genero = genero;
            this.precio = precio;
            this.cantidad = cantidad;
        }
    }

    var Cantidad = 0;

    NuevoItem = new CarritoparaLS(itemTitulo, ItemAutor, ItemGenero, itemPrecio, Cantidad)

    SubirItemLS()
}

//Array Carrito
var BasedeDatosCarrito = [];
function SubirItemLS() {
    BasedeDatosCarrito.push(NuevoItem);

    // LocalStorage
    localStorage.setItem("Libro", JSON.stringify(NuevoItem));


// Intento que me suba mas de un libro y no q me los cambie
}


// --------------------------------------------- //







//Alerta Carrito
function AlertaCarrito() {
    const Hayelementosenelcarrito = ContenedorItemsCarrito.querySelector(".item__carrito--texto");
    const BTNalertaCarrito = document.querySelector(".btn_carrito--alerta");

    Hayelementosenelcarrito.length == 0 ? BTNalertaCarrito.style.display = "none" : BTNalertaCarrito.style.display = "block";
    return
};
//Ver como hacer q desaparesca cuando no hay mas cosas en el carrito

function AlertaCarritovacio() {
    const Hayelementosenelcarrito = ContenedorItemsCarrito.querySelector(".contenedoritems__carrito");
    const BTNalertaCarrito = document.querySelector(".btn_carrito--alerta");

    if (!Hayelementosenelcarrito.hasChildNodes()) {
        BTNalertaCarrito.style.display = "none";
        return;
    }

} //Cannot read properties of null (reading 'length')


// ---- Segundo Intento con .hasChildNodes() y llamando al Contenedor

/*   function AlertaCarrito() {
        const Hayelementosenelcarrito = ContenedorItemsCarrito.querySelector(".contenedoritems__carrito");
        const BTNalertaCarrito = document.querySelector(".btn_carrito--alerta");

        Hayelementosenelcarrito.hasChildNodes() ? BTNalertaCarrito.style.display = "block" : BTNalertaCarrito.style.display = "none";
        return
    };
    //Ver como hacer q desaparesca cuando no hay mas cosas en el carrito

 function AlertaCarritovacio() {
        const Hayelementosenelcarrito = ContenedorItemsCarrito.querySelector(".contenedoritems__carrito");
        const BTNalertaCarrito = document.querySelector(".btn_carrito--alerta");
        
        if (!Hayelementosenelcarrito.hasChildNodes()){
            BTNalertaCarrito.style.display = "none";
            return;
        }
        
    }  */









function AniadirItemaCarrito(itemTitulo, itemPrecio, itemImagen) {




// ------------------- ALERTA TOAST ----------------- //

  /*   let ContenedorparaToast = chequeaContenido.querySelector(".contenedoritems__carrito");

    for (let i = 0; i < ContenedorparaToast.length; i++) {

        if (!ContenedorparaToast[i].innerHTML.includes(div)) {
            Toastify({
                text: "Se agrego un producto a tu Carrito",
                className: "info",
                duration: "1500",
                offset: {
                    x: 0,
                    y: 70
                },
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();            
        } 
    }; */


/*     Toastify({
        text: "Se agrego un producto a tu Carrito",
        className: "info",
        duration: "1500",
        offset: {
            x: 0,
            y: 70
        },
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
} else {
    Toastify({
        text: "Este producto ya esta en tu Carrito",
        className: "info",
        duration: "1500",
        offset: {
            x: 0,
            y: 70
        },
        style: {
            background: "linear-gradient(to right, #a10000, #c9773d)",
        }
    }).showToast(); */


    // Alerta Toast

    //Evitar Items Repetidos
    const ItemNOrepetir = ContenedorItemsCarrito.getElementsByClassName("item__carrito--texto");

    //const ContenedorparaToast = chequeaContenido.querySelector(".contenedoritems__carrito");

    //si pongo (-1) funciona
    for (let i = 0; i < ItemNOrepetir.length; i++) {

        if(ItemNOrepetir.length < 1 ){
            Toastify({
                text: "Se agrego un producto a tu Carrito",
                className: "info",
                duration: "1500",
                offset: {
                    x: 0,
                    y: 70
                },
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
        }
        
        else if (!ItemNOrepetir[i].innerHTML.includes(itemTitulo)) {
            
        } else {
            Toastify({
                text: "Este producto ya esta en tu Carrito",
                className: "info",
                duration: "1500",
                offset: {
                    x: 0,
                    y: 70
                },
                style: {
                    background: "linear-gradient(to right, #a10000, #c9773d)",
                }
            }).showToast();
            return
        }
    };


    // Operador avanzado "?"

    /* !ItemNOrepetir[i].innerHTML.includes(itemTitulo) ?
        Toastify({
            text: "Se agrego un producto a tu Carrito",
            className: "info",
            duration: "1500",
            offset: {
                x: 0,
                y: 70 
              },
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast() 
          :       
        Toastify({
            text: "Este producto ya esta en tu Carrito",
            className: "info",
            duration: "1500",
            offset: {
                x: 0,
                y: 70 
              },
            style: {
              background: "linear-gradient(to right, #a10000, #c9773d)",
            }
          }).showToast();
          return;
        }}; */




    // Do While

    /*         do {
                Toastify({
                    text: "Se agrego un producto a tu Carrito",
                    className: "info",
                    duration: "1500",
                    offset: {
                        x: 0,
                        y: 70 
                      },
                    style: {
                      background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                  }).showToast();
            } while (ItemNOrepetir[i].innerHTML.includes(itemTitulo)){
                Toastify({
                    text: "Este producto ya esta en tu Carrito",
                    className: "info",
                    duration: "1500",
                    offset: {
                        x: 0,
                        y: 70 
                      },
                    style: {
                      background: "linear-gradient(to right, #a10000, #c9773d)",
                    }
                  }).showToast();
                  return
            }}; */





    //Agregar un Item con codigo HTML
    const ItemEnCarrito = document.createElement('div');
    const ContenidoCarrito =
        `<div class="item__carrito--contenedor">    <img src= ${itemImagen} class="item__carrito--imagen">    <div class="item__carrito--texto">    <h6>${itemTitulo}</h6>      <p class="precio__item">$ ${itemPrecio}</p>    </div>    <button class="btn btn-danger buttonDelete" type="button">X</button>  </div>`;
    ItemEnCarrito.innerHTML = ContenidoCarrito;
    ContenedorItemsCarrito.append(ItemEnCarrito);







    //Boton borrar
    ItemEnCarrito.querySelector(".buttonDelete").addEventListener("click", borraritem);

    SumaPreciosCarrito()

    AlertaCarrito()

}



function SumaPreciosCarrito() {
    let total = 0;
    const totalcarrito = document.querySelector('.total__carrito');

    const itemscarrito = document.querySelectorAll('.item__carrito--contenedor');

    itemscarrito.forEach((itemdelcarrito) => {
        const elementoPrecio = itemdelcarrito.querySelector('.precio__item');

        const elementoPrecioTexto = Number(elementoPrecio.textContent.replace("$", ""));


        total = total + elementoPrecioTexto;
    });

    totalcarrito.innerHTML = `$ ${total}`;

}

//Funcion ´Boton Borrar´ 1 item
function borraritem(evento) {
    const clickbotonborrar = evento.target;
    clickbotonborrar.closest('.item__carrito--contenedor').remove();
    SumaPreciosCarrito()
    AlertaCarritovacio()
}


//Boton Compra del Carrito
const ComprarBTN = document.querySelector(".btn__compra");
ComprarBTN.addEventListener("click", ComprarBTNclickeado)
//Funcion que borra todo al comprar del Carrito
function ComprarBTNclickeado() {
    ContenedorItemsCarrito.innerHTML = '';
    localStorage.clear();
    SumaPreciosCarrito();
    //AlertaCarritovacio();
}








// -------------- Hover por JS ---------------- //

/*  ----- LOTR ----- */

let ContainerLotr = document.querySelector(".contenedor__img--Lotr");
let Lotr = document.querySelector(".imglotr");
let Btnoculto = document.querySelector(".btn__lotr");
let Textooculto = document.querySelector(".text__lotr");

ContainerLotr.addEventListener("mouseover", () => {
    Lotr.style.transform = "rotateY(-180deg)";
    Btnoculto.style.display = "block";
    Lotr.style.filter = "blur(2px)";
    Textooculto.style.display = "block";
});

ContainerLotr.addEventListener("mouseout", () => {
    Lotr.style.transform = "rotateY(0deg)";
    Btnoculto.style.display = "none";
    Lotr.style.filter = "blur(0px)";
    Textooculto.style.display = "none";
});



/*  ----- KOTW ----- */

let ContainerKotw = document.querySelector(".contenedor__img--kotw");
let Kotw = document.querySelector(".kingsofthewild");
let BtnocultoK = document.querySelector(".btn__kotw");
let TextoocultoK = document.querySelector(".text__kotw");

ContainerKotw.addEventListener("mouseover", () => {
    Kotw.style.transform = "rotateY(-180deg)";
    Kotw.style.filter = "blur(2px)";
    BtnocultoK.style.display = "block";
    TextoocultoK.style.display = "block";
});

ContainerKotw.addEventListener("mouseout", () => {
    Kotw.style.transform = "rotateY(0deg)";
    Kotw.style.filter = "blur(0px)";
    BtnocultoK.style.display = "none";
    TextoocultoK.style.display = "none";
});


/*  ----- ERAGON ----- */


let ContainerEragon = document.querySelector(".contenedor__img--eragon");
let Eragon = document.querySelector(".img__eragon");
let BtnocultoEragon = document.querySelector(".btn__eragon");
let TextoocultoEragon = document.querySelector(".text__eragon");

ContainerEragon.addEventListener("mouseover", () => {
    Eragon.style.transform = "rotateY(-180deg)";
    Eragon.style.filter = "blur(2px)";
    BtnocultoEragon.style.display = "block";
    TextoocultoEragon.style.display = "block";
});

ContainerEragon.addEventListener("mouseout", () => {
    Eragon.style.transform = "rotateY(0deg)";
    Eragon.style.filter = "blur(0px)";
    BtnocultoEragon.style.display = "none";
    TextoocultoEragon.style.display = "none";
});


/*  ----- HARRY POTTER Y EL CALIZ DE FUEGO ----- */


let ContainerHP = document.querySelector(".contenedor__img--hp");
let Harrypotter = document.querySelector(".img__hp");
let BtnocultoHP = document.querySelector(".btn__hp");
let TextoocultoHP = document.querySelector(".text__hp");

ContainerHP.addEventListener("mouseover", () => {
    Harrypotter.style.transform = "rotateY(-180deg)";
    Harrypotter.style.filter = "blur(2px)";
    BtnocultoHP.style.display = "block";
    TextoocultoHP.style.display = "block";
});

ContainerHP.addEventListener("mouseout", () => {
    Harrypotter.style.transform = "rotateY(0deg)";
    Harrypotter.style.filter = "blur(0px)";
    BtnocultoHP.style.display = "none";
    TextoocultoHP.style.display = "none";
});


/*  ----- CRONICAS DE LA TORRE ----- */


let ContainerCdlt = document.querySelector(".contenedor__img--cdlt");
let Cdlt = document.querySelector(".img__Cdlt");
let BtnocultoCdlt = document.querySelector(".btn__cdlt");
let TextoocultoCdlt = document.querySelector(".text__cdlt");

ContainerCdlt.addEventListener("mouseover", () => {
    Cdlt.style.transform = "rotateY(-180deg)";
    Cdlt.style.filter = "blur(2px)";
    BtnocultoCdlt.style.display = "block";
    TextoocultoCdlt.style.display = "block";
});

ContainerCdlt.addEventListener("mouseout", () => {
    Cdlt.style.transform = "rotateY(0deg)";
    Cdlt.style.filter = "blur(0px)";
    BtnocultoCdlt.style.display = "none";
    TextoocultoCdlt.style.display = "none";
});



/*  ----- El Demonio de Arbennios ----- */


let ContainerEdda = document.querySelector(".contenedor__img--edda");
let Edda = document.querySelector(".img__edda");
let BtnocultoEdda = document.querySelector(".btn__edda");
let TextoocultoEdda = document.querySelector(".text__edda");

ContainerEdda.addEventListener("mouseover", () => {
    Edda.style.transform = "rotateY(-180deg)";
    Edda.style.filter = "blur(2px)";
    BtnocultoEdda.style.display = "block";
    TextoocultoEdda.style.display = "block";
});

ContainerEdda.addEventListener("mouseout", () => {
    Edda.style.transform = "rotateY(0deg)";
    Edda.style.filter = "blur(0px)";
    BtnocultoEdda.style.display = "none";
    TextoocultoEdda.style.display = "none";
});



/*  ----- Fuego y Sangre ----- */


let ContainerFys = document.querySelector(".contenedor__img--fys");
let Fys = document.querySelector(".img__fys");
let BtnocultoFys = document.querySelector(".btn__fys");
let TextoocultoFys = document.querySelector(".text__fys");

ContainerFys.addEventListener("mouseover", () => {
    Fys.style.transform = "rotateY(-180deg)";
    Fys.style.filter = "blur(2px)";
    BtnocultoFys.style.display = "block";
    TextoocultoFys.style.display = "block";
});

ContainerFys.addEventListener("mouseout", () => {
    Fys.style.transform = "rotateY(0deg)";
    Fys.style.filter = "blur(0px)";
    BtnocultoFys.style.display = "none";
    TextoocultoFys.style.display = "none";
});


/*  ----- Mareas de Medianoche  ----- */


let ContainerMdm = document.querySelector(".contenedor__img--mdm");
let Mdm = document.querySelector(".img__mdm");
let BtnocultoMdm = document.querySelector(".btn__mdm");
let TextoocultoMdm = document.querySelector(".text__mdm");

ContainerMdm.addEventListener("mouseover", () => {
    Mdm.style.transform = "rotateY(-180deg)";
    Mdm.style.filter = "blur(2px)";
    BtnocultoMdm.style.display = "block";
    TextoocultoMdm.style.display = "block";
});

ContainerMdm.addEventListener("mouseout", () => {
    Mdm.style.transform = "rotateY(0deg)";
    Mdm.style.filter = "blur(0px)";
    BtnocultoMdm.style.display = "none";
    TextoocultoMdm.style.display = "none";
});

// -------------------------------------------------------------- //




/* ---- carrousel del index ---- */

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {


        let posicion = i

        let operacion = posicion * -50


        grande.style.transform = `translateX(${operacion}%)`


        punto.forEach((cadaPunto, i) => {

            punto[i].classList.remove('activo')
        })

        punto[i].classList.add('activo')

    })
})

















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