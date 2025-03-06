// @ts-check
const { test, expect } = require('@playwright/test');

test('Heat Density Total exists', async ({ page }) => {
  await page.goto('https://citiwattsdev.hevs.ch/');

  await page.getByRole('button', { name: 'GO TO APP' }).click();
  await page.getByText('Decline statistics cookies', { exact: true }).click();
  await page.getByText('Layers', { exact: true }).click();

  await expect(page.getByRole('button', { name: 'HEAT DENSITY TOTAL' })).toBeVisible();
});


