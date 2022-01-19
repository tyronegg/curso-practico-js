// let precioOriginal = 120;
// let descuento = 18;

// const coupons = [
// 	'JuanDC_es_Batman',
// 	'pero_no_le_digas_a_nadie',
// 	'es_un_secreto',
// ];

const coupons = [
	{
		name: 'JuanDC_es_Batman',
		discount: 15,
	},
	{
		name: 'pero_no_le_digas_a_nadie',
		discount: 30,
	},
	{
		name: 'es_un_secreto',
		discount: 25,
	},
];

function calcularPrecioConDescuento(precio, descuento) {
	let porcentanjePrecioConDescuento = 100 - descuento;
	let precioConDescuento = (precio * porcentanjePrecioConDescuento) / 100;

	return precioConDescuento;
}

function onClickButtonPriceDiscount() {
	let inputPrice = document.getElementById('InputPrice');
	let priceValue = inputPrice.value;
	// let inputDiscount = document.getElementById('InputDiscount');
	// let discountValue = inputDiscount.value;
	const inputCoupon = document.getElementById('InputCoupon');
	const couponValue = inputCoupon.value;

	let descuento = 0;

	let coupon = coupons.find((coupon) => coupon.name === couponValue);

	if (!coupon) {
		alert('El cupón "' + couponValue + '" no es válido');
	} else {
		descuento = coupon.discount;
	}

	// switch (couponValue) {
	// 	case coupons[0]:
	// 		descuento = 15;
	// 		break;
	// 	case coupons[1]:
	// 		descuento = 30;
	// 		break;
	// 	case coupons[2]:
	// 		descuento = 25;
	// 		break;
	// 	default:
	// 		descuento = 0;
	// 		break;
	// }

	let precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
	// let precioConDescuento = calcularPrecioConDescuento(
	// 	priceValue,
	// 	discountValue
	// );

	let parrafo = document.getElementById('ResultP');
	parrafo.innerText = 'El precio con descuento son: $' + precioConDescuento;

	// if (!coupons.includes(couponValue)) {
	// 	alert('El cupón "' + couponValue + '" no es válido');
	// }
}

//Imprimir cupones
let parrafoCupones = document.getElementById('Cupones');
let cadena = '';
for (let coupon of coupons) {
	cadena = cadena + coupon.name + '\n';
}

parrafoCupones.innerText = cadena;
// let porcentanjePrecioConDescuento = 100 - descuento;
// let precioConDescuento = (precioOriginal * porcentanjePrecioConDescuento) / 100;

// console.log({
// 	precioOriginal,
// 	descuento,
// 	porcentanjePrecioConDescuento,
// 	precioConDescuento,
// });
