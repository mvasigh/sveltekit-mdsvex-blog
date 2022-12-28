import type { PageServerLoad } from './$types';
import { slugFromPath } from '$lib/slugFromPath';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url }) => {
	// Use a `limit` querystring parameter to fetch a limited number of posts
	// e.g. fetch('posts.json?limit=5') for 5 most recent posts
	const limit = Number(url.searchParams.get('limit') ?? Infinity);
	const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);

	if (Number.isNaN(limit)) {
		throw error(400);
	}

	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(
			(post) =>
				({
					slug: slugFromPath(path),
					...(post as unknown as App.MdsvexFile).metadata
				} as App.BlogPost)
		)
	);

	const posts = await Promise.all(postPromises);
	const publishedPosts = posts.filter((post) => post.published).slice(0, limit);

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return { posts: publishedPosts };
};
