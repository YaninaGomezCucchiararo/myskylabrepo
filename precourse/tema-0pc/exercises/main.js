var name= "Yanina";
console.log(name);

var age=29;
console.log(age);

var info=["Yanina","Gómez",29];
console.log(info);

var data={name:"Yanina", age:"29"};
console.log(data);

for (var i=0; i<info.length; i++){
	console.log(info[i])
}

var a= 25;
var b= 12;
if (a<b){
	console.log(b);
}else if(a===b){
	console.log("The numbers are equal");
}else{
	console.log(a);
} 

var numbers= [1,2,3,4,5];
for(var i=0;i<numbers.length;i++){
 	if(i===2){
 		numbers[2]= "We are in the middle of loop"	
	}
 	console.log(numbers[i]);
}

var myName= "Yanina";
var myAge= 29;
if(myName!=="Yanina"||myAge!==29){
	console.log("this is not you!");
}else{
	console.log("Hi!! Glad to see you again!");
}


var myArray = ["Vanesa", 27, "Ezequiel", 31, "Yanina", 29, "Federico", 31, "Nil", 2];

for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] === "Yanina" || myArray[i] === 29) {
    console.log('We found your data! --> ' + myArray[i]);
  } else {
    console.log(myArray[i])
  }
}