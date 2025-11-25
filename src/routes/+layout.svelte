<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Agbalumo&display=swap" rel="stylesheet">
</svelte:head>

{@render children?.()}
