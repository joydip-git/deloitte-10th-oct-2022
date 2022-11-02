class Product {
    constructor(id, name, price, description, imageData, category) {
        this.productId = id
        this.productName = name
        this.description = description
        this.price = price
        this.imageData = imageData
        this.categoryInfo = category
    }
    getInfo() {
        return `${this.productName}, ${this.price},${this.categoryInfo.categoryName}`
    }
}