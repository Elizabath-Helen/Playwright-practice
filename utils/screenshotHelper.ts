
import { test } from '@playwright/test';
import type { Page } from '@playwright/test';

export async function captureScreenshot(
    page: Page,
    stepName: string,
    screenshotName: string,
    action: () => Promise<void>
) {
    await test.step(stepName, async () => {
        try {
            await action();
        } finally {
            const screenshotPath = `screenshots/${screenshotName}.png`;

            await page.screenshot({
                path: screenshotPath,
                fullPage: true
            });

            await test.info().attach(screenshotName, {
                path: screenshotPath,
                contentType: 'image/png'
            });
        }
    });
}