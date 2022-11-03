const createTableDataElement = (data) => {
    const td = document.createElement('td')
    td.innerText = data
    return td
}
const saveSelectedProduct = () => {

}
const loadProducts = () => {
    // const allProducts = JSON.parse(localStorage.getItem('products'))
    // const firstProduct = allProducts[0]
    // document.getElementById('imgProd').setAttribute('src', firstProduct.imageData)
    // document.getElementById('imgProd').setAttribute('style', 'width:50px;margin:2px')

    //load all the products from localstorage
    const allProducts = JSON.parse(localStorage.getItem('products'))
    const tbodyElement = document.getElementById('tbodyProducts')
    //generate rows (tr) dynamically
    //every row will display the following:
    //1st col: image
    //2nd col: name
    //3rd col: description
    //4th col: price
    //5th col: categoryName of the category to which this product belongs
    for (const product of allProducts) {
        const row = document.createElement('tr')

        const nameTd = createTableDataElement(product.productName)
        // const descTd = createTableDataElement(product.description)
        const priceTd = createTableDataElement(product.price.toString())
        // const idTd = createTableDataElement(product.productId.toString())
        // const catTd = createTableDataElement(product.categoryInfo.categoryName)

        const imgElement = document.createElement('img')
        imgElement.setAttribute('src', product.imageData)
        imgElement.setAttribute('alt', 'NA')
        imgElement.setAttribute('style', 'width:50px;margin:2px')
        imgElement.setAttribute('title', product.productName)

        const aElement = document.createElement('a')
        aElement.setAttribute('href', '../../productdetail.html')
        aElement.appendChild(imgElement)

        const divElement = document.createElement('div')
        divElement.setAttribute('class', 'img-responsive')
        divElement.appendChild(aElement)

        aElement.addEventListener('click', () => {
            localStorage.setItem('selectedproduct', JSON.stringify(product))
        })

        const imgTd = document.createElement('td')
        imgTd.appendChild(divElement)

        //row.append(imgTd, nameTd, idTd, descTd, priceTd, catTd)
        row.append(imgTd, nameTd, priceTd)

        tbodyElement.appendChild(row)
    }
}
document.addEventListener('DOMContentLoaded', loadProducts)