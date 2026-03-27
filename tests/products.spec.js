import { test, expect } from "@playwright/test"
import LoginPage from "../pages/LoginPage.js"
import ProductsPage from "../pages/ProductsPage.js"

test('Verify Products after Login', async ({ page }) => {

    const loginPage = new LoginPage(page)
    const productsPage = new ProductsPage(page)

    await loginPage.goto()
    await loginPage.login('standard_user', 'secret_sauce')

    // Verify navigation
    await expect(page).toHaveURL(/inventory/)

    // Verify title
    const title = await productsPage.getPageTitle()
    await expect(title).toBe('Products')

    // Get all products
    const products = await productsPage.getAllProducts()

    console.log(products)

    await expect(products.length).toBeGreaterThan(0)
})