const animals = [
	{ id: 1, name: "Luna", species: "cat", age: 3, adopted: false },
	{ id: 2, name: "Biscuit", species: "dog", age: 7, adopted: true },
	{ id: 3, name: "Pepper", species: "cat", age: 1, adopted: true },
	{ id: 4, name: "Moose", species: "dog", age: 5, adopted: false },
	{ id: 5, name: "Charly", species: "dog", age: 4, adopted: false },
	{ id: 6, name: "Bill", species: "cat", age: 0.5, adopted: true },
	{ id: 7, name: "Chompers", species: "rabbit", age: 0.5, adopted: false },
	{ id: 8, name: "Beowulf", species: "dog", age: 7, adopted: true },
];

// Instructions for every task are in README.md.
// Write your code below each heading,
// Be sure to add your own comments to the code you are writing

// ---------------------------------------------------------------------------
// Task 1 — Animal names with .map()
// ---------------------------------------------------------------------------
// Create and log an array containing every animal's name.
const animalNames = animals.map(function (animal) {
    return animal.name;
});
console.log("animal names:",animalNames);

// ---------------------------------------------------------------------------
// Task 2 — Log each animal with .forEach()
// ---------------------------------------------------------------------------
// list every animal once and show its name and species in the console.
animals.forEach(function (animal) {
	console.log("Name: " + animal.name + " Species: " + animal.species);
});

// ---------------------------------------------------------------------------
// Task 3 — Log each animal again with for...of
// ---------------------------------------------------------------------------
// Show each animals age and adoption status using a for loop.
for (const animal of animals) {
	console.log("Age: " + animal.age + " Adopted: " + animal.adopted);
}

// ---------------------------------------------------------------------------
// Task 4 — Adopted and available animals with .filter()
// ---------------------------------------------------------------------------
// Create 2 arrays and log them with .fliter() that shows adopted animals and avalable animals 
const adoptedAnimals = animals.filter(function (animal) {
	return animal.adopted;
});
const availableAnimals = animals.filter(function (animal) {
	return !animal.adopted;
});
console.log("adoptedAnimals:", adoptedAnimals);
console.log("availableAnimals",availableAnimals);
// ---------------------------------------------------------------------------
// Task 5 — Available dogs with method chaining
// ---------------------------------------------------------------------------
// Creating an arry of just avaliable Dogs with .filter() and .map()
const availableDogs = animals
	.filter(function (animal) {
		return animal.species === "dog" && !animal.adopted;
	})
	.map(function (animal) {
		return animal.name;
	});
console.log("Available dogs: ", availableDogs)
// ---------------------------------------------------------------------------
// Task 6 — Average age with .reduce()
// ---------------------------------------------------------------------------
// Create a variable that stores the total age of all animals, then calculate the average age.
const totalAge = animals.reduce(function (sum, animal){
	return sum + animal.age;
}, 0);
const averageAge = totalAge / animals.length 
console.log("Average age:", averageAge)
// Task 7 — Write isCat, isAdopted, and getName
// ---------------------------------------------------------------------------

function isCat(animal) {
	return animal.species === "cat";
}

function isAdopted(animal) {
	return animal.adopted === true;
}

function getName(animal) {
	return animal.name;
}

// Task 8 — Adopted cats, using your own functions as callbacks
// ---------------------------------------------------------------------------
// Use previous functions as callbacks to .filter() and .map() and log all adopted cats 
const adoptedCats = animals
	.filter(isCat)
	.filter(isAdopted)
	.map(getName);
console.log("Adopted cats: ", adoptedCats)

// ---------------------------------------------------------------------------
// Task 9 — Write makeSpeciesChecker (a closure)
// ---------------------------------------------------------------------------
// Remember the requested species so the returned function can check animals against it.
function makeSpeciesChecker(species) {
	return function (animal) {
		return animal.species === species;
	};
}

// Task 10 — Build isDog and isRabbit, then log their names
// ---------------------------------------------------------------------------
// Each checker remembers its species so it can filter the matching animals.
const isDog = makeSpeciesChecker("dog");
const isRabbit = makeSpeciesChecker("rabbit");

console.log(animals.filter(isDog).map(getName));
console.log(animals.filter(isRabbit).map(getName));
