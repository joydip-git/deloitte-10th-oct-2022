//... here is known as rest operator.
//it is used to declare an array as an argument for a function which will be used to accept parameters when the function is called
//you can declare only one array with rest operator as function argument for a function
//if there are fixed arguments(like learnerName), they should all appear before rest operator array. i.e., the array declared with rest operator should be the last in the argument list
function calculateAverage(learnerName, details, ...marks) {

    let sum = 0
    for (let index = 0; index < marks.length; index++) {
        let mark = marks[index];
        sum += mark
    }
    return sum / marks.length
}

console.log(calculateAverage('isha', ['Bangalore', 'TRT'], 24))
console.log(calculateAverage('ruchi', ['Bangalore', 'TRT'], 23, 25))
console.log(calculateAverage('pavan', ['Hyd', 'TDR'], 22, 23, 25))
console.log(calculateAverage('ramesh', ['Hyd', 'TDR'], 22, 23, 24, 21))