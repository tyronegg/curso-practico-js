const lista = [100, 200, 500, 4000000];

function esPar(numero) {
	if (numero % 2 === 0) return true;
	else return false;
}

function calcularMediaAritmetica(lista) {
	// let sumaLista = 0;
	// for (let i = 0; i < lista.length; i++ ) {
	//     sumaLista += lista[i];
	// }

	const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
		return valorAcumulado + nuevoElemento;
	});

	let promedio = sumaLista / lista.length;

	return promedio;
}

function calcularMediana(lista) {
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
