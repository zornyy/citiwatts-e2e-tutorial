import { test as base, expect } from '@playwright/test';


// Variables d'environnement
const BASE_HOST = 'citiwattsdev.hevs.ch';
const BASE_URL = `https://${BASE_HOST}`;


export { BASE_HOST, BASE_URL };

/**
 * Attendre le chargement de la map leaflet
 */
export async function waitForMapLoaded(page) {
    await expect(page.locator('#map.leaflet-container'), "Leaflet container should be visible").toBeVisible({ timeout: 15_000 });
    
    // Attendre qu'au moins une tuile soit chargée
    await expect(page.locator('.leaflet-tile-pane img.leaflet-tile').first(), "At least 1 leaflet tile should be visible").toBeVisible({ timeout: 15_000 });
    
    // Attendre que toutes les tuiles soient bien chargées et que le loading soit terminé
    await page.waitForFunction(() => {
        const map = document.querySelector('#map');
        if (map?.classList.contains('leaflet-loading')) return false;
        const imgs = Array.from(document.querySelectorAll('.leaflet-tile'));
        return imgs.length > 0 && imgs.every(img => img.complete && img.naturalWidth > 0);
    }, { timeout: 15_000 });
}

/**
 * Normalisation du texte pour les comparaisons
 */
export function normalizeText(text, removeAllSpaces = false) {
    if (!text) return '';
    return removeAllSpaces 
        ? text.replace(/\s+/g, '').trim() 
        : text.replace(/\s+/g, ' ').trim();
}