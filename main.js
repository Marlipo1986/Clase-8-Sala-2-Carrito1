//Arreglo para un almacen
const productos = [
    { nombre: 'Producto 1', precio: 10000 },
    { nombre: 'Producto 2', precio: 15000 },
    { nombre: 'Producto 3', precio: 12000 },
    { nombre: 'Producto 4', precio: 7000 },
];

const carrito = []

function saludar(){
    alert("Bienvenidos al almacen de la Sala 2");
}

function mostrarListado() {
    console.log("Listado de productos:");
        productos.forEach((producto) => {
          console.log(`Titulo: ${producto.nombre}`);
          console.log(`Precio: $${producto.precio}`);
          console.log("-------------------------");
        });
    let nombreUsuario = prompt("Qué producto quiere comprar?")
    let productoFind = productos.find ( (producto) => {
        return nombreUsuario === producto.nombre
    } )
    carrito.push(productoFind);
    console.log(productoFind);
      }

saludar()
mostrarListado()

// for (let index= 0; index < productos.length; index++) {
//     if (productos [index].nombre === nombreproducto) {
//         producto = productos[index];
//     }}