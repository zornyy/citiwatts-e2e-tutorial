// @ts-check
const { test, expect } = require('@playwright/test');


// Test Values
test('Heat Density Total Layer returns correct values', async ({ page }) => {
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
    await expect(page.locator('tbody')).toContainText('5 005 424 cells');
});

test('Heat Density Non-Residential Sector Layer returns correct values', async ({ page }) => {
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
    await page.getByRole('button', { name: 'Heat density residential sector' }).click();
  
    await expect(page.locator('tbody')).toContainText('367 326.55 GWh/yr ');
    await expect(page.locator('tbody')).toContainText('5 005 424 cells ');
    await expect(page.locator('tbody')).toContainText('73.39 MWh/(ha*yr) ');
});

test('Heat Density Residential Sector Layer returns correct values', async ({ page }) => {
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
    await page.getByRole('button', { name: 'Heat density non-residential sector' }).click();
  
    await expect(page.locator('tbody')).toContainText('126 854.84 GWh/yr ');
    await expect(page.locator('tbody')).toContainText('5 005 424 cells');
    await expect(page.locator('tbody')).toContainText('25.34 MWh/(ha*yr) ');
});


// Test display
test.skip('Heat Density Total Layer displays correctly on map', async ({ page }) => {
    await page.goto('https://citiwattsdev.hevs.ch/');
  
    // France
    await page.getByRole('button', { name: 'Go to app' }).click();
    await page.getByRole('button', { name: 'Decline statistics cookies' }).click();
    await page.getByPlaceholder('Go to place...').click();
    await page.getByPlaceholder('Go to place...').fill('paris');
    await page.getByPlaceholder('Go to place...').press('Enter');
    await page.locator('#map').click();
    await page.getByRole('button', { name: 'Layers' }).click();
    await page.getByRole('button', { name: 'Heat density total' }).click();
  
    await expect(page.locator('#map')).toHaveScreenshot();
});

test.skip('Heat Density Residential Sector Layer displays correctly on map', async ({ page }) => {
    await page.goto('https://citiwattsdev.hevs.ch/');
  
    // France
    await page.getByRole('button', { name: 'Go to app' }).click();
    await page.getByRole('button', { name: 'Decline statistics cookies' }).click();
    await page.getByPlaceholder('Go to place...').click();
    await page.getByPlaceholder('Go to place...').fill('paris');
    await page.getByPlaceholder('Go to place...').press('Enter');
    await page.locator('#map').click();
    await page.getByRole('button', { name: 'Layers' }).click();
    await page.getByRole('button', { name: 'Heat density residential sector' }).click();
  
    await expect(page.locator('#map')).toHaveScreenshot();
});

test.skip('Heat Density Non Residential Layer displays correctly on map', async ({ page }) => {
    await page.goto('https://citiwattsdev.hevs.ch/');
  
    // France
    await page.getByRole('button', { name: 'Go to app' }).click();
    await page.getByRole('button', { name: 'Decline statistics cookies' }).click();
    await page.getByPlaceholder('Go to place...').click();
    await page.getByPlaceholder('Go to place...').fill('paris');
    await page.getByPlaceholder('Go to place...').press('Enter');
    await page.locator('#map').click();
    await page.getByRole('button', { name: 'Layers' }).click();
    await page.getByRole('button', { name: 'Heat density non-residential sector' }).click();
  
    await expect(page.locator('#map')).toHaveScreenshot();
});
