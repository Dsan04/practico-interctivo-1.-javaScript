let edad = parseInt(prompt('Ingrese su edad: '));
let precio13 = 1000;
let precio17 = 1500;
let precioMayor = 2000;
let free = 0;
let precio;

if (edad < 5 || edad > 80) {
    precio = free;
    alert(`su edad es ${edad} y tiene que pagar ${precio}`)
} else if (edad >= 13 && edad <= 17) {
    precio = precio17;
    alert(`su edad es ${edad} y tiene que pagar ${precio}`)
} else if (edad >= 18) {
    precio = precioMayor;
    alert(`su edad es ${edad} y tiene que pagar ${precio}`)
} else {
    precio = precio13;
    alert(`su edad es ${edad} y tiene que pagar ${precio}`)
}