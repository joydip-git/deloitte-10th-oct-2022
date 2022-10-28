const anilObject = {
    name: 'anil',
    id: 1,
    salary: 1000,
    print: function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}

/*
//how to access properties from an object: using dot operator (.)and indexer ([])
console.log(anilObject.name)
console.log(anilObject['salary'])

//how to add additional properties in an existing object: using dot operator (.)and indexer ([])

anilObject.sayHello = function () {
    console.log('hello from anil')
}
anilObject['location'] = 'Hyderabad'

console.log(anilObject)
*/


//const copy = {}
/*
//1. copy properties and corresponding values from one object to another using for...in loop
for (const propName in anilObject) {
    const propValue = anilObject[propName]
    copy[propName] = propValue
}


//2. copy properties and corresponding values from one object to another using Object.assign() method
Object.assign(copy, anilObject)
*/

//3. copy properties and corresponding values from one object to another using ES6 new feature 'spread operator (...)'

const copy = { ...anilObject }
console.log(anilObject)
console.log(copy)
/*
for (const propName in anilObject) {
    const propValue = anilObject[propName]
    console.log('anilObject[' + propName + ']:' + propValue)
}

const numbers = [10, 20, 30, 40]
for (const index in numbers) {
    const value = numbers[index]
    console.log('numbers[' + index + ']:' + value)
}
*/

const numbers = [10, 20, 30, 40]
const copyOfNumbers = [...numbers]

console.log(numbers)
console.log(copyOfNumbers)

