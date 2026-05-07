import { expect, test } from '@playwright/test';

test.describe('SEO guards', () => {
  test('homepage has a single title and absolute canonical', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('title')).toHaveCount(1);

    const canonicalHref = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonicalHref).toMatch(/^https:\/\/vnr\.co\.za\/?$/);

    const robotsMeta = await page.locator('meta[name="robots"]').getAttribute('content');
    expect((robotsMeta || '').toLowerCase()).not.toContain('noindex');
  });

  test('service page canonical stays on production domain', async ({ page }) => {
    await page.goto('/services/tax-advisory');

    const canonicalHref = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonicalHref).toBe('https://vnr.co.za/services/tax-advisory');

    const ogUrl = await page.locator('meta[property="og:url"]').getAttribute('content');
    expect(ogUrl).toBe('https://vnr.co.za/services/tax-advisory');
  });
});
