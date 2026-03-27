class ProductsPage {

    constructor(page) {
        this.page = page
        this.title = '.title'
        this.products = '.inventory_item_name'
    }

    async getPageTitle() {
        return await this.page.textContent(this.title)
    }

    async getAllProducts() {
        return await this.page.$$eval(this.products, items =>
            items.map(i => i.textContent)
        )
    }
}

export default ProductsPage