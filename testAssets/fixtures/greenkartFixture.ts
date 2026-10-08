import { test as base } from '@playwright/test';
import GreenKartPage from '../pages/greenKartPage';

type Fixtures = {
    greenKartPage: GreenKartPage;
};

export const test = base.extend<Fixtures>({
    greenKartPage: async ({ page }, use) => {
        const greenKartPage = new GreenKartPage(page);
        await use(greenKartPage);
    }
});

export { expect } from '@playwright/test';