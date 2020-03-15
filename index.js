const pets = [{
        name: "Max",
        type: "dog",
        bornOn: 2018
    },
    {
        name: "Angel",
        type: "cat",
        bornOn: 2015
    },
    {
        name: "Jasper",
        type: "dog",
        bornOn: 2016
    }
];
//Convert the function to arrow functions
const getAge = (pet) => {
    new Date().getFullYear() - pet.bornOn;
}
//Replace the for loops with array functions
const petsWithAge = [];
pets.forEach(function (pet) {
    petsWithAge.push(pet);
});
console.log(petsWithAge);

const dogs = [];
pets.forEach(function (pet) {
    if (pet.type === "dog") {
        dogs.push(pet);
    }
});
console.log(dogs);

const jasper;
pets.forEach(function (pet) {
    if (pet.name === "Jasper") {
        jasper = pet;
    }
});
console.log("Jasper is " + jasper.age + " years old");