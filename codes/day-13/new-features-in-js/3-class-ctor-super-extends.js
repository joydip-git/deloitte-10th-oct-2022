const anilObject = {
    name: 'anil',
    id: 1,
    salary: 1000,
    print: function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}

/*
function person(name, id, salary) {
    this.name = name
    this.id = id
    this.salary = salary
    this.print = function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}

const sunilObject = new person('sunil', 2, 2000)
const maheshObject = new person('mahesh', 3, 3000)
*/

//new technique to write the constructor function 
class Person {
    constructor(name, id, salary) {
        //attributes (proprties)
        this.name = name
        this.id = id
        this.salary = salary
    }
    //method (functional property)
    print() {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}
const sunilObject = new Person('sunil', 2, 2000)
const maheshObject = new Person('mahesh', 3, 3000)

class Trainer extends Person {
    constructor(name, id, salary, subject) {
        //attributes (proprties)
        // this.name = name
        // this.id = id
        // this.salary = salary
        super(name, id, salary)
        this.subject = subject
    }
    //method (functional property)
    print() {
        // return this.name + ' ' + this.id + ' ' + this.salary + ' ' + this.subject
        return super.print() + ' ' + this.subject
    }
}