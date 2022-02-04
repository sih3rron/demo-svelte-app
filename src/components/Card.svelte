<script>
	import Button from '../components/Button.svelte';
	import { onMount } from 'svelte';
	export const id = 0;
	export const name = "Not Known";
	export const description  = "Not Known";
	export const image = "https://via.placeholder.com/150";
	const gin = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";
	const vodka = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";
	let cocktails = [];

	onMount(async () => {
		const res = await fetch(gin);
		cocktails = await res.json();
		console.log(cocktails.drinks)
		cocktails = cocktails.drinks;
	});

</script>

<div class="monsters">
	<ul>
	{#each cocktails as cocktail,i}
		<li class="card" id={i.toString()}>
			<div class="name">{cocktail.strDrink}</div>
			<img src={cocktail.strDrinkThumb == null ? "https://via.placeholder.com/150" : cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
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
	font-size: 100%;
	padding: 0.50rem 1rem;
	margin-bottom: 10%;
}

.card .desc {
  padding: 0.5rem 1rem;
  font-size: 70%;
  order: 99;
}

.card img {
  margin: 0 auto;
  background-color: black;
  width: 250px;
}

</style>