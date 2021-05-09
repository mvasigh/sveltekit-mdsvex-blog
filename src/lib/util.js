const slugRegex = /([\w-]+)\.(svelte\.md|md|svx)/i;

export async function getAllPosts(globArr) {
	const postPromises = [];

	for (let [path, resolver] of Object.entries(globArr)) {
		const match = path.match(slugRegex);

		if (!match || !match[1]) continue;

		const slug = match[1];
		const promise = resolver().then((post) => [slug, post.metadata]);
		postPromises.push(promise);
	}

	return Promise.all(postPromises);
}

export function fromEntries(entries) {
	return entries.reduce((acc, [key, val]) => {
		acc[key] = val;
		return acc;
	}, {});
}
