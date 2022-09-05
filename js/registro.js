// class Suplementos {
//     constructor(nombre, marca, categoria, precio) {
//         this.nombre = nombre;
//         this.marca = marca;
//         this.categoria = categoria;
//         this.precio = precio;
//     }
//     info() {
//         alert('Nombre: ' + this.nombre + '\nMarca: ' + this.marca + '\nCategoria: ' + this.genero + '\nPrecio: ' + this.precio);
//     }
// }
// let carrito = 0;
// let comprar = 0;

// suplemento1 = new Suplementos('Suplemento en polvo proteínas sabor double rich chocolate en pote de 930g', 'ENA Sport True Made', 'Proteina', 2.499);
// suplemento2 = new Suplementos('Creatina Monohidratada Pura 300g', 'Profit', 'Creatina', 1.399);
// suplemento3 = new Suplementos('Suplemento en polvo Platinum Whey Protein proteína sabor vanilla ice cream en sachet de 3kg', 'Star Nutrition', 'Proteina',
//     4.666);
// suplemento4 = new Suplementos('Creatine Blackskull 100% Pura.creatina Monohidrata', 'Blackskull', 'Creatina',
//     1.495);

// const proteinas = [];
// const creatinas = [];
// const productosTotales = [];

// proteinas.push(suplemento1, suplemento3);
// creatinas.push(suplemento2, suplemento4);
// productosTotales.push(suplemento1, suplemento2, suplemento3, suplemento4);

// function seleccionar(seleccion) {
//     while (seleccion != 0) {
//         seleccion = parseInt(prompt(`Bienvenido a la tienda de suplemento Star, seleccione un una categoria para buscar:\n1: Proteina\n2: Creatina\n\n3: Ver informacion de nuestros productos\n4: Ver informacion de nuestros productos, y ordenados por precio de menor a mayor\n0: Salir`));
//         switch (seleccion) {
//             case 1:
//                 seleccionProteinas();
//                 break;
//             case 2:
//                 seleccionCreatinas();
//                 break;
//             case 3:
//                 escribirLista();
//                 seleccion = 0;
//                 break;
//             case 4:
//                 ordenarPorPrecio();
//                 escribirLista();
//                 seleccion = 0;
//             case 0:
//                 break;
//             default:
//                 alert('No ingresó un valor válido');
//                 seleccionar();
//                 break;
//         }
//     }
// }

// function seleccionProteinas(productoElegido) {
//     while (productoElegido != 0) {
//         productoElegido = parseInt(prompt(`Estas son las proteinas que tenemos disponibles, elija para comprar:\n1-${suplemento1.nombre}. Precio: $${suplemento1.precio}\n2-${suplemento3.nombre}. Precio $${suplemento3.precio}\n\n3: Ver informacion de nuestros productos.\n4: Comprar\nCarrito: $${carrito}\n0: Volver`));
//         switch (productoElegido) {
//             case 1:
//                 carrito += suplemento1.precio;
//                 alert(suplemento1.nombre + ' ha sido agregado al carrito');
//                 break;
//             case 2:
//                 carrito += suplemento3.precio;
//                 alert(suplemento3.nombre + ' ha sido agregado al carrito');
//                 break;
//             case 3:
//                 proteinas.forEach((SUPLEMENTOS) => {
//                     SUPLEMENTOS.info();
//                 });
//                 break;
//             case 4:
//                 alert('Gracias por su compra, seleccione la opcion "salir" para ver el total gastado en la página');
//                 productoElegido = 0;
//                 seleccion = 0;
//                 comprarHTML();
//                 carrito = 0;
//                 break;
//             case 0:
//                 break;
//             default:
//                 alert('No ha ingresado un valor válido');
//                 break;
//         }
//     }
// }

// function seleccionCreatinas(productoElegido) {
//     while (productoElegido != 0) {
//         productoElegido = parseInt(prompt(`Estos son las creatinas que tenemos, elija para comprar:\n1-${suplemento2.nombre}. Precio: $${suplemento2.precio}\n2-${suplemento3.nombre}. Precio $${suplemento3.precio}\n\n3: Ver más info.\n4: Comprar\nCarrito: $${carrito}\n0: Volver`));
//         switch (productoElegido) {
//             case 1:
//                 carrito += suplemento2.precio;
//                 alert(suplemento2.nombre + ' ha sido agregado al carrito');
//                 break;
//             case 2:
//                 carrito += suplemento4.precio;
//                 alert(suplemento4.nombre + ' ha sido agregado al carrito');
//                 break;
//             case 3:
//                 creatinas.forEach((SUPLEMENTOS) => {
//                     SUPLEMENTOS.info();
//                 });
//                 break;
//             case 4:
//                 alert('Gracias por su compra, seleccione la opcion "salir" para ver el total gastado en la página');
//                 productoElegido = 0;
//                 seleccion = 0;
//                 comprarHTML();
//                 carrito = 0;
//                 break;
//             case 0:
//                 break;
//             default:
//                 alert('No ha ingresado un valor válido');
//                 break;
//         }
//     }
// }

// function escribirLista() {
//     productosTotales.forEach((Suplementos) => {
//         let contenedor = document.createElement('div');
//         contenedor.innerHTML = `<h3>Nombre del Suplemento:  ${Suplementos.nombre}</h3>
//                             <p>Categoria: ${Suplementos.categoria}</p>
//                             <p>Marca: ${Suplementos.marca}</p>
//                             <p>Precio: ${Suplementos.precio}</p>
//                             <br>`;
//         document.body.append(contenedor);
//     });
// }

// function comprarHTML() {
//     let contenedor = document.createElement('div');
//     contenedor.innerHTML = `<h2>El total de su compra fue de $${carrito}</h2>`;
//     document.body.append(contenedor);
// }

// function ordenarPorPrecio() {
//     productosTotales.sort(function (a, b) {
//         if (a.precio > b.precio) {
//             return 1;
//         }
//         if (a.precio < b.precio) {
//             return -1;
//         }
//         return 0;
//     });
// }
// seleccionar();

// -----------------------------------------------------------------------------------------------Ingreso
let pusuario = JSON.stringify(localStorage.getItem('usuario'));
let pemail = JSON.stringify(localStorage.getItem('email'));
let pcontraseña = JSON.stringify(localStorage.getItem('contraseña'));

function registro() {
    document.getElementById('ingreso').style.display = 'none';
    document.getElementById('registro').style.display = 'block';
}

function ingreso() {
    document.getElementById('ingreso').style.display = 'block'
    document.getElementById('registro').style.display = 'none';

}

var usuario = "",
    contraseña = "",
    email = "";

var elementoBotonRegistrar = document.getElementById('btnRegistrar');

elementoBotonRegistrar.addEventListener('click', registrarDato);

function registrarDato() {
    var ausuario = document.getElementById('NombreUsuario').value,
        aemail = document.getElementById('EmailUsuario').value,
        acontraseña = document.getElementById('ContraseñaUsuario').value;

    usuario = ausuario
    contraseña = acontraseña
    email = aemail

    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('contraseña', JSON.stringify(contraseña));
    Swal.fire({title:'Ha sido registrad@ exitosamente',
    background: 'rgba(0, 0, 0, 0.8)',
    confirmButtonColor: '000000',})
    document.getElementById('registro').style.display = 'none'
}
// ...
let iusuario = "";
let icontraseña = "";

let ielementoBotonRegistrar = document.getElementById('btnIngresar');

ielementoBotonRegistrar.addEventListener('click', iregistrarDato);

function iregistrarDato() {
    let iusuario = document.getElementById('iNombreUsuario').value;
    let icontraseña = document.getElementById('iContraseñaUsuario').value;
    if (iusuario == usuario && icontraseña == contraseña){
        Swal.fire({
            title:'Bienvenido!',
            titleText:'Que bueno volver a verte ' + iusuario,
            icon:'success',
            background: 'rgba(0, 0, 0, 0.8)',
            confirmButtonColor: '000000',})
        let contenedor = document.createElement('div');
        contenedor.innerHTML = `<div class="tituloBienvenida"><h3 class="h3">⭐​Hola  ${iusuario}</h3>
        Plan:<br>
        <br>
        Tiempo como socio:<br>
        <br>
        Productos Comprados:<br></div>`
        document.getElementById('ingreso').style.display = 'none';
        document.getElementById('contenedor').style.display = 'none';
        contenedor.className = 'TextoBienvenida'
        document.body.append(contenedor);
    }
}



