import { slugFromPath } from '$lib/util';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const modules = import.meta.glob('./*.{md,svx,svelte.md}');

	const postPromises = [];

	for (let [path, resolver] of Object.entries(modules)) {
		const slug = slugFromPath(path);
		const promise = resolver().then((post) => ({
			slug,
			...post.metadata
		}));

		postPromises.push(promise);
	}

	const posts = await Promise.all(postPromises);
	const publishedPosts = posts.filter((post) => post.published);

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return {
		body: publishedPosts
	};
}
