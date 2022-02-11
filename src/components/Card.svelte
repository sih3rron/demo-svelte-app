<script>
	//Imports
	import { onMount } from 'svelte';
	import { Context, userId } from '../functions/Context';
	import { Flags } from '../functions/Flags';

	//Props
	export const id = 0;
	export const name = "Not Known";
	export const image = "https://via.placeholder.com/150";

	let cocktails = [];
	let drinks;

	//onMount Data Collection
	onMount(async () => {
		const customer = new Context();
		drinks = await Flags.getInstance(customer.known("user1418233"));
		//console.log(userId);
		let fancy = await drinks.treatment("2022.Feb.Tubthumper.TEMP","Vodka");
		let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${fancy.value}`;
		const res = await fetch(url);
		cocktails = await res.json();
		cocktails = cocktails.drinks;
	});

	const handleClick = function(choice){
		drinks.metric("Select my Drink", {"Drink_Choice": choice});
		console.log(choice);
	}
	
</script>

<div class="cocktails">
	<ul>
		{#each cocktails as cocktail,i}
			<li class="card" id={i.toString()} on:click={handleClick(cocktail.strDrink)}>
				<div class="name" id={cocktail.idDrink}>{cocktail.strDrink}</div>
				<img src={cocktail.strDrinkThumb == null ? "https://via.placeholder.com/150" : cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
			</li>
		{:else}
			<p>loading...</p>
		{/each}
	</ul>
</div>

<style>
ul {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}

li {
	display: inline-block;
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

.card img {
  margin: 0 auto;
  background-color: black;
  width: 250px;
}

</style>