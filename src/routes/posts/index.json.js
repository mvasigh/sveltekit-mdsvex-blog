const slug = path => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

export async function getAllPosts(globArr) {
	const postPromises = [];

	for (let [path, resolver] of Object.entries(globArr)) {
		const match = path.match(slugRegex);

		if (!match || !match[1]) continue;

		const slug = match[1];
		const promise = resolver().then((post) => [
			slug,
			{
				...post.metadata,
				date: new Date(post.metadata.date)
			}
		]);
		postPromises.push(promise);
	}

	return Promise.all(postPromises);
}


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get(req) {
	const files = import.meta.glob('./posts/*.{md,svx,svelte.md}');

  

  console.log(req);

}