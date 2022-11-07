const content = `jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.`

function loadContentUsingJS() {
    //selection: select the p element with id mainPara
    const mainPara = document.getElementById('mainPara')

    //action: appending/assigning a content as innerHTML in that p element to be displayed
    mainPara.innerHTML = `<b>${content}</b>`
    mainPara.addEventListener('mouseover', function () {
        mainPara.style.backgroundColor = 'beige'
    })
    mainPara.addEventListener('mouseleave', function () {
        mainPara.style.backgroundColor = 'burlywood'
    })
    //mainPara.innerText = content


}

//window.addEventListener('DOMContentLoaded', loadContentUsingJS)


function loadContentUsingJQuery() {
    //accessing top level function in jQuery library using $ symbol
    /**
     * var $ = function(selector){
     * }
     */
    //element selector
    //id selector (#element-id)
    //class selector
    const mainPara = $('#mainPara')
    mainPara.html(`<b>${content}</b>`)
    mainPara.on('mouseover', function () {
        this.style.backgroundColor = 'beige'
    })
    mainPara.on('mouseleave', function () {
        this.style.backgroundColor = 'burlywood'
    })
}

//window.addEventListener('DOMContentLoaded', loadContentUsingJQuery)

//older version
// $(document).ready(function () {
//     loadContentUsingJQuery()
// })

//new version
// $(function () {
//     loadContentUsingJQuery()
//     anotherFn()
//     someOtherFn()
// })

//crisp, simpler
$(loadContentUsingJQuery)