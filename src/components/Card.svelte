<script>
	import Button from '../components/Button.svelte';
	import { onMount } from 'svelte';
	export const id = 0;
	export const name = "Not Known";
	export const description  = "Not Known";
	export const image = "https://via.placeholder.com/150";
	let littleMonsters = [];

	onMount(async () => {
		const res = await fetch("https://mhw-db.com/monsters");
		littleMonsters = await res.json();
	});

</script>

<div class="monsters">
	<ul>
	{#each littleMonsters as monster}
		<li class="card" id={monster.id.toString()}>
			<div class="name">{monster.name}</div>
			<div class="desc">{monster.description}</div>
			<img src={image} alt={monster.description}/>
		</li>
	{:else}
	<p>loading...</p>
	{/each}
	</ul>
</div>

<style>
li {
	display: inline-block;
	float: left;
}

.card {
	background-color: rgb(0, 0, 0);
	border: 1px solid rgb(30, 136, 229);
	border-radius: 10px;
	box-shadow: 1px 1px 4px rgba(0,0,0,0.2);
	width: 350px;
	height: 350px;
	display: flex;
	flex-direction: column;
	margin: 0.25rem;
	font-family: Roboto, sans-serif;
	color: white;
}

.card .name {
	font-weight: bold;
	font-size: 200%;
	padding: 0.50rem 1rem;
}

.card .desc {
  padding: 0.5rem 1rem;
  font-size: 70%;
  order: 99;
}

.card img {
  margin: 0 auto;
}

</style>