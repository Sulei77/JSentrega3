let btn = document.getElementById("guardarIndumentariaBtn")

btn.addEventListener('click', () => {

    Toastify({

        text: "Producto guardado",
        duration: 3000
    
    }).showToast();

})