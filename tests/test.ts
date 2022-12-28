import { expect, test } from '@playwright/test';

test('index page has expected content', async ({ page }) => {
	await page.goto('/');

	const articles = await page.$$('article');

	expect(await page.textContent('h1')).toBe('SvelteKit + MDsveX Blog');
	expect(articles.length).toBeGreaterThan(0);
	expect(articles.length).not.toBeGreaterThan(10);
	for (const article of articles) {
		expect(await article.$('a')).not.toBeFalsy();
	}
});

test('clicking on article title in home page navigates to the article', async ({ page }) => {
	await page.goto('/');
	const title = await page.textContent('article h3');

	await page.getByText(title || '').click();

	expect(await page.textContent('h2')).toBe(title);
});
