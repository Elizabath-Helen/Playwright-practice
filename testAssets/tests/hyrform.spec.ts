
import { test, expect } from '../fixtures/greenkartFixture';
import formData from '../test-data/hyform/hyrFormData.json';
import salaryData from '../test-data/hyform/salaryData.json';

test.describe('HYR Form Automation', () => {

    test('Task 1 - Fill the form and print entered values', async ({ page, hyrFormPage, captureScreenshot }) => {
        await captureScreenshot( 'Open the HYR Tutorials form page', async () => {
                await hyrFormPage.navigateToHyrForm();
            }
        );

        await captureScreenshot( 'Fill all form fields', async () => {
                await hyrFormPage.fillForm(formData);
            }
        );

        const enteredValues = await hyrFormPage.getFormInputValues();

        await captureScreenshot( 'Verify the first name matches the test data', async () => {
                await expect( hyrFormPage.firstNameInput, 'First name should match the entered test data' ).toHaveValue(formData.firstName);
            }
        );

        await captureScreenshot( 'Verify the last name matches the test data', async () => {
                await expect( hyrFormPage.lastNameInput, 'Last name should match the entered test data' ).toHaveValue(formData.lastName);
            }
        );

        await captureScreenshot( 'Verify the email matches the test data', async () => {
                await expect( hyrFormPage.emailInput, 'Email should match the entered test data' ).toHaveValue(formData.email);
            }
        );

        await captureScreenshot( 'Verify the password field contains the expected value', async () => {
                await expect( hyrFormPage.passwordInput, 'Password field should contain the entered password' ).toHaveValue(formData.password);
            }
        );

        await captureScreenshot( 'Verify the repeat password matches the test data', async () => {
                await expect( hyrFormPage.repeatPasswordInput, 'Repeat password should match the entered password' ).toHaveValue(formData.repeatPassword);
            }
        );

        console.log('\n--- Form Values Read From UI ---');
        for (const [field, value] of Object.entries(enteredValues)) {
            console.log(`${field}: ${value}`);
        }

        await captureScreenshot( 'Verify the first name read from the UI', async () => {
                expect( enteredValues.firstName, 'UI first name should match test data' ).toBe(formData.firstName);
            }
        );

        await captureScreenshot( 'Verify the last name read from the UI', async () => {
                expect( enteredValues.lastName, 'UI last name should match test data').toBe(formData.lastName);
            }
        );

        await captureScreenshot('Verify the email read from the UI', async () => {
                expect( enteredValues.email, 'UI email should match test data').toBe(formData.email);
            }
        );
    });


    test('Task 2 - Print Contact, Country and Salary for every row', async ({ hyrFormPage, captureScreenshot }) => {
        await captureScreenshot( 'Open the HYR Tutorials page and view the contact table', async () => {
                await hyrFormPage.navigateToHyrForm();
            }
        );

        await captureScreenshot( 'Verify the contact table is visible', async () => {
                await expect( hyrFormPage.contactTable, 'Contact table should be visible' ).toBeVisible();
            }
        );

        await captureScreenshot( 'Verify the contact table contains data rows', async () => {
                await expect( hyrFormPage.contactRows, 'Contact table should contain data rows' ).not.toHaveCount(0);
            }
        );

        const contactDetails = await hyrFormPage.getContactCountrySalaryDetails();


        console.log('\n--- Contact Table Details ---');

        for (const record of contactDetails) {
            console.log( `Contact : ${record.contact}; Country: ${record.country}; Salary: ${record.salary}`);
        }
    });


    test('Task 3 - Print objects with salary above and below 5000', async ({ hyrFormPage, captureScreenshot }) => {
        await captureScreenshot( 'Open the HYR Tutorials contact table', async () => {
                await hyrFormPage.navigateToHyrForm();
            }
        );

         await captureScreenshot( 'Verify the contact table is visible', async () => {
                await expect( hyrFormPage.contactTable, 'Contact table should be visible' ).toBeVisible();
            }
        );


        const contactDetails = await hyrFormPage.getContactCountrySalaryDetails();

        const salaryAbove5000 = contactDetails.filter(
            record => Number(record.salary) > 5000
        );

        const salaryBelow5000 = contactDetails.filter(
            record => Number(record.salary) < 5000
        );

        await captureScreenshot( 'Verify records have salary greater than 5000', async () => {
                expect( salaryAbove5000.length, 'At least one record should have salary above 5000' ).toBeGreaterThan(0);

                expect( salaryAbove5000.every(record => Number(record.salary) > 5000), 'Every printed record should have salary greater than 5000'
                ).toBe(true);
            }
        );

        console.log('\n--- Objects With Salary Greater Than 5000 ---');

        for (const record of salaryAbove5000) {
            console.log({
                contact: record.contact,
                country: record.country,
                salary: Number(record.salary)
            });
        }

        await captureScreenshot( 'Verify records have salary less than 5000', async () => {
                expect( salaryBelow5000.length, 'At least one record should have salary below 5000' ).toBeGreaterThan(0);

                expect( salaryBelow5000.every(record => Number(record.salary) < 5000), 'Every printed record should have salary less than 5000'
                ).toBe(true);
            }
        );

        console.log('\n--- Objects With Salary Less Than 5000 ---');

        for (const record of salaryBelow5000) {
            console.log({
                contact: record.contact,
                country: record.country,
                salary: Number(record.salary)
            });
        }
    });
});
