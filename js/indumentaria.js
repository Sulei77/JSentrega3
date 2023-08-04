let ropaEnCarrito = []

if (localStorage.getItem("carrito")) {
    ropaEnCarrito = JSON.parse(localStorage.getItem("carrito"))
} else {
    localStorage.setItem("carrito", JSON.stringify(ropaEnCarrito))
}

function findIndumentaria(explore, array) {
    let search = array.filter(
        (indumentaria) => indumentaria.prenda.toLowerCase().includes(explore.toLowerCase()) ||
            indumentaria.titulo.toLowerCase().includes(explore.toLowerCase())
    )

    if (search.length == 0) {
        coincide.innerHTML = ""
        let nuevoDiv = document.createElement("div")
        nuevoDiv.innerHTML = `<p> No coincide </p>`
        coincide.appendChild(nuevoDiv)
        mostrarCatalogo(array)
    } else {
        coincide.innerHTML = ""
        mostrarCatalogo(search)
    }
}

function ordenarMayorMenor(array) {
    let mayorMenor = [].concat(array)
    mayorMenor.sort((a, b) => (b.precio - a.precio))
    mostrarCatalogo(mayorMenor)
}

function ordenarMenorMayor(array) {
    let menorMayor = [].concat(array)
    menorMayor.sort((a, b) => (a.precio - b.precio))
    mostrarCatalogo(menorMayor)
}

function ordenarAlfabeticamente(array) {
    let alfabeticamente = [].concat(array)
    alfabeticamente.sort((a, b) => {

        return 0;
    })
    mostrarCatalogo(alfabeticamente)
}

let divProductos = document.getElementById("productos")
let btnGuardarIndumentaria = document.getElementById("guardarIndumentariaBtn")
let buscador = document.getElementById("buscador")
let btnVerCatalogo = document.getElementById("verCatalogo")
let btnOcultarCatalogo = document.getElementById("ocultarCatalogo")
let modalBody = document.getElementById("modal-body")
let botonCarrito = document.getElementById("botonCarrito")
let coincide = document.getElementById("coincide")
let selectOrden = document.getElementById("selectOrden")

function mostrarCatalogo(array) {
    divProductos.innerHTML = ""

    for (const indumentaria of array) {
        let nuevoIndumentaria = document.createElement("div")
        nuevoIndumentaria.classList.add("col-12", "col-md-6", "col-lg-4", "my-4")
        nuevoIndumentaria.innerHTML = `<div id="${indumentaria.id}" class="card" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 200px;"src="img/${indumentaria.imagen}" alt="${indumentaria.titulo} de ${indumentaria.prenda}">
        <div class="card-body">
            <h4 class="card-title">${indumentaria.titulo}</h4>
            <p>Genero: ${indumentaria.prenda}</p>
            <p class="">Valor: ${indumentaria.precio}</p>
        <button id="agregarBtn${indumentaria.id}" class="btn btn-outline-success">Agregar al carrito</button>
        </div>
</div>`
        divProductos.appendChild(nuevoIndumentaria)
        let btnAgregar = document.getElementById(`agregarBtn${indumentaria.id}`)

        btnAgregar.addEventListener("click", () => {
            agregarAlCarrito(indumentaria)
        })
    }
}

function agregarAlCarrito(indumentaria) {
    ropaEnCarrito.push(indumentaria)
    localStorage.setItem("carrito", JSON.stringify(ropaEnCarrito))
}

function cargarProductosCarrito(array) {
    modalBody.innerHTML = ""

    array.forEach(productoCarrito => {
        modalBody.innerHTML += `<div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
                <img class="card-img-top" height="300px" src="img/${productoCarrito.imagen}" alt="${productoCarrito.titulo}">
        <div class="card-body">
            <h4 class="card-title">${productoCarrito.titulo}</h4>
            <p class="card-text">$${productoCarrito.precio}</p> 
            <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
    </div>    
</div>`
    });

    array.forEach((productoCarrito, indice) => {
        document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click", () => {
            let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
            cardProducto.remove()
            ropaEnCarrito.splice(indice, 1)
            localStorage.setItem("carrito", JSON.stringify(ropaEnCarrito))


        })

    });

}

function cargarIndumentaria(array) {
    let inputAutor = document.getElementById("autorInput")
    let inputTitulo = document.getElementById("tituloInput")
    let inputPrecio = document.getElementById("precioInput")

    let indumentariaCreado = new Indumentaria(array.length + 1, inputAutor.value, inputTitulo.value, parseInt(inputPrecio.value), "indumentariaNuevo.jpg")
    array.push(indumentariaCreado)
    localStorage.setItem("estanteria", JSON.stringify(array))
    mostrarCatalogo(array)
    inputAutor.value = ""
    inputTitulo.value = ""
    inputPrecio.value = ""
}

btnGuardarIndumentaria.addEventListener("click", () => {
    cargarIndumentaria(estanteria)
})

buscador.addEventListener("input", () => {
    buscarInfo(buscador.value, estanteria)
})

botonCarrito.addEventListener("click", () => {
    cargarProductosCarrito(ropaEnCarrito)
})

selectOrden.addEventListener("change", () => {
    if (selectOrden.value == 1) {
        ordenarMayorMenor(estanteria)
    }

    else if (selectOrden.value == 2) {
        ordenarMenorMayor(estanteria)
    }

    else if (selectOrden.value == 3) {
        ordenarAlfabeticamente(estanteria)
    }
    else {
        mostrarCatalogo(estanteria)
    }
})

mostrarCatalogo(estanteria)