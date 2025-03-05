// @ts-check
const { test, expect } = require('@playwright/test');

test('Heat Density Total exists', async ({ page }) => {
  await page.goto('https://citiwattsdev.hevs.ch/');

  await page.getByRole('button', { name: 'GO TO APP' }).click();
  await page.getByText('Decline statistics cookies', { exact: true }).click();
  await page.getByText('Layers', { exact: true }).click();

  await expect(page.getByRole('button', { name: 'HEAT DENSITY TOTAL' })).toBeVisible();
});

test('Works as expected - CM - Scale heat and cool density map', async ({ page }) => {
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


