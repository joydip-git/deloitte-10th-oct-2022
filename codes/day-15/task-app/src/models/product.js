class Product {
    constructor(id, name, price, description, imagePath, category) {
        this.productId = id
        this.productName = name
        this.description = description
        this.price = price
        this.imageUrl = imagePath
        this.categoryInfo = category
    }
    getInfo() {
        return `${this.productName}, ${this.price},${this.categoryInfo.categoryName}`
    }
}