let flights = [
	{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
	{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
	{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
	{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
	{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
	{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
	{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
	{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
	{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
	{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
];

let costSum = 0;
let totalFlights = flights.length;
let flightsWithScales = [];

//Bienvenida usuario:

function welcome (user){

	console.log("Hola "+ user + ", bienvenid@ a Skylab Airlines")

}
welcome("Yanina");

console.log("-------------------------------------------------------");

//Visualización de todos los vuelos disponibles:

for (let i in flights){
	let cost = flights[i].cost;
	let hasScale = flights[i].scale;
	let from = flights[i].from;
	let to = flights[i].to;
	let scaleText = (hasScale === true) ? 'tiene escala' : 'NO tiene escala';

	costSum += cost;

	if (hasScale) {
		flightsWithScales.push('\n') + flightsWithScales.push("Destino: ") + flightsWithScales.push(flights[i].to) + flightsWithScales.push(" Origen: ") + flightsWithScales.push(flights[i].from);
	}

	console.log("El vuelo con origen " + 
		from +  " y destino "+
		to + " cuesta " + 
		cost + " € y " +
		scaleText
	);
}

console.log("-------------------------------------------------------");

// Precio medio de los vuelos:

let avgCost = (costSum / totalFlights).toFixed(2);

console.log("El precio medio de los billetes es de "+ avgCost + "€");

console.log("-------------------------------------------------------");

// Los vuelos que efectuan escala:

console.log("Los vuelos que efectuan escala son los siguientes: " + flightsWithScales.join(' '));

console.log("-------------------------------------------------------");

//Mostrar los últimos 5 vuelos del día, sólo el destino:

console.log("Los últimos cinco vuelos del día, tienen destino a: " );

for ( var lastFiveFligths = 5 ; lastFiveFligths < flights.length; lastFiveFligths++)

	console.log("- " + flights[lastFiveFligths].to);