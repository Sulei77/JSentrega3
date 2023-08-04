class Indumentaria {
    constructor(id, autor, titulo, precio, imagen) {
        this.id = id,
        this.autor = autor,
        this.titulo = titulo,
        this.precio = precio,
        this.imagen = imagen
    }
    mostrarData() {
        console.log(`El titulo es ${this.titulo}, el autor es ${this.autor} y su precio es ${this.precio}`)
    }
}

const indumentaria1 = new Indumentaria (1, "Jorge Luis Borges", "Aleph", 900, "AlephBorges.jpg")
const indumentaria2 = new Indumentaria (2, "Gabriel Garcia Marquez", "Cien años de soledad", 4500, "CienSoledadMarquez.jpg")
const indumentaria3 = new Indumentaria (3, "Isabel Allende", "Paula", 2800, "PaulaAllende.jpg")
const indumentaria4 = new Indumentaria (4, "Jorge Luis Borges", "Ficciones", 1400, "FiccionesBorges.jpg")
const indumentaria5 = new Indumentaria (5, "Mario Benedetti", "Andamios", 2200, "AndamiosBenedetti.jpg")
const indumentaria6 = new Indumentaria (6, "Mario Vargas Llosa", "La ciudad y los perros", 2000, "CiudadPerrosVargasLlosa.jpg")

let estanteria = []

if (localStorage.getItem("estanteria")) {
    estanteria = JSON.parse(localStorage.getItem("estanteria"))
}else{
    estanteria.push(indumentaria1, indumentaria2, indumentaria3, indumentaria4, indumentaria5, indumentaria6)
    localStorage.setItem("estanteria", JSON.stringify(estanteria))
}