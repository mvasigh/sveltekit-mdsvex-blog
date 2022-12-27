<script>
	export let author;
	export let date;

	const formattedDate = new Date(date).toDateString();
</script>

<p>
	<span class="author">{author}</span>
	<span class="date">{formattedDate}</span>
</p>

<style>
  p {
    margin: 0;
    margin-bottom: calc(var(--spacing-unit) * 4);
  }

	.author {
    font-weight: bold;
		margin-right: calc(var(--spacing-unit) * 2);
	}

	.date {
		color: var(--color-text-secondary);
	}
</style>
