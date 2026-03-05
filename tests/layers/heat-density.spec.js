// @ts-check
const { test, expect } = require('@playwright/test');
import { waitForMapLoaded, normalizeText } from '../utils';


// Test Values
test('Heat Density Total Layer returns correct values', async ({ page }) => {
    await page.goto('https://citiwattsdev.hevs.ch/');
  
    await page.getByRole('button', { name: 'Go to app' }).click();
    await page.getByRole('button', { name: 'Decline statistics cookies' }).click();

    // GO to Vienna
    await page.getByPlaceholder('Go to place...').click();
    await page.getByPlaceholder('Go to place...').fill('vienna');
    await page.getByPlaceholder('Go to place...').press('Enter');

    await waitForMapLoaded(page)

    // Select Area
    await page.locator('#map').click();
    await page.getByRole('tab', { name: 'Layers' }).click();
    await page.getByLabel('Heat density total', { exact: true }).check();
    
    // Select the layer
    const layerCheckbox = page.getByLabel('Heat density total', { exact: true });
    await layerCheckbox.check();
    await expect(layerCheckbox, "Selected layer should be checked").toBeChecked();


    // Check result data (only first row)
    const tableRows = page.locator('table.indicators-table tr.value-row');

    const row = tableRows.nth(0);
    const infoText = normalizeText(await row.locator('td').nth(0).textContent());
    const valueText = normalizeText(await row.locator('td').nth(1).textContent());

    expect(infoText,`Row 1 should have the correct info`).toContain('Heat demand total');
    expect(valueText, `Row 1 should have the correct value`).toContain('17 535.85 GWh/yr');
});