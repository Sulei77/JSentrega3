class Indumentaria {
    constructor(id, ropa, titulo, precio, imagen) {
        this.id = id,
        this.ropa = ropa,
        this.titulo = titulo,
        this.precio = precio,
        this.imagen = imagen
    }
    mostrarData() {
        console.log(`El titulo es ${this.titulo}, la ropa es ${this.ropa} y su precio es ${this.precio}`)
    }
}
const libro1 = new Indumentaria (1,"Unisex","Billetera Cuero",5000,"billetera001.webp")
const libro2 = new Indumentaria(2, "Unisex","Billetera",5000,"billetera002.webp")
const libro3 = new Indumentaria (3, "Mujer", "Buzo", 15000,"buzomujer001.webp")
const libro4 = new Indumentaria (4, "Mujer", "Camisa", 14000,"camisamujer003.webp")
const libro5 = new Indumentaria (5, "Hombre", "Chaleco", 10000, "chaleco--1.webp")
const libro6 = new Indumentaria (6, "Unisex", "Cinturon", 3400, "cinturon002.webp")


let guardarropas = []

if (localStorage.getItem("guardarropas")) {
    guardarropas = JSON.parse(localStorage.getItem("guardarropas"))
}else{
    guardarropas.push(libro1, libro2, libro3, libro4, libro5, libro6)
    localStorage.setItem("guardarropas", JSON.stringify(guardarropas))
}