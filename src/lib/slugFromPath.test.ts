import { describe, it, expect } from 'vitest';
import { slugFromPath } from './slugFromPath';

describe('slugFromPath', () => {
	it('extracts slug from paths correctly', () => {
		const cases = [
			{
				path: '/foo/bar/test-slug.md',
				expected: 'test-slug'
			},
			{
				path: '/foo/bar/test-slug.svx',
				expected: 'test-slug'
			},
			{
				path: '/foo/bar/test-slug.svelte.md',
				expected: 'test-slug'
			}
		];

		cases.forEach(({ path, expected }) => expect(slugFromPath(path)).toBe(expected));
	});

	it('returns null for unknown extension', () => {
		const path = '/foo/bar/test-slug.abc';

		expect(slugFromPath(path)).toBeNull();
	});

	it('returns null for no extension', () => {
		const path = '/foo/bar/test-slug';

		expect(slugFromPath(path)).toBeNull();
	});
});
