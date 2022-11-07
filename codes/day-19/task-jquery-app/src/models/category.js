class Category {
    constructor(id, name) {
        this.categoryId = id
        this.categoryName = name
    }
    getInfo() {
        return `${this.categoryId}, ${this.categoryName}`
    }
}