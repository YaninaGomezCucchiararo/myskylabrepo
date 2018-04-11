


function calculadora(a, b) {
	let results = [];
	let isAValid = !isNaN(a) && (typeof a !== 'string');
	let isBValid = !isNaN(b) && (typeof b !== 'string');
	
	if (isAValid && isBValid) {
		console.log('Voy a empezar con las 4 operaciones...');
		let suma = (a + b).toFixed(3);
		let resta = (a - b).toFixed(3);
		let division = (a / b).toFixed(3);
		let multiplicacion = (a * b).toFixed(3);
		results = [suma, resta, division, multiplicacion];
		console.log(a + ' + ' + b + ' = ' + results[0]);
		console.log(a + ' - ' + b + ' = ' + results[1]);
		console.log(a + ' / ' + b + ' = ' + results[2]);
		console.log(a + ' * ' + b + ' = ' + results[3]);
	} else if (isAValid && (a > 0)) {
		results.push(Math.sqrt(a));
		console.log('La raíz cuadrada de ' + a + ' es: ' + results[0].toFixed(3));
	} else {
		console.log('Por favor, introduzca al menos un valor válido.');
	}
}

let resultado = calculadora(3.666666, 6);