
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

aniadiralcarritoKotw2.addEventListener("click", aniadirclickeado);


// ------ L O C A L - S T O R A G E ----- //
const BasedeDatosCarrito = [];


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


    //Encontrar libro para Local Storage
    const LibroEncontrado = libreria.find((elemento => elemento.titulo == itemTitulo))

    
    if (!BasedeDatosCarrito.find(elemento => elemento.titulo === itemTitulo))
        {
            BasedeDatosCarrito.push(LibroEncontrado);
        };
    

    

    localStorage.setItem("libro",JSON.stringify(BasedeDatosCarrito));


    AniadirItemaCarrito(itemTitulo, itemPrecio, itemImagen);
}



// --------------------------------------------- //






//Alerta Carrito
function AlertaCarrito() {
    const Hayelementosenelcarrito = ContenedorItemsCarrito.querySelector(".item__carrito--texto");
    const BTNalertaCarrito = document.querySelector(".btn_carrito--alerta");

    Hayelementosenelcarrito.length == 0 ? BTNalertaCarrito.style.display = "none" : BTNalertaCarrito.style.display = "block";
};

function AlertaCarritovacio() {
    const Hayelementosenelcarrito2 = ContenedorItemsCarrito.querySelector(".item__carrito--texto");
    const BTNalertaCarrito2 = document.querySelector(".btn_carrito--alerta");

    if (Hayelementosenelcarrito2 === null){
        BTNalertaCarrito2.style.display = "none"
    }
}; 



function AniadirItemaCarrito(itemTitulo, itemPrecio, itemImagen) {

// ------------------- ALERTA TOAST ----------------- //

    //Evitar Items Repetidos
    const ItemNOrepetir = ContenedorItemsCarrito.getElementsByClassName("item__carrito--texto");

    if (ItemNOrepetir.length === 0){
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
    

    for (let i = 0; i < ItemNOrepetir.length; i++) {

        if (ItemNOrepetir[i].innerHTML.includes(itemTitulo)) {
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


    //Agregar un Item con codigo HTML
    const ItemEnCarrito = document.createElement('div');
    const ContenidoCarrito =
        `<div class="item__carrito--contenedor">    <img src= ${itemImagen} class="item__carrito--imagen">    <div class="item__carrito--texto">    <h6 class = "titulols">${itemTitulo}</h6>      <p class="precio__item">$ ${itemPrecio}</p>    </div>    <button class="btn btn-danger buttonDelete" type="button">X</button>  </div>`;
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
    const itemTituloborrar = document.querySelector(".titulols").textContent;
    //obtengo datos
    JSON.parse(localStorage.getItem(BasedeDatosCarrito));
    //encuentro el dato a borrar
    let Objetoaborrarls = BasedeDatosCarrito.findIndex(elemento => elemento.titulo == itemTituloborrar);
    //lo borro
    BasedeDatosCarrito.splice(Objetoaborrarls,1);
    //rarmo los datos
    JSON.stringify(BasedeDatosCarrito);
    //Actualizo LS
    localStorage.setItem("libro",JSON.stringify(BasedeDatosCarrito));


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

    Swal.fire(
        'Felicitaciones!',
        'Tu compra fue realizada con exito.',
        'success'
      )
    AlertaCarritovacio();
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




