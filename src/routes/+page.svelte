<script>
	import Nav from '$lib/Nav.svelte';
	import Section from '$lib/Section.svelte';
	import Banner from '$lib/Banner.svelte';
	import About from '$lib/About.svelte';
	import Icons from '$lib/Icons.svelte';
	import Author from '$lib/Author.svelte';
	import FAQ from '$lib/FAQ.svelte';
	import Copyright from '$lib/Copyright.svelte';
</script>

<svelte:head>
	<title>SvelteKit Up and Running</title>
	<meta
		data-key="description"
		name="description"
		content="SvelteKit Up and Running: Leverage the power of a next-generation web framework to build high-performance web apps with ease"
	/>
</svelte:head>
<Nav />
<Section id="buy" classes="w-full relative p-10 lg:p-20  bg-[#f97141] shadow-inner">
	<Icons />
</Section>
<Section classes="w-full p-5 lg:p-20  bg-[#1a1a1a] bg-gradient-to-b from-[#333232] to-[#1a1a1a]">
	<Banner />
</Section>
<Section id="content" classes="w-full relative p-5 lg:p-20  bg-[#f97141] shadow-inner">
	<Icons />
</Section>
<Section
	classes="w-full p-5 lg:p-20  bg-slate-300 bg-gradient-to-b from-slate-300 to-zinc-300 shadow-inner"
>
	<About />
</Section>
<Section id="author" classes="w-full relative p-5 lg:p-20  bg-[#f97141] shadow-inner">
	<Icons />
</Section>
<Section classes="w-full p-5 lg:p-20  bg-slate-300">
	<Author />
</Section>
<Section id="faq" classes="w-full relative p-5 lg:p-20  bg-[#f97141] shadow-inner">
	<Icons />
</Section>
<Section
	classes="w-full p-5 md:p-20 bg-[#1a1a1a] bg-gradient-to-b from-[#1a1a1a] to-[#333232] text-slate-200"
>
	<FAQ />
</Section>
<Section id="copyright" classes="w-full relative p-5 lg:p-20  bg-[#f97141] shadow-inner">
	<Icons />
</Section>
<Section classes="w-full max-h-screen p-5 sm:p-20  bg-slate-300">
	<Copyright />
</Section>
