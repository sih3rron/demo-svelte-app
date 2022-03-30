<script>
	import Heading from '../components/Heading.svelte';
	import Card from '../components/Card.svelte';
	let title = "Here there be cocktails!";
</script>

<svelte:head>
	<title>{title}</title>
	<script src="https://www.googletagmanager.com/gtag/js?id=G-EBX5SBQDCQ"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-EBX5SBQDCQ');
	</script>
	<!-- Hotjar Tracking Code for https://www.siherron.co.uk -->
	<script src="../functions/hotjar.js"></script>
</svelte:head>

<Heading title={title} />
<Card />
