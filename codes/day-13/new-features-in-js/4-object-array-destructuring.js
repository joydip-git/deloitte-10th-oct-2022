const anilObject = {
    name: 'anil',
    id: 1,
    salary: 1000,
    print: function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}

// const nameValue = anilObject.name
// const idValue = anilObject.id
// const salaryValue = anilObject.salary

// const { name: nameValue, id: idValue, salary: salaryValue } = anilObject

// console.log(nameValue, idValue, salaryValue)

//const { name: name, id: id } = anilObject
const { name, id } = anilObject
console.log(name, id)

const numbers = [1, 2, 3, 4]
const [, a, , b] = numbers
console.log(a, b)