function printVariable(variable) {
    console.log(variable);
}

function greetUser(name, cb) {
    cb(`Hello ${name}`);
}

greetUser('Rajesh', printVariable);

function printName(firstName, lastName, callback) {
    callback(`${firstName} ${lastName}`);
}

// this is an anonomyous function is equivalent of a arrow function just that this is used in ES5
let printFullName = function (fullName) {
    console.log(fullName);
};

// this is an arrow function (anonomyous) just that this is used in ES6
let printFullNameArrow = fullName => {
    console.log(fullName);
};

printName('Rajesh', 'Sharma', printFullName);
printName('Rajesh', 'Sharma', function (fullName) {
    console.log(fullName);
});

let printNameArrow = name => {
    console.log(name);
};

let printHi = name => `Hi ${name}`;

console.log(printHi('Rajesh'));

function outerFunction(variable) {
    return variable2 => {
        console.log(variable);
        console.log(variable2);
    };
}

let of = outerFunction(1);
of(2);

let car = {
    make: 'Maruti',
    model: 'Baleno',
    isUsed: false,
    makeNoise() {
        console.log('Vroom');
    },
};

car.makeNoise();

const a = [1, 2, 3, 4, 5];
/* Array methods */

// forEach iterates through the array
a.forEach(number => {
    console.log(number);
});

//map modifies each element and returns a new array
const b = a.map(number => {
    return number * 3;
});

console.log(b);

// filter as the name suggests filters the elements. It should true or false for element.
// All the elements that returns true will be a part of the new array
const c = b.filter(number => {
    return number % 2 == 0;
});

console.log(c);

// every function checks if the test passed to is satisfied by all elements. if all the elements satisfy the test, it returns true else false
const isGreaterThanTen = b.every(number => {
    return number < 20;
});

console.log(isGreaterThanTen);

// some function checks if the test passed to is satisfied by at least one element. if at least one element satisfy the test, it returns true else false
const atleastANumberGreaterThanTen = b.some(number => {
    return number > 10;
});

// except forEach all the other array methods needs to return a value with the 'return' keyword for every element

console.log(atleastANumberGreaterThanTen);

// find function returns the first matching element that matches with the condition that has been passed to it
const isValueFound = b.find(number => {
    return number > 10;
});

console.log(isValueFound);

// reduce function converts array to a single value based on the operations passed to it.
// the callback function of reduce takes 2 parameters param1 --> accumulator, param2 --> the array item itself.
// reduce function another parameter that is the initial value of the accumulator
// prod variable is the accumulator in our case.
let arr = [1, 2, 3, 4, 5];

const reduceVal = arr.reduce((prod, number) => {
    return prod * number;
}, 1);
console.log(reduceVal);

const items = [
    { price: 100 },
    { price: 10 },
    { price: 200 },
    { price: 180 },
    { price: 80 },
    { price: 25 },
];

const totalPrice = items.reduce((totalPrice, item) => {
    return totalPrice + item.price;
}, 0);

console.log(totalPrice);

// includes function searches for an element in the array and returns true if the element is present else false
// includes doesn't take any callback value
const includesArray = [21, 33, 45, 62, 80];

const isPresent = includesArray.includes(50);

console.log(isPresent);

// string interpolation we use backticks and we can write any javascript code inside the dollar symbol like below
const interpolationTestFunction = arr => {
    const fact = arr.reduce((f, number) => {
        return f * number;
    }, 1);
    return fact;
};

const interpolatedValue = `${interpolationTestFunction(includesArray)} world`;

console.log(interpolatedValue);

// constructor functions
// this function creates an user object and returns the object
function createUser(name, age) {
    return { name: name, age: age };
}

const user1 = createUser('Rajesh', 25);
console.log(user1);

// there is a better way of doing this in javascript using the constructor function
// using this metod javascript knows the object that we are creating is of type User.
// constructor function by default creates a this variable and assigns it to an empty object and returns this variable at the end.
function User(name, age) {
    // this = {}
    (this.name = name), (this.age = age);
    // return this
}

const user2 = new User('Rajesh', 24);
console.log(user2);

// There is a class way of doing the same as above. it is much cleaner
// we can add methods easily to our user class
// the below code is more readable
class UserClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}

const user3 = new UserClass('Sharma', 25);
console.log(user3);
console.log(user3.getName());

// Always try to use defer tag with the scripts inside the head as the download starts immediately and the scripts executes in the end and in order

// Document Object
//console.log(document); // gives the entire html with <!DOCTYPE HTML> tag as well.
//console.log(document.documentElement); // give only the html content.

// for this to work we need to add defer tag to our script as the body is not available at the time of script execution
/*
const spanElement = document.createElement('span');
spanElement.innerText = 'Learning document object';
const divElement = document.createElement('div');
divElement.appendChild(spanElement);
document.body.appendChild(divElement); 
*/
