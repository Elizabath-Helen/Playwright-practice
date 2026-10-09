# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: greenkart.spec.ts >> GreenKart - Product Categorization and Shopping Cart >> Task 1 - Identify and group products category-wise
- Location: testAssets\tests\greenkart.spec.ts:9:9

# Error details

```
Error: GreenKart should display the expected homepage title.

expect(page).toHaveTitle(expected) failed

Expected pattern: /GreenKarted/i
Received string:  "GreenKart - veg and fruits kart"
Timeout: 5000ms

Call log:
  - GreenKart should display the expected homepage title. with timeout 5000ms
    13 × locator resolved to <html>…</html>
       - unexpected value "GreenKart - veg and fruits kart"

```

```yaml
- banner:
  - text: GREENKART
  - searchbox "Search for Vegetables and Fruits"
  - button
  - link "🎯 I’ll help you prepare for your next QA job — Explore the QA Career Accelerator.":
    - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
  - link "Top Deals":
    - /url: "#/offers"
  - link "Flight Booking":
    - /url: https://rahulshettyacademy.com/dropdownsPractise/
  - table:
    - rowgroup:
      - 'row "Items : 0"':
        - cell "Items"
        - cell ":"
        - cell "0":
          - strong: "0"
      - 'row "Price : 0"':
        - cell "Price"
        - cell ":"
        - cell "0":
          - strong: "0"
  - link "Cart":
    - /url: "#"
    - img "Cart"
- img "Brocolli - 1 Kg"
- heading "Brocolli - 1 Kg" [level=4]
- paragraph: ₹ 120
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Cauliflower - 1 Kg"
- heading "Cauliflower - 1 Kg" [level=4]
- paragraph: ₹ 60
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Cucumber - 1 Kg"
- heading "Cucumber - 1 Kg" [level=4]
- paragraph: ₹ 48
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Beetroot - 1 Kg"
- heading "Beetroot - 1 Kg" [level=4]
- paragraph: ₹ 32
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Carrot - 1 Kg"
- heading "Carrot - 1 Kg" [level=4]
- paragraph: ₹ 56
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Tomato - 1 Kg"
- heading "Tomato - 1 Kg" [level=4]
- paragraph: ₹ 16
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Beans - 1 Kg"
- heading "Beans - 1 Kg" [level=4]
- paragraph: ₹ 82
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Brinjal - 1 Kg"
- heading "Brinjal - 1 Kg" [level=4]
- paragraph: ₹ 35
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Capsicum"
- heading "Capsicum" [level=4]
- paragraph: ₹ 60
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Mushroom - 1 Kg"
- heading "Mushroom - 1 Kg" [level=4]
- paragraph: ₹ 75
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Potato - 1 Kg"
- heading "Potato - 1 Kg" [level=4]
- paragraph: ₹ 22
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Pumpkin - 1 Kg"
- heading "Pumpkin - 1 Kg" [level=4]
- paragraph: ₹ 48
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Corn - 1 Kg"
- heading "Corn - 1 Kg" [level=4]
- paragraph: ₹ 75
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Onion - 1 Kg"
- heading "Onion - 1 Kg" [level=4]
- paragraph: ₹ 16
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Apple - 1 Kg"
- heading "Apple - 1 Kg" [level=4]
- paragraph: ₹ 72
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Banana - 1 Kg"
- heading "Banana - 1 Kg" [level=4]
- paragraph: ₹ 45
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Grapes - 1 Kg"
- heading "Grapes - 1 Kg" [level=4]
- paragraph: ₹ 60
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Mango - 1 Kg"
- heading "Mango - 1 Kg" [level=4]
- paragraph: ₹ 75
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Musk Melon - 1 Kg"
- heading "Musk Melon - 1 Kg" [level=4]
- paragraph: ₹ 36
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Orange - 1 Kg"
- heading "Orange - 1 Kg" [level=4]
- paragraph: ₹ 75
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Pears - 1 Kg"
- heading "Pears - 1 Kg" [level=4]
- paragraph: ₹ 69
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Pomegranate - 1 Kg"
- heading "Pomegranate - 1 Kg" [level=4]
- paragraph: ₹ 95
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Raspberry - 1/4 Kg"
- heading "Raspberry - 1/4 Kg" [level=4]
- paragraph: ₹ 160
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Strawberry - 1/4 Kg"
- heading "Strawberry - 1/4 Kg" [level=4]
- paragraph: ₹ 180
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Water Melon - 1 Kg"
- heading "Water Melon - 1 Kg" [level=4]
- paragraph: ₹ 28
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Almonds - 1/4 Kg"
- heading "Almonds - 1/4 Kg" [level=4]
- paragraph: ₹ 200
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Pista - 1/4 Kg"
- heading "Pista - 1/4 Kg" [level=4]
- paragraph: ₹ 190
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Nuts Mixture - 1 Kg"
- heading "Nuts Mixture - 1 Kg" [level=4]
- paragraph: ₹ 950
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Cashews - 1 Kg"
- heading "Cashews - 1 Kg" [level=4]
- paragraph: ₹ 650
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- img "Walnuts - 1/4 Kg"
- heading "Walnuts - 1/4 Kg" [level=4]
- paragraph: ₹ 170
- link "–":
  - /url: "#"
- spinbutton: "1"
- link "+":
  - /url: "#"
- button "ADD TO CART"
- contentinfo:
  - paragraph:
    - text: © 2019
    - strong: GreenKart
    - text: "- buy veg and fruits online"
```

# Test source

```ts
  1   | 
  2   | import { test, expect } from '../fixtures/greenkartFixture';
  3   | import categoryData1 from '../test-data/greenkart1.json';
  4   | import categoryData2 from '../test-data/greenkart2.json';
  5   | import categoryData3 from '../test-data/greenkart3.json';
  6   | 
  7   | test.describe('GreenKart - Product Categorization and Shopping Cart', () => {
  8   | 
  9   |     test('Task 1 - Identify and group products category-wise', async ({ page, greenKartPage, captureScreenshot }) => {
  10  | 
  11  |         const vegetables: string[] = [];
  12  |         const fruits: string[] = [];
  13  |         const nuts: string[] = [];
  14  |         const uncategorizedProducts: string[] = [];
  15  |         let productNames: string[] = [];
  16  | 
  17  |         await captureScreenshot( 'Open GreenKart to view the available products',async () => {
  18  |                 await greenKartPage.navigateToGreenKart();
  19  |             }
  20  |         );
  21  | 
  22  |         await captureScreenshot('Verify GreenKart homepage has loaded successfully', async () => {
> 23  |                 await expect( page,'GreenKart should display the expected homepage title.').toHaveTitle(/GreenKarted/i);
      |                                                                                             ^ Error: GreenKart should display the expected homepage title.
  24  |             }
  25  |         );
  26  | 
  27  |         await captureScreenshot( 'Identify and classify the available products into vegetables, fruits and nuts', async () => {
  28  |                 productNames = await greenKartPage.getProductNames();
  29  | 
  30  |                 for (const product of productNames) {
  31  |                     const productName = product.split(' - ')[0].trim();
  32  | 
  33  |                     if (categoryData1.vegetables.includes(productName)) {
  34  |                         vegetables.push(productName);
  35  |                     } else if (categoryData1.fruits.includes(productName)) {
  36  |                         fruits.push(productName);
  37  |                     } else if (categoryData1.nuts.includes(productName)) {
  38  |                         nuts.push(productName);
  39  |                     } else {
  40  |                         uncategorizedProducts.push(productName);
  41  |                     }
  42  |                 }
  43  |             }
  44  |         );
  45  | 
  46  |         await captureScreenshot( 'Verify the product listing contains products', async () => {
  47  |                 await expect( productNames.length, 'The GreenKart product listing should contain at least one product.' ).toBeGreaterThan(0);
  48  |             }
  49  |         );
  50  | 
  51  |         await captureScreenshot( 'Verify the identified vegetable count matches the test data', async () => {
  52  |                 await expect( vegetables.length, 'The identified vegetable count should match greenkart1.json.' ).toBe(categoryData1.vegetables.length);
  53  |             }
  54  |         );
  55  | 
  56  |         await captureScreenshot('Verify the identified fruit count matches the test data', async () => {
  57  |                 await expect( fruits.length, 'The identified fruit count should match greenkart1.json.').toBe(categoryData1.fruits.length);
  58  |             }
  59  |         );
  60  | 
  61  |         await captureScreenshot( 'Verify the identified nut count matches the test data', async () => {
  62  |                 await expect( nuts.length, 'The identified nut count should match greenkart1.json.').toBe(categoryData1.nuts.length);
  63  |             }
  64  |         );
  65  | 
  66  |         await captureScreenshot( 'Verify every product belongs to a configured category', async () => {
  67  |                 await expect( uncategorizedProducts, `Every product should belong to a configured category. Uncategorized products: ${uncategorizedProducts.join(', ') || 'None'}`
  68  |                 ).toHaveLength(0);
  69  |             }
  70  |         );
  71  | 
  72  |         await captureScreenshot( 'Verify category counts account for all displayed products',async () => {
  73  |                 const totalCategorizedProducts = vegetables.length + fruits.length + nuts.length;
  74  | 
  75  |                 await expect( totalCategorizedProducts, 'The combined vegetable, fruit and nut counts should equal the total displayed product count.'
  76  |                 ).toBe(productNames.length);
  77  |             }
  78  |         );
  79  |     });
  80  | 
  81  | 
  82  |     
  83  |     test('Task 2 - Add products to cart based on category', async ({ page, greenKartPage, captureScreenshot }) => {
  84  | 
  85  |         const expectedProducts = [
  86  |             ...categoryData2.vegetables,
  87  |             ...categoryData2.fruits,
  88  |             ...categoryData2.nuts
  89  |         ];
  90  | 
  91  |         await captureScreenshot( 'Open GreenKart to select products from the configured categories', async () => {
  92  |                 await greenKartPage.navigateToGreenKart();
  93  |             }
  94  |         );
  95  | 
  96  |         await captureScreenshot( 'Verify GreenKart homepage has loaded successfully', async () => {
  97  |                 await expect( page, 'GreenKart should display the expected homepage title before product selection.'
  98  |                 ).toHaveTitle(/GreenKart/i);
  99  |             }
  100 |         );
  101 | 
  102 |         await captureScreenshot( 'Verify the shopping cart starts empty', async () => {
  103 |                 await expect( greenKartPage.cartCount, 'The cart should contain zero products before adding selected items.'
  104 |                 ).toHaveText('0');
  105 |             }
  106 |         );
  107 | 
  108 |         await captureScreenshot( 'Select and add the configured vegetable products to the shopping cart',  async () => {
  109 |                 await greenKartPage.addProductsToCart(categoryData2.vegetables);
  110 |             }
  111 |         );
  112 | 
  113 |         await captureScreenshot( 'Verify the cart count after adding vegetables', async () => {
  114 |                 await expect( greenKartPage.cartCount, 'The cart count should equal the number of selected vegetables.'
  115 |                 ).toHaveText(String(categoryData2.vegetables.length));
  116 |             }
  117 |         );
  118 | 
  119 |         await captureScreenshot( 'Select and add the configured fruit products to the shopping cart', async () => {
  120 |                 await greenKartPage.addProductsToCart(categoryData2.fruits);
  121 |             }
  122 |         );
  123 | 
```