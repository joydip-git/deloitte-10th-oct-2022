const items = ['anil', 'sunil', 'mahesh']

/*
function loadListItemsUsingJS() {
    const listElement = document.getElementById('nameList')

    items.forEach(
        function (name) {
            const listItem = document.createElement('li')
            listItem.innerText = name
            listElement.appendChild(listItem)
        }
    )
}
window.addEventListener('DOMContentLoaded', loadListItemsUsingJS)
*/
function loadListItemsUsingjquery() {
    items.forEach(
        function (name) {

            // $('#nameList').append(`<li>${name}</li>`)
            // const listItem = $('<li/>', { text: name })
            // listItem.appendTo('#nameList')
            $('<li/>', { text: name }).appendTo('#nameList')
        }
    )
}

function loadOptionsUisngJQuery() {
    //code
    let index = 0
    items.forEach(
        (name) => {
            const option = $(
                '<option/>',
                {
                    text: name, value: index,
                }
            )
            option.appendTo('#ddlNames')
            index++
        }
    )

    $('#ddlNames')
        .on('change',
            (eventObj) => {
                const selectedOption = eventObj.target.children[eventObj.target.selectedIndex]
                //const selectedOption = this.options[this.selectedIndex]
                window.alert(`${selectedOption.text}, ${selectedOption.value}`)
            }
        )
}
$(function () {
    loadListItemsUsingjquery()
    loadOptionsUisngJQuery()
})
