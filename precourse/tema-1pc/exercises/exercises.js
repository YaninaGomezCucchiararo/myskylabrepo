//                           S T R I N G S

//a) Puedes contar cuantas letras tiene tu nombre?
let myName= "Yanina";
console.log("My name has " + myName.length+" letters");

//b) Añade tu apellido e indica en que posición se encuentra
let myFirstLastName="Yanina Gómez";
console.log("My first last name starts on position "+myFirstLastName.indexOf("Gómez")); 

//c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.
console.log("My name is "+ myFirstLastName.substr(0,6));

//d) Ahora, solo tu apellido.
console.log("My last name is "+ myFirstLastName.substr(7));

//d1) Iguala el resultado a una variable nueva e imprímela por pantalla.
let onlyLastName= myFirstLastName.substr(7);
console.log(myFirstLastName + ", "+onlyLastName);

//e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.
console.log("Hello,Ms "+onlyLastName);
//f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.

console.log("My last name is "+onlyLastName.toUpperCase());

//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.
let messageName=onlyLastName+" is a typical surname in Spain";
console.log(messageName);

//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?
let firstLetters= myFirstLastName.charAt(0)+ " and "+ myFirstLastName.charAt(7);
console.log("The first letter of my name and my last name are "+ firstLetters);

//                           A R R A Y S

//a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"

let myName1= 'Yanina Gómez';
let myNameArray= myName1.split("").join("/");
console.log(myNameArray);

//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"
onlyLastName=myName1.slice(6,12).split("").join("|");
console.log(onlyLastName);

//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)
onlyMyName= myName.slice(0,6);
for(i=0; i< onlyMyName.length; i++){
	console.log(i+"º "+onlyMyName[i] );
}

//d)Como en el ejercicio anterior, pero seleccionando tu apellido

lastName= myName1.slice(7,12);
for(i=0; i<lastName.length;i++){
	console.log(i+"º "+lastName[i]);
}

//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings
let myInitials= myName1.charAt(0) +"."+myName1.charAt(7);
console.log(myInitials);

//f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.
let mySelector= myName1.split(" ");
mySelector.push(29);
console.log("My name is "+mySelector[0]+" and i'm "+mySelector[2]+" years old");

//g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.

let myCityAdd= mySelector;
myCityAdd.push("Barcelona");
console.log(myCityAdd);

//h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.
let myCityDelete=myCityAdd;
myCityDelete.pop();
console.log(myCityDelete);

//j) Ahora, elimina el nombre y asegura los cambios
let deleteName=myCityDelete;
deleteName.shift();
console.log(deleteName);

//k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición? 
let addName= deleteName;
addName.splice(0,0,"Yanina");
console.log(addName);

//l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

let numbers=[0,1,2,3,4,5,6,7,8,9,10];

let result= numbers.map(function(num){
	return 2* num
});
console.log(result.toString()); // lo devuelvo en formato string

//l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.

function multiplyArrayBy(value) {

let result= numbers.map(function(num){
	return value * num;
});
return result;
}
console.log(multiplyArrayBy(3).toString());

// m) Podrías mostrarlos en el orden inverso?

numbers.reverse();
console.log(numbers.toString());

//n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?

let arrayName = myName1.split("").sort();
console.log(arrayName);
let count = 0;

for(i=1; i< arrayName.length; i++){
	arrayName[i]= arrayName[i].toLowerCase();
	count++;
	if(arrayName[i] !== arrayName[i+1]){
	   
	  console.log("la letra "+ arrayName[i] + " la encontramos "+ count + " veces");
	  count= 0;
	}
}


//n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras

//let arrayNameN1 = myName1.split("");

//for ( i = 0; i < arrayNameN1.length; i++){
//	arrayNameN1[i] = arrayNameN1[i].toLowerCase();
	
//	if(arrayNameN1[i] !== arrayNameN1[i+1]){
//		console.log(arrayNameN1[i])
//	}else{

///	}
//}


//						N U M B E R S

//a) Que hora es? Declara la hora como número y devuelvela como String

let currentHour= 10.45;
console.log("Its "+ currentHour.toString() + " of morning");

//b) Nono, que hora exactamente? Dime la hora sin minutos 
console.log("Its arround "+ currentHour.toPrecision(2) + " of morning");

//c) Ahora, declara tu hora y muéstrala redondeada.<------------------------*****

let arrayCurrentHour = currentHour.toString().split(".");
console.log(arrayCurrentHour);


let x= 10;
let y= 45;

let percentageMinuts = y / 60;
console.log(percentageMinuts);


let hour = x;
let minuts = y;


if (minuts < 31){
	console.log(hour - 1);

}else{
	console.log(hour + 1);
}

//d) Hagamos una calculadora. Primero, la suma.

x = 7;
y = 3;

let sum = x + y;
console.log(7 + 3);

//d4) Ahora, intenta multiplicar un número por una string, que devuelve?

let mult = "hola" * 10;

console.log(mult);
















