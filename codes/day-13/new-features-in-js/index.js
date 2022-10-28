//Map in JS
//symbol
//regular expressions
//class access specifiers
// class Person {
//     #name
//     #id
//     #salary
//     constructor(name, id, salary) {
//         this.name = name
//         this.id = id
//         this.salary = salary
//     }
//     print() {

//     }
// }

const message = 'Templated String'
const hElement = document.createElement('header')
// hElement.innerHTML = '<div>' +
//     '<h2>' +
//     '<i>' +
//     message +
//     '</i>' +
//     '</h2>' +
//     '</div> '
hElement.innerHTML = `
<div>
    <h2>
        <i> ${message} </i>
    </h2>
</div>
`
document.body.appendChild(hElement)