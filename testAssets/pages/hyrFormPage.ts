
import { Page, Locator } from '@playwright/test';

export default class HyrFormPage {
    readonly page: Page;

    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly repeatPasswordInput: Locator;

    readonly contactTable: Locator;
    readonly contactRows: Locator;

    constructor(page: Page) {
        this.page = page;

        this.firstNameInput = page.locator('input[name="name"]').nth(0);
        this.lastNameInput = page.locator('input[name="name"]').nth(1);
        this.emailInput = page.locator('input[type="text"][required]');
        this.passwordInput = page.locator('input[type="password"]').nth(0);
        this.repeatPasswordInput = page.locator('input[type="password"]').nth(1);

        this.contactTable = page.locator('#contactList');
        this.contactRows = this.contactTable.locator('tbody tr:has(td)');
    }

    async navigateToHyrForm() {
        await this.page.goto('https://www.hyrtutorials.com/p/add-padding-to-containers.html' );
    }

    async fillForm(data: { firstName: string; lastName: string; email: string; password: string; repeatPassword: string; }) {
        await this.firstNameInput.fill(data.firstName);
        await this.lastNameInput.fill(data.lastName);
        await this.emailInput.fill(data.email);
        await this.passwordInput.fill(data.password);
        await this.repeatPasswordInput.fill(data.repeatPassword);
    }

    async getFormInputValues() {
        return {
            firstName: await this.firstNameInput.inputValue(),
            lastName: await this.lastNameInput.inputValue(),
            email: await this.emailInput.inputValue(),
            password: await this.passwordInput.inputValue(),
            repeatPassword: await this.repeatPasswordInput.inputValue()
        };
    }

    async getContactTableDetails() {
        const headerCells = this.contactTable.locator('tr').first().locator('th');

        const headers = (await headerCells.allInnerTexts()).map( header => header.trim());

        const details: Record<string, string>[] = [];
        const rowCount = await this.contactRows.count();

        for (let i = 0; i < rowCount; i++) {
            const cells = this.contactRows.nth(i).locator('td');
            const record: Record<string, string> = {};

            for (let j = 0; j < headers.length; j++) {
                const header = headers[j];

                if (!header) {
                    continue;
                }

                record[header] = (await cells.nth(j).innerText()).trim();
            }

            details.push(record);
        }

        return details;
    }
}
