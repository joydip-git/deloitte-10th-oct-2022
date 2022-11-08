// console.log(x)//undefined
// let x = 10
// console.log(x)//10

// sayHello()
// function sayHello() {
//     console.log('hello')
// }

// sayHi()
// const sayHi = () => {
//     console.log('hi')
// }
/**
 * hello
 * hi
 *
 */
// function fn1() {
//     var a = 10
//     var fn2 = function () {
//         var b = 10
//         var res = a + b
//         console.log(res)
//     }
//     fn2()
// }

// fn1()

//text() and html()
//$('p').text('para')
//$('p').html(`<b>para</b>`)

localStorage.setItem('k1', 'value1')

const obj = {
    name: 'anil',
    id: 1
}

localStorage.setItem('objData', JSON.stringify(obj))

$(function () {
    $('#btnLoad').on('click', function () {
        localStorage.getItem('objData')
    })
})


