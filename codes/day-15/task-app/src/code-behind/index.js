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
    btnObj.addEventListener('click', saveProduct)
}

function saveProduct() {

    //fetch the values from input type
    var id = Number(document.getElementById('txtId').value)
    var price = Number(document.getElementById('txtPrice').value)
    var name = document.getElementById('txtName').value
    var desc = document.getElementById('txtDesc').value

    var ddl = document.getElementById('ddlCategories')
    var selectedOption = ddl.options[ddl.selectedIndex]
    var cid = Number(selectedOption.value)
    var categoryObj = categories.find(
        function (c) {
            return c.categoryId === cid
        }
    )

    var imageFile = document.getElementById('formImage').files[0]
    console.log(imageFile)

    const reader = new FileReader()
    reader.addEventListener('load', function () {
        const imageBlob = reader.result
        var newProduct = new Product(id, name, price, desc, imageBlob, categoryObj)

        if (!localStorage.getItem('products')) {
            const products = [newProduct]
            localStorage.setItem('products', JSON.stringify(products))
        } else {
            var existingProducts = JSON.parse(localStorage.getItem('products'))
            existingProducts.push(newProduct)
            localStorage.setItem('products', JSON.stringify(existingProducts))
        }
    })
    reader.readAsDataURL(imageFile)
    if (!window.confirm('do you want to add further records?')) {
        window.location.href = "../products.html";
    }
}

window.addEventListener('load', loadCategoriesFromLocalstorage)
