// @ts-check
const { test, expect } = require('@playwright/test');

test('Heat Density Total exists', async ({ page }) => {
  await page.goto('https://citiwattsdev.hevs.ch/'); // Navigae

  // Close popups
  await page.getByRole('button', { name: 'GO TO APP' }).click();
  if (page.getByText('Decline statistics cookies')) {
    await page.getByText('Decline statistics cookies', { exact: true }).click();
  }

  // Open layers tab
  await page.getByRole('tab', { name: 'Layers' }).click();

  // Assert that the layer exists
  await expect(page.getByLabel('Heat density total', { exact: true })).toBeVisible();
});
