
import { test, expect } from '../fixtures/greenkartFixture';
import categoryData1 from '../test-data/greenkart1.json';
import categoryData2 from '../test-data/greenkart2.json';
import categoryData3 from '../test-data/greenkart3.json';

test.describe('GreenKart - Product Categorization and Shopping Cart', () => {

    test('Task 1 - Identify and group products category-wise', async ({ page, greenKartPage, captureScreenshot }) => {

        const vegetables: string[] = [];
        const fruits: string[] = [];
        const nuts: string[] = [];
        const uncategorizedProducts: string[] = [];
        let productNames: string[] = [];

        await captureScreenshot( 'Open GreenKart to view the available products',async () => {
                await greenKartPage.navigateToGreenKart();
            }
        );

        await captureScreenshot('Verify GreenKart homepage has loaded successfully', async () => {
                await expect( page,'GreenKart should display the expected homepage title.').toHaveTitle(/GreenKarted/i);
            }
        );

        await captureScreenshot( 'Identify and classify the available products into vegetables, fruits and nuts', async () => {
                productNames = await greenKartPage.getProductNames();

                for (const product of productNames) {
                    const productName = product.split(' - ')[0].trim();

                    if (categoryData1.vegetables.includes(productName)) {
                        vegetables.push(productName);
                    } else if (categoryData1.fruits.includes(productName)) {
                        fruits.push(productName);
                    } else if (categoryData1.nuts.includes(productName)) {
                        nuts.push(productName);
                    } else {
                        uncategorizedProducts.push(productName);
                    }
                }
            }
        );

        await captureScreenshot( 'Verify the product listing contains products', async () => {
                await expect( productNames.length, 'The GreenKart product listing should contain at least one product.' ).toBeGreaterThan(0);
            }
        );

        await captureScreenshot( 'Verify the identified vegetable count matches the test data', async () => {
                await expect( vegetables.length, 'The identified vegetable count should match greenkart1.json.' ).toBe(categoryData1.vegetables.length);
            }
        );

        await captureScreenshot('Verify the identified fruit count matches the test data', async () => {
                await expect( fruits.length, 'The identified fruit count should match greenkart1.json.').toBe(categoryData1.fruits.length);
            }
        );

        await captureScreenshot( 'Verify the identified nut count matches the test data', async () => {
                await expect( nuts.length, 'The identified nut count should match greenkart1.json.').toBe(categoryData1.nuts.length);
            }
        );

        await captureScreenshot( 'Verify every product belongs to a configured category', async () => {
                await expect( uncategorizedProducts, `Every product should belong to a configured category. Uncategorized products: ${uncategorizedProducts.join(', ') || 'None'}`
                ).toHaveLength(0);
            }
        );

        await captureScreenshot( 'Verify category counts account for all displayed products',async () => {
                const totalCategorizedProducts = vegetables.length + fruits.length + nuts.length;

                await expect( totalCategorizedProducts, 'The combined vegetable, fruit and nut counts should equal the total displayed product count.'
                ).toBe(productNames.length);
            }
        );
    });


    
    test('Task 2 - Add products to cart based on category', async ({ page, greenKartPage, captureScreenshot }) => {

        const expectedProducts = [
            ...categoryData2.vegetables,
            ...categoryData2.fruits,
            ...categoryData2.nuts
        ];

        await captureScreenshot( 'Open GreenKart to select products from the configured categories', async () => {
                await greenKartPage.navigateToGreenKart();
            }
        );

        await captureScreenshot( 'Verify GreenKart homepage has loaded successfully', async () => {
                await expect( page, 'GreenKart should display the expected homepage title before product selection.'
                ).toHaveTitle(/GreenKart/i);
            }
        );

        await captureScreenshot( 'Verify the shopping cart starts empty', async () => {
                await expect( greenKartPage.cartCount, 'The cart should contain zero products before adding selected items.'
                ).toHaveText('0');
            }
        );

        await captureScreenshot( 'Select and add the configured vegetable products to the shopping cart',  async () => {
                await greenKartPage.addProductsToCart(categoryData2.vegetables);
            }
        );

        await captureScreenshot( 'Verify the cart count after adding vegetables', async () => {
                await expect( greenKartPage.cartCount, 'The cart count should equal the number of selected vegetables.'
                ).toHaveText(String(categoryData2.vegetables.length));
            }
        );

        await captureScreenshot( 'Select and add the configured fruit products to the shopping cart', async () => {
                await greenKartPage.addProductsToCart(categoryData2.fruits);
            }
        );

        const expectedVegetableAndFruitCount = categoryData2.vegetables.length + categoryData2.fruits.length;

        await captureScreenshot( 'Verify the cart count includes vegetables and fruits', async () => {
                await expect( greenKartPage.cartCount, 'The cart count should include all selected vegetables and fruits.' ).toHaveText(String(expectedVegetableAndFruitCount));
            }
        );

        await captureScreenshot( 'Select and add the configured nut products to complete the category selection', async () => {
                await greenKartPage.addProductsToCart(categoryData2.nuts);
            }
        );

        await captureScreenshot( 'Verify the cart count includes products from all selected categories', async () => {
                await expect( greenKartPage.cartCount, 'The cart count should equal the total number of selected products across all categories.'
                ).toHaveText(String(expectedProducts.length));
            }
        );

        await captureScreenshot( 'Open the shopping cart to review the selected products', async () => {
                await greenKartPage.openCart();
            }
        );

        await captureScreenshot( 'Verify the cart displays one row for each selected product', async () => {
                await expect( greenKartPage.cartItems, 'The cart should display one row for each selected product.'
                ).toHaveCount(expectedProducts.length);
            }
        );

        const actualProducts = await greenKartPage.getCartProductNames();

        await captureScreenshot( 'Verify the cart contains the expected number of products', async () => {
                await expect( actualProducts, 'The cart should contain exactly the expected number of products.'
                ).toHaveLength(expectedProducts.length);
            }
        );

        for (const product of expectedProducts) {
            await captureScreenshot( `Verify ${product} is present in the shopping cart`, async () => {
                    await expect( actualProducts, `The selected product "${product}" should appear in the shopping cart.`
                    ).toContainEqual(expect.stringContaining(product));
                }
            );
        }
    });


   
    test('Task 3 - Add products, verify cart and proceed for billing', async ({ page, greenKartPage, captureScreenshot }) => {

        const expectedProducts = [
            ...categoryData3.vegetables,
            ...categoryData3.fruits,
            ...categoryData3.nuts
        ];

        await captureScreenshot( 'Open GreenKart to begin selecting products for checkout', async () => {
                await greenKartPage.navigateToGreenKart();
            }
        );

        await captureScreenshot( 'Verify GreenKart homepage has loaded successfully', async () => {
                await expect( page, 'GreenKart should display the expected homepage title before the purchase begins.'
                ).toHaveTitle(/GreenKart/i);
            }
        );

        await captureScreenshot( 'Verify the shopping cart starts empty', async () => {
                await expect( greenKartPage.cartCount, 'The cart should be empty before adding the selected products.'
                ).toHaveText('0');
            }
        );

        const vegetables = categoryData3.vegetables.map(product => product.name );

        await captureScreenshot( 'Verify the test data contains three vegetables', async () => {
                await expect( vegetables, 'The test data should contain exactly three vegetables.' ).toHaveLength(3);
            }
        );

        await captureScreenshot( 'Add the three selected vegetables to the shopping cart', async () => {
                await greenKartPage.addProductsToCart(vegetables);
            }
        );

        await captureScreenshot( 'Verify the cart contains three vegetables', async () => {
                await expect( greenKartPage.cartCount, 'The cart should contain three products after adding three vegetables.'
                ).toHaveText('3');
            }
        );

        const fruits = categoryData3.fruits.map(
            product => product.name
        );

        await captureScreenshot( 'Verify the test data contains two fruits', async () => {
                await expect( fruits, 'The test data should contain exactly two fruits.' ).toHaveLength(2);
            }
        );

        await captureScreenshot( 'Add two selected fruits alongside the vegetables', async () => {
                await greenKartPage.addProductsToCart(fruits);
            }
        );

        await captureScreenshot( 'Verify the cart contains three vegetables and two fruits', async () => {
                await expect( greenKartPage.cartCount, 'The cart should contain five products after adding two fruits to three vegetables.'
                ).toHaveText('5');
            }
        );

        const nuts = categoryData3.nuts.map( product => product.name);

        await captureScreenshot( 'Verify the test data contains two nuts', async () => {
                await expect( nuts, 'The test data should contain exactly two nuts.' ).toHaveLength(2);
            }
        );

        await captureScreenshot( 'Add two selected nuts to complete the seven-product selection', async () => {
                await greenKartPage.addProductsToCart(nuts);
            }
        );

        await captureScreenshot( 'Verify the cart contains all seven selected products', async () => {
                await expect( greenKartPage.cartCount, 'The cart should contain seven products: three vegetables, two fruits and two nuts.'
                ).toHaveText('7');
            }
        );

        await captureScreenshot( 'Open the shopping cart to review all seven selected products', async () => {
                await greenKartPage.openCart();
            }
        );

        await captureScreenshot( 'Verify the cart displays exactly seven product rows', async () => {
                await expect( greenKartPage.cartItems, 'The cart should display exactly seven product rows.' ).toHaveCount(7);
            }
        );

        const actualProducts = await greenKartPage.getCartProductNames();

        await captureScreenshot( 'Verify the cart contains exactly seven selected products', async () => {
                await expect( actualProducts, 'The cart should contain exactly seven selected products.').toHaveLength(7);
            }
        );

        for (const product of expectedProducts) {
            await captureScreenshot( `Verify ${product.name} is present in the shopping cart`, async () => {
                    await expect( actualProducts, `The selected product "${product.name}" should appear in the cart.`
                    ).toContainEqual( expect.stringContaining(`${product.name} -`));
                }
            );
        }

        await captureScreenshot( 'Verify the displayed quantity of every selected product', async () => {
                const actualQuantities = await greenKartPage.getCartQuantities();

                const normalizedActualQuantities = actualQuantities.map( quantity => quantity.trim());

                const expectedQuantities = expectedProducts.map( product => `${product.quantity} No.`);

                await expect(normalizedActualQuantities, 'Each cart row should display the expected quantity from greenkart3.json in the same product order.'
                ).toEqual(expectedQuantities);
            }
        );

        await captureScreenshot( 'Verify the displayed price of every selected product', async () => {
                const actualPrices = await greenKartPage.getCartPrices();
                const expectedPrices = expectedProducts.map( product => String(product.price));

                await expect( actualPrices, 'Each cart row should display the expected price from greenkart3.json in the same product order.'
                ).toEqual(expectedPrices);
            }
        );

        await captureScreenshot( 'Proceed from the verified shopping cart to the billing page', async () => {
                await greenKartPage.proceedToCheckout();
            }
        );

        await captureScreenshot( 'Verify the billing page is ready for the next purchase step', async () => {
                await expect( greenKartPage.placeOrderButton, 'The Place Order button should be visible after navigating to the billing page.'
                ).toBeVisible();
            }
        );
    });

});