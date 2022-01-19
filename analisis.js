// Helpers
function esPar(numero) {
	return numero % 2 === 0;
}

function calcularMediaAritmetica(lista) {
	const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
		return valorAcumulado + nuevoElemento;
	});

	let promedio = sumaLista / lista.length;

	return promedio;
}

// Calculadora de mediana
function medianaSalarios(lista) {
	const mitadLista = parseInt(lista.length / 2);
	let mediana;
	const listaOrdenada = lista.sort((a, b) => a - b);
	if (esPar(lista.length)) {
		const elemento1 = listaOrdenada[mitadLista - 1];
		const elemento2 = listaOrdenada[mitadLista];

		mediana = calcularMediaAritmetica([elemento1, elemento2]);
	} else {
		mediana = listaOrdenada[mitadLista];
	}

	return mediana;
}

const salarios = colombia.map((personita) => personita.salary);

const medianaGeneral = medianaSalarios(salarios);

// Mediana del top 10%

const salariosSorted = salarios.sort((a, b) => a - b);

const spliceStart = (salariosSorted.length * (100 - 10)) / 100;
const spliceCount = salariosSorted.length - spliceStart;

const salariosTop10 = salariosSorted.splice(spliceStart, spliceCount);

const medianaTop10 = medianaSalarios(salariosTop10);

console.log(medianaGeneral, medianaTop10);
