// Código del cuadrado
console.group('Cuadrados');
//const ladoCuadrado = 5;
//console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

function perimetroCuadrado(lado) {
	return lado * 4;
}

const _perimetroCuadrado = (lado) => lado * 4;

//console.log('El perímetro del cuadrado es: ' + perimetroCuadrado + 'cm');

function areaCuadrado(lado) {
	return lado * lado;
}

const _areaCuadrado = (lado) => lado * lado;
//console.log('El área del cuadrado es: ' + areaCuadrado + 'cm^2');

console.groupEnd();

// Código del triángulo
console.group('Triángulos');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

// console.log(
// 	'Los lados del triángulo miden: ' +
// 		ladoTriangulo1 +
// 		'cm, ' +
// 		ladoTriangulo2 +
// 		'cm, ' +
// 		baseTriangulo +
// 		'cm'
// );

//console.log('La altura del triángulo es de: ' + alturaTriangulo + 'cm');

function perimetroTriangulo(lado1, lado2, base) {
	return lado1 + lado2 + base;
}

const _perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

//console.log('El perímetro del triángulo es: ' + perimetroTriangulo + 'cm');

function areaTriangulo(base, altura) {
	return (base * altura) / 2;
}

const _areaTriangulo = (base, altura) => (base * altura) / 2;

//console.log('El área del triángulo es: ' + areaTriangulo + 'cm^2');

const _validarTrianguloIsssceles = (lado1, lado2, base) =>
	lado1 === lado2 && lado1 != base;

const _alturaTrianguloIsssceles = (lado, base) =>
	Math.sqrt(lado ** 2 - base ** 2 / 4);

function alturaTrianguloIsssceles() {
	let inputLado1 = document.getElementById('inputIsosLado1');
	let valueLado1 = inputLado1.value;
	let inputLado2 = document.getElementById('inputIsosLado2');
	let valueLado2 = inputLado2.value;
	let inputBase = document.getElementById('inputIsosBase');
	let valueBase = inputBase.value;

	if (_validarTrianguloIsssceles(valueLado1, valueLado2, valueBase)) {
		let altura = _alturaTrianguloIsssceles(valueLado1, valueBase);
		alert(altura);
	} else {
		alert('No es un triángulo Isósceles');
	}
}

console.groupEnd();

// Código del círculo
console.group('Círculos');
//Radio
//const radioCirculo = 4;
//console.log('El radio del círculo es: ' + radioCirculo + 'cm');

//Diámetro
function diametroCirculo(radio) {
	return radio * 2;
}
const _diametroCirculo = (radio) => radio * 2;

//console.log('El diámetro del círculo es: ' + diametroCirculo + 'cm');

//PI
const PI = Math.PI;
//console.log('PI es: ' + PI + 'cm');

//Circunferencia
function perimetroCirculo(radio) {
	const diametro = diametroCirculo(radio);
	return diametro * PI;
}

const _perimetroCirculo = (radio) => {
	const diametro = diametroCirculo(radio);
	return diametro * PI;
};

const _perimetroCirculo2 = (radio) => diametroCirculo(radio) * PI;

//console.log('El perímetro del círculo es: ' + perimetroCirculo + 'cm');

//Area
function areaCirculo(radio) {
	return radio ** 2 * PI;
}

const _areaCirculo = (radio) => radio ** 2 * PI;

//console.log('El área del círculo es: ' + areaCirculo + 'cm^2');

console.groupEnd();

//Aquí interactuamos con HTML
function calcularPerimetroCuadrado() {
	let input = document.getElementById('inputCuadrado');
	let value = input.value;
	let perimetro = perimetroCuadrado(value);
	alert(perimetro);
}

function calcularAreaCuadrado() {
	let input = document.getElementById('inputCuadrado');
	let value = input.value;
	let area = areaCuadrado(value);
	alert(area);
}
