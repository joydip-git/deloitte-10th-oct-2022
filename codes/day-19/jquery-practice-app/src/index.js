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
                const eventTarget = eventObj.target
                const selectedOption = eventTarget.children[eventTarget.selectedIndex]
                //const selectedOption = this.options[this.selectedIndex]
                window.alert(`${selectedOption.text}, ${selectedOption.value}`)
            }
        )
}
function handleButtonClick() {
    // $('button.btn.btn-primary')
    //     .on(
    //         'click',
    //         (eventObj) => {
    //             window.alert('clicked')
    //             console.log(this)
    //             console.log(eventObj.target.innerText)
    //         }
    //     )
    $('button.btn.btn-primary')
        .on(
            'click',
            function (eventObj) {
                window.alert('clicked')
                console.log(this.innerText)
                // console.log(eventObj.target.innerText)
            }
        )
}
$(function () {
    loadListItemsUsingjquery()
    loadOptionsUisngJQuery()
    handleButtonClick()
})
