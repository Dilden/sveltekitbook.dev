<script>
  import Section from '$lib/Section.svelte'
  import Nav from '$lib/Nav.svelte';
  import Book from '$lib/Book.svelte'
  import About from '$lib/About.svelte';
  import Button from '$lib/tools/Button.svelte'
  import Author from '$lib/Author.svelte';
  import FAQ from '$lib/FAQ.svelte';
  // import Book2 from '$lib/Book2.svelte'
</script>

<Nav />
<Section anchor='buy' classes='w-full justify-items-center max-h-screen p-20 grid grid-cols-2 grid-rows-3 bg-amber-600 bg-gradient-to-b from-amber-400 to-orange-400'>
    <div class='row-span-3 justify-self-center'>
      <Book/>
    </div>
    <!-- <Book2 classes='row-span-3 justify-self-center' /> -->
    <h1 class='text-6xl justify-self-start text-center text-red-900'>SvelteKit Up and Running</h1>
    <h2 class='text-2xl justify-self-start text-center text-red-900'>Building High Performance Web Apps with a Next Generation Framework</h2>
    <h3 class='text-1xl justify-self-start text-center text-red-900'>By Dylan Hildenbrand</h3>
    <Button href='test' classes='col-start-2 justify-self-auto'/>
</Section>
<Section anchor='content' classes='w-full max-h-screen p-20 bg-slate-300 bg-gradient-to-b from-slate-300 to-zinc-500'>
  <About />
</Section>
<Section anchor='faq' classes='w-full max-h-screen p-20 bg-sky-400 bg-gradient-to-b from-zinc-400 to-sky-500'>
  <FAQ />
</Section>
<Section anchor='author' classes='w-full max-h-screen p-20 bg-slate-300'>
  <Author />
</Section>
