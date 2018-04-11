var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};

//a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)

for(name in avenger){
	console.log(name);
}

function list (){
	console.log(avenger);
}

list();

//b) Ahora, crea una función que liste solo los valores de las propiedades.

//c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.

avenger.class = "XI";
console.log(avenger);

//d) Ahora, elimina la propiedad ID y asegura los cambios.

delete avenger.id
console.log(avenger);

//e) Añade una nueva propiedad, por ejemplo city y dale un valor.

avenger.city= "Barcelona";

//e1) Asegura los cambios solo imprimiendo esa nueva propiedad.

console.log(avenger.city)

//f) Lista el numero de propiedades que contiene el objeto.  
console.log(avenger.length);
