let word1 = 'Shreyans'
let word2 = 'Jain'

let fullname = word1 + ' ' + word2
console.log(fullname)

// ES Version - Template Literals

	fullname = `${word1} ${word2}`
	console.log(fullname)

	let num1 = 2
	let num2 = 3
	console.log(`${num1 + num2} ${word1 + ' ' + word2}`)



// ES Version - Destructuring Objects

	const personalInformation = {
		firstName	: 'Shreyans',
		lastName	: 'Jain',
		city 		: 'Jamshedpur',
		state 		: 'Jharkhand',
		zipCode 	: 831005
	}

	console.log(personalInformation)

	const {firstName, lastName} = personalInformation
	console.log(`First Name = ${firstName}
	Last Name = ${lastName}`)

	const {firstName: fn, lastName: ln} = personalInformation
	console.log(`First Name = ${fn}
	Last Name = ${ln}`)

// ES Version = Destructuring Arrays

	let [fName, lName, age] = ['Shreyans', 'Jain', 19]
	console.log(`${fName} ${lName} ${age}`)
	age = 20
	console.log(`${fName} ${lName} ${age}`)

// ES Version - Object Literal

	function addressMaker1(city, state) {
		// const address = {newCity: city, newState: state}
		const address = {city,state} // instead of wring {city: city, state: state}
		console.log(address)
	}

	addressMaker1('Jamshedpur', 'Jharkhand')

//ES Version - Object Literal Challenge

	function addressMaker2(address) {
		const {city, state} = address
		const newAddress = {
			city,
			state,
			country: 'India'
		}

		console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`)
	}

	addressMaker2({city: 'Jamshedpur', state: 'Jharkhand'})

//ES Version - For of Loop

	let incomes = [62000, 67000, 75000]
	let total = 0
	for (const income of incomes) {
		console.log(income)
		total += income
	}

	console.log(total)

	let string = 'Shreyans Jain is a great coder'

	for(const char of string) {
		console.log(char)
	}

// ES Version - for of loop challenge

	let money = [62000, 67000, 75000]

	for(let rupees of money) {
		rupees += 5000
		console.log(rupees)
	}

	console.log(money)

// ES Version - Spread Operator

	let example2 = [1,2,3,4,5,6]
	let example3 = [...example2]

	example3.push(true)

	console.log(`example 2 = ${example2}`)
	console.log(`example 3 = ${example3}`)


	let example4 = {
		firstname: 'Shreyans'
	}

	let example5 = {
		firstname: 'N/A',
		...example4
	}
	console.log(example5)

// ES Version - Rest Operator

	// ::Before
	function add(nums) {
		console.log(nums)
		console.log(arguments)
	}
	add(4,5,7,8,12)

	// ::After
	function adder(...nums) {
		console.log(nums)
	}
	adder(4,5,7,8,12)

// ES Version - Arrow Functions

	function addition(...nums) {
		let total = nums.reduce((x, y) => x+y)

		console.log(total)
	}

	addition(4,5,7,8,12)

// ES Version - Default Params

	function numAdd(numArray = []) {
		console.log(numArray)
		let total = 0
		
		numArray.forEach(element => {
			total += element
		})

		console.log(total)
	}

	numAdd()
	numAdd([1, 5, 3, 1])

// ES Version - includes()
	let numArray = [1,2,3,4,5]
	console.log(numArray.indexOf(0)) //old method
	console.log(numArray.indexOf(2)) //old method
	console.log(numArray.includes(0))
	console.log(numArray.includes(2))

// ES Version - Let & Const

	if (false) { //true
		var ex = 5
		let exe = 10
	}

	console.log(ex)
	// console.log(exe) error occurs


	const constant = 5 //read only properties
	// constant = 100 error occurs
	console.log(constant)

	// but, in case of array or objects you can modify them but not change the type
	const array = []
	array.push(5)
	array.push(10)
	array.push(15)
	console.log(array)

// ES Version - Import & Export check importExport.mjs file

	require
	const data = require('./example.js')
	console.log(data)

// ES Version - padStart() & padEnd()

	let example6 = 'Shreyans'

	console.log(example6.padStart(10, 5))
	console.log(example6.padEnd(10, 'abc'))

	//no second parameter = blank space
	console.log(example6.padStart(100))

// ES Version - Classes

	class Animal {
		constructor(type, legs){
			this.type = type
			this.legs = legs
		}

		makeNoise(sound = 'Loud Noise') {
			console.log(sound)
		}

		static return10() {
			return 10
		}

		get metaData() {
			return `Type : ${this.type}, Legs : ${this.legs}`
		}
	}

	let cat = new Animal()
	console.log(cat)

	let dog = new Animal('dog',4)
	console.log(dog)

	cat.legs = 4
	cat.type = 'Cat'
	console.log(cat)

	cat.makeNoise()
	dog.makeNoise('Bark')

	console.log(Animal.return10())

	console.log(dog.metaData)

// Inheritance in JavaScript

	class Lion extends Animal {
		constructor(type, legs, king) {
			super(type, legs)
			this.king = king
		}

		makeNoise(sound = 'Grrrrrrrrrrr') {
			console.log(sound)
		}
	}

	let simba = new Lion('lion', 4, true)
	let nala = new Lion('lion', 4, false)

	console.log(simba)
	console.log(nala)

	simba.makeNoise()
	nala.makeNoise('Attack')

	console.log(simba.metaData)
	console.log(nala.metaData)


// ES Version - Async & Await - refer index.html

// ES Version - SETS

	const set = new Set([1,2,2,3,3,3,4,4,4,4,5])
	console.log(set)
	console.log('Set size = ' + set.size)

	set.add(5)
	set.add(5).add(5).add(5).add(5)

	console.log(set)
	console.log('Set size = ' + set.size)

	console.log(set.has(5))
	console.log(set.delete(5))

	console.log(set)
	console.log('Set size = ' + set.size)

	set.clear()
	console.log(set)
	console.log('Set size = ' + set.size)
