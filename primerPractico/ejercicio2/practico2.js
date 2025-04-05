let total = parseInt(prompt('Ingrese el total de la cuenta: '));
let propina10 = total * 1.10;
let propina15 = total * 1.15;
let propina20 = total * 1.20;

let servicio = prompt('cual fue la calidad del servicio? (malo, bueno, excelente): ');

if (servicio === 'malo') {
    alert(`el total de la cuenta con propina incluida es de:: ${propina10}`);
} else if (servicio === 'bueno') {
    alert(`el total de la cuenta con propina incluida es de: ${propina15}`);
} else if (servicio === 'excelente') {
    alert(`el total de la cuenta con propina incluida es de: ${propina20}`);
} else {
    alert('la calidad de servicio no es valida, pruebe con malo, bueno o excelente');
}