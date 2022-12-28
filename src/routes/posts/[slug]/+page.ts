import type { PageLoad } from './$types';
import { slugFromPath } from '$lib/slugFromPath';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);

	let match: { path?: string; resolver?: App.MdsvexResolver } = {};
	for (const [path, resolver] of Object.entries(modules)) {
		if (slugFromPath(path) === params.slug) {
			match = { path, resolver: resolver as unknown as App.MdsvexResolver };
			break;
		}
	}

	const post = await match?.resolver?.();

	if (!post || !post.metadata.published) {
		throw error(404); // Couldn't resolve the post
	}

	return {
		component: post.default,
		frontmatter: post.metadata
	};
};
