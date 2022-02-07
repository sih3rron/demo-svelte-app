<script>
	export let buttonClass = "primary";
	export let buttonText = "This is a primary button";
</script>

<button class={buttonClass}>
	{buttonText}
</button>

<style>
	
	button {
		min-width: 0.15rem;
		min-height: 0.10rem;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		border-radius: 0.25rem;
		margin: 0 auto;
		padding: 2%;
		color: white;
	}

	.primary {
		background-color: green;
	}

	.secondary {
		background-color: red;
	}

</style>