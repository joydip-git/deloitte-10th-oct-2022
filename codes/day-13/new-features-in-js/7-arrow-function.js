/*
//declaration
function add(a, b) {
    return a + b
}
//expression
const subtract = function (a, b) {
    return a - b
}

//arrow function (ES6)
const multiply = (a, b) => {
    return a * b
}
//one-liner
const divide = (a, b) => a / b

const printInfo = () => console.log('hello')
*/
const val = 100
function outer() {

    this.outerData = 10
    console.log(this)
    // const refernce = this

    // const inner = function () {
    //     console.log(this)
    //     this.innerData = 20
    //     // console.log(this.outerData)
    //     // console.log(this.innerData)
    //     //const result = this.outerData + this.innerData

    //     //any inner function has access to the local variables of all outer functions
    //     const result = refernce.outerData + this.innerData + val
    //     console.log(result)
    // }

    //writing the inner function using arrow syntax will gurantee that inner function will be bound to the same object to which the outer function also bound
    const inner = () => {
        console.log(this)
        this.innerData = 20
        // console.log(this.outerData)
        // console.log(this.innerData)
        const result = this.outerData + this.innerData
        console.log(result)
    }
    inner()
}
new outer()

//1. function called with object reference (anilObject.print()) => this keyword refers to that object reference (such as, print() function's 'this' property refers to 'anilObject')

//2. function called with new keyword (new person('anil',1,1000)) => this property of that function will refer to the newly created object using new keyword

//3. function called without any preceding object reference or new keyword (outer()) => this property refers to a default object (window object in case of web browser or DOM and Global object in case of Node JS)

/*
const anilObject = {
    name: 'anil',
    id: 1,
    salary: 1000,
    print: function () {
        console.log(this)
        //this.name = 'My Window'
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}
*/
/*
//const info = anilObject.print()
let printFnReference = anilObject.print
printFnReference = printFnReference.bind(anilObject)
/**
 * printFnReference->function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
 */
/*
const info = printFnReference()
console.log(info)
*/