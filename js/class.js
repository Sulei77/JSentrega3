class Indumentaria {
    constructor(id, autor, titulo, precio, imagen) {
        this.id = id,
        this.prenda = autor,
        this.titulo = titulo,
        this.precio = precio,
        this.imagen = imagen
    }
    mostrarData() {
        console.log(`El titulo es ${this.titulo}, el autor es ${this.prenda} y su precio es ${this.precio}`)
    }
}

const indumentaria1 = new Indumentaria (1, "Unisex", "Billetera Cuero", 5000, "billetera001.webp")
const indumentaria2 = new Indumentaria (2, "Unisex", "Billetera", 5000, "billetera002.webp")
const indumentaria3 = new Indumentaria (3, "Mujer", "Buzo", 15000, "buzomujer001.webp")
const indumentaria4 = new Indumentaria (4, "Mujer", "Camisa", 14000, "camisamujer003.webp")
const indumentaria5 = new Indumentaria (5, "Hombre", "Chaleco", 10000, "chaleco--1.webp")
const indumentaria6 = new Indumentaria (6, "Unisex", "Cinturon", 3400, "cinturon002.webp")

let estanteria = []

if (localStorage.getItem("estanteria")) {
    estanteria = JSON.parse(localStorage.getItem("estanteria"))
}else{
    estanteria.push(indumentaria1, indumentaria2, indumentaria3, indumentaria4, indumentaria5, indumentaria6)
    localStorage.setItem("estanteria", JSON.stringify(estanteria))
}