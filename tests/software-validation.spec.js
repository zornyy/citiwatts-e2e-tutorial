// @ts-check
const { test, expect } = require('@playwright/test');

test('Heat demand total and Counted Cells displays correctly', async ({ page }) => {
    await page.goto('https://citiwattsdev.hevs.ch/');
  
    // France
    await page.getByRole('button', { name: 'Go to app' }).click();
    await page.getByRole('button', { name: 'Decline statistics cookies' }).click();
    await page.getByPlaceholder('Go to place...').click();
    await page.getByPlaceholder('Go to place...').fill('paris');
    await page.getByPlaceholder('Go to place...').press('Enter');
    await page.locator('#map').click();
    await page.getByRole('button', { name: 'Load results' }).click();
    await page.getByRole('button', { name: 'Layers' }).click();
    await page.getByRole('button', { name: 'Heat density total' }).click();
  
    await expect(page.locator('tbody')).toContainText('494 181.4 GWh/yr');
    await expect(page.locator('tbody')).toContainText('5 005 424 cells');
  
    // Denmark
    // await page.getByRole('button', { name: 'Heat density total' }).getByRole('checkbox').uncheck();
    // await page.getByRole('button', { name: 'Tools' }).click();
    // await page.getByRole('button', { name: 'Clear 1 area' }).click();
    // await page.getByPlaceholder('Go to place...').click();
    // await page.getByPlaceholder('Go to place...').fill('Copenhaguen');
    // await page.getByPlaceholder('Go to place...').press('Enter');
    // await page.locator('#map').click();
    // await page.getByRole('button', { name: 'Layers' }).click();
    // await page.getByRole('button', { name: 'Heat density total' }).click();
    // await page.getByRole('button', { name: 'Tools' }).click();
    // await page.getByRole('button', { name: 'Load results' }).click();
  
    // await expect(page.locator('tbody')).toContainText('56 014.54 GWh/yr');
    // await expect(page.locator('tbody')).toContainText('486 718 cells');
});
  
test.skip('Building volumes total layer on Geneva', async ({ page }) => {
    await page.goto('https://citiwattsdev.hevs.ch/');
    await page.getByRole('button', { name: 'Go to app' }).click();
    await page.getByRole('button', { name: 'Decline statistics cookies' }).click();
    await page.getByPlaceholder('Go to place...').click();
    await page.getByPlaceholder('Go to place...').fill('geneva');
    await page.getByPlaceholder('Go to place...').press('Enter');
    await page.getByRole('button', { name: 'Layers' }).click();
    await page.getByRole('button', { name: 'Building volumes total' }).getByRole('checkbox').check();

    await expect(page).toHaveScreenshot('building-volumes-total_geneva.png')
});

test.skip('test', async ({ page }) => {
    await page.goto('https://citiwattsdev.hevs.ch/');
    await page.getByRole('button', { name: 'Go to app' }).click();
    await page.getByRole('button', { name: 'Decline statistics cookies' }).click();
    await page.getByLabel('NUTS 3').check();
    await page.getByRole('button', { name: 'Tools' }).click();
    await page.locator('.selection-tools-radios > div:nth-child(2)').click();

    await page.waitForSelector("#map");
    const mapElement = await page.locator("#map")
    const boundingBox = await mapElement.boundingBox();

    

    if (boundingBox) {
        const startX = boundingBox.x + boundingBox.width / 10; // Start 25% from the left
        const startY = boundingBox.y + boundingBox.height / 10; // Start 25% from the top
        const endX = boundingBox.x + (boundingBox.width * 3) / 10; // End 75% from the left
        const endY = boundingBox.y + (boundingBox.height * 3) / 10; // End 75% from the top

        await page.mouse.move(startX, startY); // Move to the starting point
        await page.mouse.down(); // Press down the mouse button
        await page.mouse.move(endX, endY, { steps: 10 }); // Drag to the ending point (smooth movement)
        await page.mouse.up(); // Release the mouse button

        await page.getByRole('button', { name: 'What the fuck is going on out here hey ?' }).click()
    } else {
        throw new Error("Failed to generate drag and drop coordinates for the map");
    }

    

    // await page.locator('app-tools-tab').getByRole('button').first().click();
});