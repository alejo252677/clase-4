// =====================================
// BASE DE DATOS
// =====================================

const productos = [

    {
        id:1,
        nombre:"Laptop Gamer",
        categoria:"Laptop",
        precio:4500,
        rating:5,
        descripcion:"Laptop de alto rendimiento con RTX 4070 y Ryzen 9.",
        imagen:"https://placehold.co/400x250?text=Laptop"
    },

    {
        id:2,
        nombre:"MacBook Air",
        categoria:"Laptop",
        precio:5200,
        rating:4,
        descripcion:"Ideal para estudiantes y desarrolladores.",
        imagen:"https://placehold.co/400x250?text=MacBook"
    },

    {
        id:3,
        nombre:"iPhone 16",
        categoria:"Celular",
        precio:4800,
        rating:5,
        descripcion:"El smartphone más potente de Apple.",
        imagen:"https://placehold.co/400x250?text=iPhone"
    },

    {
        id:4,
        nombre:"Samsung S25",
        categoria:"Celular",
        precio:4200,
        rating:4,
        descripcion:"Pantalla AMOLED y excelente cámara.",
        imagen:"https://placehold.co/400x250?text=Samsung"
    },

    {
        id:5,
        nombre:"Nintendo Switch",
        categoria:"Gaming",
        precio:1800,
        rating:5,
        descripcion:"Consola híbrida portátil.",
        imagen:"https://placehold.co/400x250?text=Switch"
    },

    {
        id:6,
        nombre:"PlayStation 5",
        categoria:"Gaming",
        precio:2800,
        rating:5,
        descripcion:"Consola de nueva generación.",
        imagen:"https://placehold.co/400x250?text=PS5"
    },

    {
        id:7,
        nombre:"Xbox Series X",
        categoria:"Gaming",
        precio:2700,
        rating:4,
        descripcion:"La consola más potente de Microsoft.",
        imagen:"https://placehold.co/400x250?text=Xbox"
    },

    {
        id:8,
        nombre:"Mouse Logitech G502",
        categoria:"Accesorios",
        precio:280,
        rating:5,
        descripcion:"Mouse gamer de alta precisión.",
        imagen:"https://placehold.co/400x250?text=Mouse"
    },

    {
        id:9,
        nombre:"Teclado Mecánico",
        categoria:"Accesorios",
        precio:450,
        rating:4,
        descripcion:"Teclado RGB con switches mecánicos.",
        imagen:"https://placehold.co/400x250?text=Teclado"
    },

    {
        id:10,
        nombre:"Monitor Gamer",
        categoria:"Accesorios",
        precio:1500,
        rating:5,
        descripcion:"27 pulgadas, 165Hz.",
        imagen:"https://placehold.co/400x250?text=Monitor"
    },

    {
        id:11,
        nombre:"Steam Deck",
        categoria:"Gaming",
        precio:2500,
        rating:5,
        descripcion:"PC portátil para videojuegos.",
        imagen:"https://placehold.co/400x250?text=Steam+Deck"
    },

    {
        id:12,
        nombre:"AirPods Pro",
        categoria:"Accesorios",
        precio:1200,
        rating:4,
        descripcion:"Audio inalámbrico premium.",
        imagen:"https://placehold.co/400x250?text=AirPods"
    }

];

// =====================================
// ELEMENTOS DEL DOM
// =====================================

const contenedor = document.getElementById("productos");
const detalle = document.getElementById("detalleContenido");
const buscador = document.getElementById("buscar");
const botones = document.querySelectorAll(".categorias button");

// =====================================
// ESTRELLAS
// =====================================

function estrellas(cantidad){

    let resultado="";

    for(let i=0;i<cantidad;i++){

        resultado+="⭐";

    }

    return resultado;

}

// =====================================
// RENDER PRODUCTOS
// =====================================

function renderProductos(lista){

    contenedor.innerHTML="";

    lista.forEach(producto=>{

        contenedor.innerHTML += `

        <article class="card">

            <img src="${producto.imagen}" alt="${producto.nombre}">

            <div class="card-body">

                <h3>${producto.nombre}</h3>

                <p>${producto.descripcion}</p>

                <div class="precio">

                    $ ${producto.precio}

                </div>

                <div class="rating">

                    ${estrellas(producto.rating)}

                </div>

                <button onclick="mostrarDetalle(${producto.id})">

                    Ver Más

                </button>

            </div>

        </article>

        `;

    });

}

// =====================================
// DETALLE
// =====================================

function mostrarDetalle(id){

    const producto = productos.find(p=>p.id===id);

    detalle.innerHTML=`

        <img src="${producto.imagen}">

        <h3>${producto.nombre}</h3>

        <span class="detalle-categoria">

            ${producto.categoria}

        </span>

        <div class="detalle-rating">

            ${estrellas(producto.rating)}

        </div>

        <p>

            ${producto.descripcion}

        </p>

        <div class="detalle-precio">

            $ ${producto.precio}

        </div>

    `;

}

// =====================================
// BUSCADOR
// =====================================

buscador.addEventListener("keyup",()=>{

    const texto = buscador.value.toLowerCase();

    const filtrados = productos.filter(producto=>{

        return producto.nombre.toLowerCase().includes(texto);

    });

    renderProductos(filtrados);

});

// =====================================
// FILTRO CATEGORIAS
// =====================================

botones.forEach(boton=>{

    boton.addEventListener("click",()=>{

        botones.forEach(btn=>{

            btn.classList.remove("activo");

        });

        boton.classList.add("activo");

        const categoria = boton.dataset.categoria;

        if(categoria==="Todos"){

            renderProductos(productos);

            return;

        }

        const lista = productos.filter(producto=>{

            return producto.categoria===categoria;

        });

        renderProductos(lista);

    });

});

// =====================================
// INICIO
// =====================================

renderProductos(productos);
mostrarDetalle(1);