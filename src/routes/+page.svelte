<script>
  import Nav from '$lib/Nav.svelte';
  import Section from '$lib/Section.svelte';
  import Banner from '$lib/Banner.svelte'
  import About from '$lib/About.svelte';
  import Icons from '$lib/Icons.svelte';
  import Author from '$lib/Author.svelte';
  import FAQ from '$lib/FAQ.svelte';
  import Copyright from '$lib/Copyright.svelte';
</script>

<svelte:head>
  <title>SvelteKit Up and Running</title>
</svelte:head>
<Nav />
<Section classes='w-full relative p-5 lg:p-20  bg-[#f97141] shadow-inner'>
  <Icons />
</Section>
<Section id='buy' classes='w-full p-5 lg:p-20  bg-[#1a1a1a] bg-gradient-to-b from-[#1a1a1a] to-[#333232]'>
  <Banner />
</Section>
<Section id='icons' classes='w-full relative p-5 lg:p-20  bg-[#f97141] shadow-inner'>
  <Icons />
</Section>
<Section id='content' classes='w-full p-5 lg:p-20  bg-slate-300 bg-gradient-to-b from-slate-300 to-zinc-500 shadow-inner'>
  <About />
</Section>
<Section id='icons' classes='w-full relative p-5 lg:p-20  bg-[#f97141] shadow-inner'>
  <Icons />
</Section>
<Section id='author' classes='w-full p-5 lg:p-20  bg-slate-300'>
  <Author />
</Section>
<Section id='icons' classes='w-full relative p-5 lg:p-20  bg-[#f97141] shadow-inner'>
  <Icons />
</Section>
<Section id='faq' classes='w-full p-5 md:p-20 bg-[#1a1a1a] bg-gradient-to-b from-[#1a1a1a] to-[#333232] text-slate-200'>
  <FAQ />
</Section>
<Section id='icons' classes='w-full relative p-5 lg:p-20  bg-[#f97141] shadow-inner'>
  <Icons />
</Section>
<Section id='copyright' classes='w-full max-h-screen p-5 sm:p-20  bg-slate-300'>
  <Copyright />
</Section>
