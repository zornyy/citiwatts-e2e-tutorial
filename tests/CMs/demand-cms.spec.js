const { test, expect } = require('@playwright/test');


// Returns correct values
test('CM - Scale Heat and Cool Densidy Maps returns correct values', async ({ page }) => {
    test.setTimeout(120_000)

    await page.goto('https://citiwattsdev.hevs.ch/');
    await page.getByRole('button', { name: 'Go to app' }).click();
    await page.getByRole('button', { name: 'Decline statistics cookies' }).click();
    await page.getByLabel('NUTS 3').check();
    await page.getByPlaceholder('Go to place...').click();
    await page.getByPlaceholder('Go to place...').fill('Vienna');
    await page.getByPlaceholder('Go to place...').press('Enter');
    await page.locator('#map').click();
    await page.getByRole('button', { name: 'Calculation Modules' }).click();
    await page.getByRole('button', { name: 'CM - Scale heat and cool' }).click();
    await page.getByRole('button', { name: 'Run CM' }).click();
    await expect(page.getByRole('table')).toContainText('17 535.85 GWh/yr');
    await expect(page.getByRole('table')).toContainText('Heat density total multiplied by 1.0');
});

test('CM - Scale Heat and Cool Densidy Maps dispalys results on map correctly', async ({ page }) => {
    test.setTimeout(120_000)

    await page.goto('https://citiwattsdev.hevs.ch/');
    await page.getByRole('button', { name: 'Go to app' }).click();
    await page.getByRole('button', { name: 'Decline statistics cookies' }).click();
    await page.getByLabel('NUTS 3').check();
    await page.getByPlaceholder('Go to place...').click();
    await page.getByPlaceholder('Go to place...').fill('Vienna');
    await page.getByPlaceholder('Go to place...').press('Enter');
    await page.locator('#map').click();
    await page.getByRole('button', { name: 'Calculation Modules' }).click();
    await page.getByRole('button', { name: 'CM - Scale heat and cool' }).click();
    await page.getByRole('button', { name: 'Run CM' }).click();
    await expect(page.locator('#map')).toHaveScreenshot();
  });