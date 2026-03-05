// @ts-check
const { test, expect } = require('@playwright/test');

test('Heat Density Total exists', async ({ page }) => {
  await page.goto('https://citiwattsdev.hevs.ch/');

  await page.getByRole('button', { name: 'GO TO APP' }).click();
  if (page.getByText('Decline statistics cookies')) {
    await page.getByText('Decline statistics cookies', { exact: true }).click();
  }
  await page.getByRole('tab', { name: 'Layers' }).click();

  await expect(page.getByLabel('Heat density total', { exact: true })).toBeVisible();
});
