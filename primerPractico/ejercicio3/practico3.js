let peso = parseFloat(prompt('ingrese su peso en kg: '))
let altura = parseFloat(prompt('ingrese su altura en metros: '))
let IMC = peso / (altura * altura)

if (IMC < 18.5){
    alert('Bajo peso')
}
else if (IMC >=18.5 && IMC < 24.9){
    alert('peso normal')
}
else if (IMC >= 25 && IMC <29.9){
    alert('sobrepeso')
} else {
    alert('obesidad');
}
