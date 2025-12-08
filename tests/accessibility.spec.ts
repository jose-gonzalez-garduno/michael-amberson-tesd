import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility smoke tests', () => {
  test('Homepage (English) should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/en');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Homepage (Spanish) should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('/es');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
