<script>
  export let title;

	//Imports
	import { onMount } from 'svelte';
	import { Context, userId } from '../functions/Context';
	import { Flags } from '../functions/Flags';
  let heading;

  onMount(async () => {
		const customer = new Context();
      heading = await Flags.getInstance(customer.known(userId));
      let newTitle = await heading.treatment("2022.April.Heading.TEMP","Here there be Cocktails!");
      title = newTitle.value;
	});
  
</script>

<div class="heading">
    <h1>{title}</h1>
</div>

<style>
@import url('https://fonts.googleapis.com/css?family=Berkshire+Swash&display=swap');

.heading {
  margin: 2em;
  border: 45px solid black;
  border-radius: 5.5em;
}

h1 {
  font-family: 'Berkshire Swash', cursive;
  font-size: 500%;
  text-align: center;
  padding: .45em;
}

</style>