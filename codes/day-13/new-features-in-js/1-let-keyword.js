function testScope() {
    //var x = 10
    //no issue with y being declared repeatedly in the same scope, since the first y will be hoisted
    console.log(y)//undefined
    var y = 11
    var y = 21
    //let keyword is used to declare scoped variable
    //in the same scope you can't declare another variable with the same name using let keyword
    //the variable declared with let keyword can't be used before declaration
    //console.log(x)
    let x = 10
    //let x = 20
    console.log(x) //10
    for (let index = 0; index < 1; index++) {
        //var x = 20
        let x = 20
        console.log(x)//20
    }
    console.log(x)//20
}
function testScopeAgain() {
    var x = 30
    console.log(x)
}
testScope()
testScopeAgain()