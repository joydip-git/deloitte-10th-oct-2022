const anilObject = {
    name: 'anil',
    id: 1,
    salary: 1000,
    print: function () {
        return `name=${this.name}, id=${this.id}, salary=${this.salary}`
    }
}

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