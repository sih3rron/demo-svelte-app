<script>
	import Heading from '../components/Heading.svelte';
	import Card from '../components/Card.svelte';
	let title = "Here there be monsters!";
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>


<Heading title={title} />

<p>Find your poison...</p>

<Card />
