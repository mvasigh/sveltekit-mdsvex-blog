<script context="module">
	const files = import.meta.glob('./posts/*.{md,svx,svelte.md}');
	import { getAllPosts } from '$lib/util';
	import compareDesc from 'date-fns/compareDesc';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load() {
		const allPosts = await getAllPosts(files);
		const posts = allPosts.filter(([_, post]) => post.published);

		posts.sort(([_slugA, a], [_slugB, b]) => compareDesc(a.date, b.date));

		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import PageHead from '$lib/components/PageHead.svelte';
	import Article from '$lib/components/Article.svelte';
	import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';
	import ArticleDescription from '$lib/components/ArticleDescription.svelte';

	export let posts;
</script>

<PageHead title="Home" description="An awesome blog about development with Svelte" />

<p>
	This is a minimalistic example of a blog built with <a href="https://kit.svelte.dev">SvelteKit</a>
	and <a href="https://mdsvex.com/">MDsveX</a>.
	<a href="https://github.com/mvasigh/sveltekit-mdsvex-blog">View source code on Github.</a>
</p>

{#each posts as [slug, { title, author, description, date }]}
	<Article>
		<ArticleTitle {slug} {title} />
		<ArticleMeta {author} {date} />
		<ArticleDescription {description} {slug} />
	</Article>
{/each}

<slot />
