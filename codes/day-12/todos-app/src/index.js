function call() {
    alert('hello')
}
//this function uses pure AJAX
function getData() {
    var requestObject = new XMLHttpRequest()
    console.log(requestObject.readyState)
    requestObject.onreadystatechange = function () {
        if (requestObject.readyState === 4 && requestObject.status === 200) {
            var jsonData = requestObject.responseText
            var todoData = (JSON.parse(jsonData)).slice(0, 10)
            localStorage.setItem('todos', JSON.stringify(todoData))
        }
    }
    requestObject.open('GET', 'https://jsonplaceholder.typicode.com/todos', true)
    requestObject.send()
}

//this function uses asynchronous fetch() method
async function fetchAndSaveData() {
    try {
        var httpResponse = await fetch('https://jsonplaceholder.typicode.com/todos')
        var todoData = await httpResponse.json()
        localStorage.setItem('todos', JSON.stringify(todoData.slice(0, 10)))
    } catch (error) {
        console.log(error.message)
    }

}

function createRow(records) {
    if (records.length > 0) {
        var tbody = document.getElementById('tableBody')
        for (var todo of records) {
            var tr = document.createElement('tr')

            var tdId = document.createElement('td')
            tdId.innerText = todo.id

            var tdTitle = document.createElement('td')
            tdTitle.innerText = todo.title

            var tdCompleted = document.createElement('td')
            tdCompleted.innerText = todo.completed ? 'Yes' : 'No'

            tr.append(tdId, tdTitle, tdCompleted)
            tbody.appendChild(tr)
        }
    }
}
function loadAndShowData() {
    //check if localstorage has any todo data
    var todos = localStorage.getItem('todos')

    //if the data is NOT there, fetch the data, save it in localstorage, fetch it from localstorage again and convert back to JS array
    if (!todos) {
        fetchAndSaveData()
        //getData()
    }

    //based on the number of records generate rows dynamically and append them in the tbody element
    var todoList = JSON.parse(todos)
    createRow(todoList)
}

function filterTodos() {
    var filterText = document.getElementById('txtSearch').value
    var todos = localStorage.getItem('todos')
    var todoList = JSON.parse(todos)
    var filteredTodoList = todoList.filter(
        function (todo) {
            var todoTitle = todo.title.toLocaleLowerCase()
            return todoTitle.indexOf(filterText.toLocaleLowerCase()) !== -1
        }
    )
    var tbody = document.getElementById('tableBody')
    // var allRows = []
    // for (var todo of filteredTodoList) {
    //     var tr = document.createElement('tr')

    //     var tdId = document.createElement('td')
    //     tdId.innerText = todo.id

    //     var tdTitle = document.createElement('td')
    //     tdTitle.innerText = todo.title

    //     var tdCompleted = document.createElement('td')
    //     tdCompleted.innerText = todo.completed ? 'Yes' : 'No'

    //     tr.append(tdId, tdTitle, tdCompleted)
    //     allRows.push(tr)
    // }
    //console.log(tbody.children)

    // console.log(tbody.childNodes.length)
    // for (var index = 1; index < tbody.childNodes.length; index++) {
    //     console.log('removing node')
    //     const element = tbody.childNodes[index];
    //     console.log(element)
    //     tbody.removeChild(element)
    // }
    //createRow(filteredTodoList)
}