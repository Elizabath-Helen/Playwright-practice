import { test, expect } from '../fixtures/greenkartFixture';
import categoryData1 from '../test-data/greenkart1.json';
import categoryData2 from '../test-data/greenkart2.json';
import categoryData3 from '../test-data/greenkart3.json';



test('Task 1 - Identify and group GreenKart products category-wise', async ({ page, greenKartPage }) => {

    let productNames: string[] = [];
    const vegetables: string[] = [];
    const fruits: string[] = [];
    const nuts: string[] = [];
    const uncategorizedProducts: string[] = [];

    await test.step('Navigate to GreenKart', async () => {
        await greenKartPage.navigateToGreenKart();
        await expect(page).toHaveTitle(/GreenKart/i);
    });

    await test.step('Identify and group products category-wise', async () => {
        productNames = await greenKartPage.getProductNames();
        expect(productNames.length).toBeGreaterThan(0);

        for (const product of productNames) {
            const productName = product.split(' - ')[0].trim();

            if (categoryData1.vegetables.includes(productName)) {
                vegetables.push(productName);
            }
            else if (categoryData1.fruits.includes(productName)) {
                fruits.push(productName);
            }
            else if (categoryData1.nuts.includes(productName)) {
                nuts.push(productName);
            }
            else {
                uncategorizedProducts.push(productName);
            }
        }

        console.log('Vegetables:', vegetables);
        console.log('Vegetable Count:', vegetables.length);
        console.log('Fruits:', fruits);
        console.log('Fruit Count:', fruits.length);
        console.log('Nuts:', nuts);
        console.log('Nuts Count:', nuts.length);

        expect(vegetables.length).toBe(categoryData1.vegetables.length);
        expect(fruits.length).toBe(categoryData1.fruits.length);
        expect(nuts.length).toBe(categoryData1.nuts.length);
    });

    await test.step('Verify all products are categorized', async () => {
        expect(uncategorizedProducts).toHaveLength(0);
    });

    await test.step('Verify total categorized products', async () => {
        const totalCategorizedProducts = vegetables.length + fruits.length + nuts.length;
        expect(totalCategorizedProducts).toBe(productNames.length);
    });

    await test.step('Capture screenshot', async () => {
        await page.screenshot({
            path: 'screenshots/task1-greencart-products.png',
            fullPage: true
        });
    });
});


test('Task 2 - Add products to cart based on category', async ({ page, greenKartPage }) => {

    const expectedProducts = [
        ...categoryData2.vegetables,
        ...categoryData2.fruits,
        ...categoryData2.nuts
    ];

    await test.step('Navigate to GreenKart', async () => {
        await greenKartPage.navigateToGreenKart();
        await expect(page).toHaveTitle(/GreenKart/i);
    });

    await test.step('Ensure cart is empty', async () => {
        await expect(greenKartPage.cartCount).toHaveText('0');
    });

    await test.step('Add vegetable products to cart', async () => {
        await greenKartPage.addProductsToCart(categoryData2.vegetables);
        await expect(greenKartPage.cartCount).toHaveText(String(categoryData2.vegetables.length));
    });

    await test.step('Add fruit products to cart', async () => {
        await greenKartPage.addProductsToCart(categoryData2.fruits);
        await expect(greenKartPage.cartCount).toHaveText(String(categoryData2.vegetables.length + categoryData2.fruits.length));
    });

    await test.step('Add nut products to cart', async () => {
        await greenKartPage.addProductsToCart(categoryData2.nuts);
        await expect(greenKartPage.cartCount).toHaveText(String(expectedProducts.length));
    });

    await test.step('Open shopping cart', async () => {
        await greenKartPage.openCart();
        await expect(greenKartPage.cartItems).toHaveCount(expectedProducts.length);
    });

    await test.step('Verify products are added to cart', async () => {
        const actualProducts = await greenKartPage.getCartProductNames();

        console.log('Expected Products:', expectedProducts);
        console.log('Actual Products:', actualProducts);

        expect(actualProducts).toHaveLength(expectedProducts.length);

        for (const product of expectedProducts) {
            expect(actualProducts).toContainEqual(expect.stringContaining(product));
        }
    });

    await test.step('Capture screenshot', async () => {
        await page.screenshot({
            path: 'screenshots/task2-greencart-cart.png',
            fullPage: true
        });
    });
});


test('Task 3 - Add products, verify cart and proceed for billing', async ({ page, greenKartPage }) => {

    const expectedProducts = [
        ...categoryData3.vegetables,
        ...categoryData3.fruits,
        ...categoryData3.nuts
    ];


    await test.step('Navigate to GreenKart', async () => {
        await greenKartPage.navigateToGreenKart();
        await expect(page).toHaveTitle(/GreenKart/i);
    });


    await test.step('Verify cart is empty', async () => {
        await expect(greenKartPage.cartCount).toHaveText('0');
    });


    await test.step('Add 3 vegetables to cart', async () => {
        const vegetables = categoryData3.vegetables.map(product => product.name);
        await greenKartPage.addProductsToCart(vegetables);
        await expect(greenKartPage.cartCount).toHaveText('3');
    });


    await test.step('Add 2 fruits to cart', async () => {
        const fruits = categoryData3.fruits.map(product => product.name);
        await greenKartPage.addProductsToCart(fruits);
        await expect(greenKartPage.cartCount).toHaveText('5');
    });


    await test.step('Add 2 nuts to cart', async () => {
        const nuts = categoryData3.nuts.map(product => product.name);
        await greenKartPage.addProductsToCart(nuts);
        await expect(greenKartPage.cartCount).toHaveText('7');
    });


    await test.step('Open shopping cart', async () => {
        await greenKartPage.openCart();
        await expect(greenKartPage.cartItems).toHaveCount(7);
    });


    await test.step('Verify products in cart', async () => {
        const actualProducts = await greenKartPage.getCartProductNames();

        const expectedProductNames = expectedProducts.map(product => `${product.name} -`);
        expect(actualProducts).toHaveLength(7);

        for (const product of expectedProductNames) {

            expect(actualProducts).toContainEqual(
                expect.stringContaining(product)
            );
        }
    });


    await test.step('Verify quantity of each product', async () => {
        const actualQuantities = await greenKartPage.getCartQuantities();
        const normalizedActualQuantities = actualQuantities.map(quantity => quantity.trim());
        const expectedQuantities = expectedProducts.map(product => `${product.quantity} No.` );
        expect(normalizedActualQuantities).toEqual(expectedQuantities);
    });


    await test.step('Verify price of each product', async () => {
        const actualPrices = await greenKartPage.getCartPrices();
        const expectedPrices = expectedProducts.map(product => String(product.price));
        expect(actualPrices).toEqual(expectedPrices);
    });


    await test.step('Capture cart screenshot', async () => {
        await page.screenshot({
            path: 'screenshots/task3-cart.png',
            fullPage: true
        });

    });


    await test.step('Proceed to billing', async () => {
        await greenKartPage.proceedToCheckout();
    });


    await test.step('Verify billing page', async () => {
        await expect(greenKartPage.placeOrderButton).toBeVisible();
    });


    await test.step('Capture billing screenshot', async () => {
        await page.screenshot({
            path: 'screenshots/task3-billing.png',
            fullPage: true
        });

    });

});