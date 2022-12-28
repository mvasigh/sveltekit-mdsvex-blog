# `sveltekit-mdsvex-blog`

Minimalistic blog site template, built with [TypeScript](https://www.typescriptlang.org/), [Svelte](https://svelte.dev), [SvelteKit](https://kit.svelte.dev) and [MDsveX](https://mdsvex.com).

[Live demo](https://sveltekit-mdsvex-blog.netlify.app)

## Getting started

First, clone the repository and navigate to the project directory:

```bash
git clone https://github.com/mvasigh/sveltekit-mdsvex-blog.git my-blog
cd my-blog
```

If you want to have a fresh commit history, blow away the `.git` directory and re-initialize the repository locally:

```bash
rm -rf .git
git init
```

Next, install dependencies with NPM:

```bash
npm install # or `pnpm i`
```

Finally, run the local development server:

```bash
npm run dev # or `pnpm dev`
```

## Building for production

This project is pre-configured with [`@sveltejs/adapter-static`](https://github.com/sveltejs/kit/tree/master/packages/adapter-static). This makes deploying to static site hosts, such as Netlify, super easy. Simply add your site's repository to your static site host of choice, configure the build command to be `npm run build` and the build output directory to be `build`.

## Starting from scratch

You may want to create your own project from scratch using `create-svelte`. You can do so easily and add MDsveX support to your project using `svelte-add`:

1. Create a new project per the [SvelteKit docs](https://kit.svelte.dev/docs#introduction-getting-started)
2. [Add MDsveX to your project](https://github.com/svelte-add/mdsvex#-adding-to-sveltekit) using svelte-add
3. Configure your site to your liking; files with the `.svelte.md`, `.md` and `.svx` extensions will be picked up by MDsveX by default

## Questions?

Feel free to ask any questions that you have! I am happy to try and answer them. The best way to reach me is by Mastodon, [@mehdi@mastodon.gamedev.place](https://mastodon.gamedev.place/@mehdi), but you can also [open an issue in this repository](https://github.com/mvasigh/sveltekit-mdsvex-blog/issues/new).
