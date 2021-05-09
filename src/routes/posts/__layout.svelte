<script context="module">
	import { getAllPosts, fromEntries } from '$lib/util';

	const files = import.meta.glob('./*.{md,svx,svelte.md}');

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page }) {
		const slug = page.path.replace('/posts/', '');
		const posts = await getAllPosts(files);
		const post = fromEntries(posts)[slug];

		if (!post || !post.published) {
			return {
				status: 404,
				error: new Error('Post could not be found')
			};
		}

		return {
			props: {
				post
			}
		};
	}
</script>

<script>
	import PageHead from '$lib/components/PageHead.svelte';
	import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';

	export let post;
</script>

<PageHead title={post.title} description={post.description} />

<ArticleTitle title={post.title} />
<ArticleMeta author={post.author} date={post.date} />

<slot />
