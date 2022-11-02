//part:1
function doesCategoriesExist() {
    if (!localStorage.getItem('categories')) {
        var jsonCategories = JSON.stringify(categories)
        localStorage.setItem('categories', jsonCategories)
    }
}

function createOption(categoryObj) {
    const newOption = document.createElement('option')
    newOption.text = categoryObj.categoryName
    newOption.value = categoryObj.categoryId
    return newOption
}


function loadCategoriesFromLocalstorage() {
    //check whether categories exist in the localstorage or not
    //if not save some sample category objects (an array) in the localstorage
    doesCategoriesExist()

    //fetch category data (an array) from localstorage
    var categoriesArray = JSON.parse(localStorage.getItem('categories'))

    //crete option elements dynamically based on the number of category objects in the localstorage
    var ddlCategories = document.getElementById('ddlCategories')
    for (const category of categoriesArray) {
        const optionElement = createOption(category)
        ddlCategories.appendChild(optionElement)
    }

    const btnObj = document.getElementById('btnAdd')
    // btnObj.addEventListener('click', saveProduct)
    btnObj.onclick = saveProduct
}

//Part-2:
function saveProduct() {

    //fetch the values from input type
    const id = Number(document.getElementById('txtId').value)
    const price = Number(document.getElementById('txtPrice').value)
    const name = document.getElementById('txtName').value
    const desc = document.getElementById('txtDesc').value

    const ddl = document.getElementById('ddlCategories')
    const selectedOption = ddl.options[ddl.selectedIndex]
    const cid = Number(selectedOption.value)
    const categoryObj = categories.find(
        function (c) {
            return c.categoryId === cid
        }
    )

    const fileElement = document.getElementById('formImage')
    const allUploadeFiles = fileElement.files
    const imageFile = allUploadeFiles[0]
    //console.log(imageFile)

    //images can be saved as BLOB (Binary Large Object)
    //we convert the image data in string format (known as 'data url')
    const reader = new FileReader()
    reader.addEventListener('load', function () {
        const imageBlob = reader.result
        var newProduct = new Product(id, name, price, desc, imageBlob, categoryObj)

        if (!localStorage.getItem('products')) {
            const products = []
            products.push(newProduct)
            localStorage.setItem('products', JSON.stringify(products))
        } else {
            var existingProducts = JSON.parse(localStorage.getItem('products'))
            existingProducts.push(newProduct)
            localStorage.setItem('products', JSON.stringify(existingProducts))
        }
    })
    //once FileReader finishes reading the file data and convert the same into raw buffered data,
    //a. an event (load) of the FileReader gets fired
    //b. that time, you can get the converted raw buffered data using 'result' property of the FileReader object
    reader.readAsDataURL(imageFile)

    if (!window.confirm('do you want to add further records?')) {
        window.location.href = "../products.html";
    }
}

window.addEventListener('load', loadCategoriesFromLocalstorage)
