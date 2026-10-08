import { Page, Locator, expect } from '@playwright/test';

export default class GreenKartPage {
    readonly page: Page;
    readonly productCards: Locator;
    readonly productNames: Locator;

    // task2
    readonly cartCount: Locator;
    readonly cartIcon: Locator;
    readonly cartItems: Locator;
    readonly cartProductNames: Locator;

    // Task 3
    readonly cartItemQuantity: Locator;
    readonly cartItemPrice: Locator;
    readonly checkoutButton: Locator; 
    readonly placeOrderButton: Locator;      

    constructor(page: Page) {
        this.page = page;
        this.productCards = page.locator('.products .product');
        this.productNames = this.productCards.locator('.product-name');
    

        // task2
        this.cartCount = page.locator('.cart-info strong').first();   
        this.cartIcon = page.locator('a.cart-icon');
        this.cartItems = page.locator('.cart-preview .cart-items').first().locator('.cart-item');
        this.cartProductNames = this.cartItems.locator('.product-info .product-name');


        // Task 3
        this.cartItemQuantity = this.cartItems.locator('.product-total .quantity');
        this.cartItemPrice = this.cartItems.locator('.product-info .product-price');
        this.checkoutButton = page.getByText('PROCEED TO CHECKOUT');
        this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
    }

    async navigateToGreenKart() {
        await this.page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
        await this.page.waitForLoadState('networkidle');
        await this.productCards.first().waitFor();
    }

    async getProductNames() {
        return await this.productNames.allTextContents();
    }

    
    // task2
    async addProductToCart(productName: string) {
        const addButton = this.productCards.filter({ hasText: `${productName} -` }).locator('.product-action button');
        // await expect(async () => {
        //     const before = Number(await this.cartCount.innerText());
            await addButton.click();
        //     await expect(this.cartCount).toHaveText(String(before + 1), { timeout: 2000 });
        // }, `"${productName}" should be added to cart`).toPass({ timeout: 15000 });
    }

    async addProductsToCart(productNames: string[]) {
        for (const productName of productNames) {
            await this.addProductToCart(productName);
        }
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async getCartProductNames() {
        return await this.cartProductNames.allTextContents();
    }


    //task 3
    async getCartQuantities() {
    return await this.cartItemQuantity.allTextContents();
    }

    async getCartPrices() {
        return await this.cartItemPrice.allTextContents();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

}