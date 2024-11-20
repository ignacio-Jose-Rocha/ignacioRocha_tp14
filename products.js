let electrodomesticos = ["Refrigerador", "Licuadora", "Microondas", "Televisor", "Lavadora", "Horno"];

console.log("Producto 1:", electrodomesticos[0]);
console.log("Producto 4:", electrodomesticos[3]); 

let primerElemento = electrodomesticos.shift();
electrodomesticos.push(primerElemento);
console.log("Array después de mover el primer elemento al final:", electrodomesticos);

electrodomesticos.push("Aire acondicionado", "Cafetera");
console.log("Array después de agregar dos productos:", electrodomesticos);

console.log("Cantidad de elementos en el array:", electrodomesticos.length);

let productoBuscado = "Televisor";
if (electrodomesticos.includes(productoBuscado)) {
  console.log("Producto encontrado:", productoBuscado);
} else {
  console.log("El producto buscado no existe.");
}

let cadenaProductos = electrodomesticos.join(" ");
console.log("Cadena de productos:", cadenaProductos);
console.log("Cantidad de caracteres en la cadena de texto:", cadenaProductos.length);
let cadenaModificada = cadenaProductos.replace("Horno", "Estufa");
console.log("Cadena modificada:", cadenaModificada);
let nuevoArray = cadenaModificada.split(" ");
console.log("Nuevo array generado a partir de la cadena de texto:", nuevoArray);
