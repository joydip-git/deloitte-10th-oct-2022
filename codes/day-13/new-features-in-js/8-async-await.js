async function divide(a, b) {
    const result = a / b
    if (result === Infinity) {
        throw new Error('denominator should not be zero')
    }
    return result
}

// divide(10, 2)
//     .then(
//         function (data) {
//             console.log(data)
//         },
//         function (e) {
//             console.log(e.message)
//         }
//     )
async function call() {
    try {
        //await wait for the Promise to be resolved and blocks the following code
        const data = await divide(10, 2)
        console.log(data)
        console.log('done')
    } catch (error) {
        console.log(error.message)
    }
}
call()
console.log("hello,....")