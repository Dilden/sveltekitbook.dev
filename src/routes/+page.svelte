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
<!-- <Section id='buy' classes='w-full max-h-screen p-20 bg-[#1a1a1a] bg-gradient-to-b from-[#333232] to-[#1a1a1a]'> -->
<Section id='buy' classes='w-full max-h-screen p-20 bg-[#1a1a1a] bg-gradient-to-b from-[#1a1a1a] to-[#333232]'>
  <Banner />
</Section>
<Section id='content' classes='w-full max-h-screen p-20 bg-slate-300 bg-gradient-to-b from-slate-300 to-zinc-500 shadow-inner'>
  <About />
</Section>
<Section id='icons' classes='w-full relative max-h-screen p-20 bg-[#f97141] shadow-inset'>
  <span class='absolute z-10 h-full w-[275px] top-0 right-[25%] bg-gradient-o'></span>
  <span class='bg-[#1a1a1a80] z-10 absolute h-full w-1/4 top-0 right-0'></span>
  <Icons />
</Section>
<Section id='author' classes='w-full max-h-screen p-20 bg-slate-300'>
  <Author />
</Section>
<Section id='faq' classes='w-full max-h-screen p-20 bg-[#1a1a1a] bg-gradient-to-b from-[#1a1a1a] to-[#333232]'>
  <FAQ />
</Section>
<Section id='copyright' classes='w-full max-h-screen p-10 bg-slate-300'>
  <Copyright />
</Section>
