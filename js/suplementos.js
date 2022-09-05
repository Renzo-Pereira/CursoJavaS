let productos = document.querySelector('.products');
let carritoItem = document.querySelector('.card-items');
let precioTotal = document.querySelector('.price-total')
let cantidadProductos = document.querySelector('.count-product');


let Carrito = [];
let totalCard = 0;
let numeroProductos = 0;



function loadEventListenrs() {
    productos.addEventListener('click', añadirProductos);

    carritoItem.addEventListener('click', deleteProduct);
}
loadEventListenrs();
function añadirProductos(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement;
        readTheContent(selectProduct);
    }
}

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        Carrito.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.cantidad);
                totalCard = totalCard - priceReduce;
                totalCard = totalCard.toFixed(3);
            }
        });
        Carrito = Carrito.filter(producto => producto.id !== deleteId);

        numeroProductos--;
    }
    if (Carrito.length === 0) {
        precioTotal.innerHTML = 0;
        cantidadProductos.innerHTML = 0;
    }
    loadHtml();
}

function readTheContent(producto) {
    const infoProduct = {
        imagen: producto.querySelector('div img').src,
        titulo: producto.querySelector('.title').textContent,
        precio: producto.querySelector('div p span').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.precio);
    totalCard = totalCard.toFixed(3);

    const existe = Carrito.some(producto => producto.id === infoProduct.id);
    if (existe) {
        const pro = Carrito.map(producto => {
            if (producto.id === infoProduct.id) {
                producto.cantidad++;
                return producto;
            } else {
                return producto
            }
        });
        Carrito = [...pro];
    } else {
        Carrito = [...Carrito, infoProduct]
        numeroProductos++;
    }
    loadHtml();
}

function loadHtml() {
    clearHtml();
    Carrito.forEach(producto => {
        const {
            imagen,
            titulo,
            precio,
            cantidad,
            id
        } = producto;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${imagen}" alt="">
            <div class="item-content">
                <h5>${titulo}</h5>
                <h5 class="cart-price">${precio}$</h5>
                <h6>Cantidad: ${cantidad}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        carritoItem.appendChild(row);

        precioTotal.innerHTML = totalCard;

        cantidadProductos.innerHTML = numeroProductos;
    });
    numeroProductos > 3 && Swal.fire({titleText: 'Talvez te interesa un precio por mayor... Contactanos!', background: 'rgba(0, 0, 0, 1)', confirmButtonColor: '000000',})
}

function clearHtml() {
    carritoItem.innerHTML = '';
}