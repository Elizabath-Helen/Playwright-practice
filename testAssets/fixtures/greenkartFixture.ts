
import { test as base, expect } from '@playwright/test';
import GreenKartPage from '../pages/greenkartPage';

type GreenKartFixtures = {
    greenKartPage: GreenKartPage;
    captureScreenshot: (
        name: string,
        action: () => Promise<void>
    ) => Promise<void>;
};

export const test = base.extend<GreenKartFixtures>({
    greenKartPage: async ({ page }, use) => {
        await use(new GreenKartPage(page));
    },

    captureScreenshot: async ({ page }, use) => {
        const runStep = async (
            name: string,
            action: () => Promise<void>
        ) => {
            await test.step(name, async () => {
                try {
                    await action();
                } finally {
                    try {
                        const screenshot = await page.screenshot({
                            fullPage: true
                        });

                        await test.info().attach(`${name}.png`, {
                            body: screenshot,
                            contentType: 'image/png'
                        });
                    } catch (error) {
                        console.warn(
                            `Could not capture screenshot for step "${name}"`,
                            error
                        );
                    }
                }
            });
        };

        await use(runStep);
    }
});

export { expect };