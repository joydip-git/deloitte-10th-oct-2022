function saveCategories() {
    if (!localStorage.getItem('categories')) {
        localStorage.setItem('categories', JSON.stringify(categories))
    }
}

function loadCategories() {
    const categoriesData = JSON.parse(localStorage.getItem('categories'))

    categoriesData.forEach(
        (categoryObj) => {
            $('<option/>', { text: categoryObj.categoryName, value: categoryObj.categoryId }).appendTo('#ddlCategories')
        }
    );
}

function saveProduct() {
    const id = Number($('#txtId').val())
    const name = $('#txtName').val()
    const price = Number($('#txtPrice').val())
    const description = $('#txtDesc').val()
    const ddl = $('#ddlCategories')[0]
    const selectedOption = ddl.options[ddl.selectedIndex]
    const cid = Number(selectedOption.value)
    const categoryObj = categories.find(
        function (c) {
            return c.categoryId === cid
        }
    )

    const imgElement = $('#formImage')[0]
    const imgFile = imgElement.files[0]
    const reader = new FileReader()
    reader.addEventListener('load', function () {
        const imgBlob = reader.result
        var newProduct = new Product(id, name, price, description, imgBlob, categoryObj)

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
    reader.readAsDataURL(imgFile)
}


$(function () {

    saveCategories()
    //load categories in the ddl
    loadCategories()

    //adding event handler for button's click event
    $('#btnAdd').on('click', saveProduct)

    const addModal = $('#addModal')
    addModal.on('hidden.bs.modal', () => {
        const confirmModalObj = $('#confirmModal')
        const cModal = new bootstrap.Modal(confirmModalObj)
        cModal.show()
    })
    const btnNavigateObj = $('#btnNavigate')
    btnNavigateObj.on('click', () => {
        window.location.href = "../products.html";
    })
})