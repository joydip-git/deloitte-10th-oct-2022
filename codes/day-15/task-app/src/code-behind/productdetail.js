const loadPoduct = () => {
    const product = JSON.parse(localStorage.getItem('selectedproduct'))

    document.getElementById('divHeading').innerText = product.productName

    document.getElementById('pId').innerText = product.productId.toString()
    document.getElementById('pName').innerText = product.productName

    document.getElementById('pDesc').innerText = product.description

    document.getElementById('pCategory').innerText = product.categoryInfo.categoryName

    document.getElementById('pPrice').innerText = product.price.toString()

    const img = document.getElementById('pImage')
    img.setAttribute('src', product.imageData)
    img.setAttribute('title', product.productName)
    img.setAttribute('style', 'width:300px')
}

document.addEventListener('DOMContentLoaded', loadPoduct)