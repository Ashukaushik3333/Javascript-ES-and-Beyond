console.log("Hello");
/*-----------------------
alert("Hi harsh");
-------------------------*/


//Variables
var b='shreyans';
console.log(b);

var someNumber=13;
console.log(someNumber);

//Data Types
let n=13; //number
let string="aoinorne"; //string
let object={
	first:'Shreyans', 
	last:'Jain'
}; //object //dictionary in python
let truth=true; //boolean
let array=[1,2,3,4,5,6,7,8,9,10];//array
let ud; //undefined
let nothing=null; 

//To change the html code through java script
//Manipulate DOM with java script

document.getElementById('someText').innerHTML='Hello javascript';


//store data from users in java script
/*
var name=prompt('What is your name');

console.log("Your name is ",name);

document.getElementById("name").innerHTML=name;
*/


//Numbers in java script
var num1=5.7;
num1++
num1++
num1--;
console.log(num1)
	//add+, subtract-, multiply*, divide/, remainder%, increment++ and decrement-- is possible

//Increment/Decrement by any number

var a=10;
var b=100;
a+=10;
b-=50;
console.log("a is "+a+"\nb is "+b);

//Functions
	/*
		Functions can be called from two places
			1. from the code
			2. from the console 
	*/
function fun(){
	console.log("this is a function");
}

fun();

	/*------------------------------------------- 
		Function that take in a name 
		and says hello followed by the name

		For Example
		Name:	"Shreyans"
		Return:	"Hello Shreyans"
	---------------------------------------------*/
/*-----------------------------------------------------
function name() {
	return "Hello "+prompt("Enter your name");
	// body...
}

console.log(name());
-------------------------------------------------------*/
	//Function with arguments
	//adding two numbers

function addition(a,b) {
	// body...
	var result=a+b;
	console.log(result);
}

addition (10, " desperate times, desperate measures");

//Loops in java script

console.log("While loops");
var num=0;

while(num<10)
	console.log(num++);

console.log("For loops");
for (let i = 0; i < 100; i+=10) {
	console.log(i);
}

//Strings common methods

let fruit='banana';
let arrays='lenovo,apple,microsoft,etc';
let moreFruits='banana\napple';

console.log("fruit="+fruit);
console.log("arrays="+arrays);
console.log("moreFruits="+moreFruits);
	//new line is added
console.log("fruit.length="+fruit.length);
	//length is printed
console.log("fruit.indexOf('an')="+fruit.indexOf('an'));
	//find first occurrence
console.log("fruit.slice(2,6)="+fruit.slice(2,6));
	//substring
console.log("fruit.replace('ban','123')="+fruit.replace('ban','123'));
	//replace string
console.log("Fruit to upper case="+fruit.toUpperCase());
	//convert a string to UPPER CASE
console.log("Fruit to lower case="+fruit.toLowerCase());
	//CONVERT A STRING TO lower case
console.log("fruit Char at 3="+fruit.charAt(3));
	//to find character at particular position
console.log("split by a comma="+arrays.split(','));
	//split by a comma
console.log("split by a character="+arrays.split(''));
	//split by characters

//Arrays in JavaScript

let a1=[1,2,3,4,5];
let b2=new Array('6','7','8','9','10');
/*-----------------------------------------------------------------
alert(a1[1]); //access value at 1
a1[2]=100; //2nd value of a1 array changed
alert(a1[2]);
-------------------------------------------------------------------*/

for(let i=0;i<a1.length;i++){
	console.log(a1[i])
}

console.log("a1",a1);
//Array common methods
console.log('a1 to string=',a1.toString())
console.log(a1.join('*'));
	//join arrays with * in between
console.log(a1.pop(),"a1",a1)
	//removes last element
console.log(a1.push('130120'),"a1",a1);
	//adds element in end
a1[a1.length]='170304'
	//same as push
console.log("a1",a1)
console.log(a1.unshift('0'),"a1",a1);
	//adds element at the start
console.log(a1.reverse());
	//reverse the elements of array
console.log(a1.slice(1,4));
	//sub-array display
console.log(a1.sort())
	//sorting alphabeticaaly

let someNumbers=[564,65,464,65464,5,4,879,48,798,975,7987];
console.log(someNumbers.sort(function(a,b){return a-b}));	//sorting in ascending orrder
console.log(someNumbers.sort(function(a,b){return b-a}));	//sorting in descending order

let emptyArray=new Array()
console.log("emptyArray",emptyArray)
for (var i = 0; i <= 10; i++) {
	emptyArray.push(i)
}
console.log("emptyArray",emptyArray)

//Objects in JavaScript
//Dictionaries in python

let student={
	firstName:'Shreyans',
	lastName: 'Jain',
	age: 19,
	display:function() {
		// body...
		return "Name: "+this.firstName+" "+this.lastName+"\nAge:"+this.age;
	}
};

console.log(student)
console.log(student.age)
//console.log(student[firstName])//deprecated

student.age=20
console.log(student.age);
	//basic operatins can also be performed
console.log(student.display())

//Conditionals, Control Flow (if-else)
var x=10;
var y=20;
if (x<y) {
	console.log("x is greater than y")
}
else
console.log("y is greater than x")

var text;
switch(2){
	case 1:
		text="genious";
		break;
	case 2:
		text="billionaire";
		break;
	case 3:
		text="playboy";
		break;
	default:
		text="philanthropist";
		break;
}
console.log(text);

/*
-----------------------------------
|  Challenge 1 Your Age in Days   |
-----------------------------------
*/