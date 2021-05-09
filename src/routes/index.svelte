<script context="module">
  const modules = import.meta.glob('./posts/*.md');

  const filenameRegex = /(?<filename>.+)\.(svelte\.)?md/i;

  console.log(modules);
</script>