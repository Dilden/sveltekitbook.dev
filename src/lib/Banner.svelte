<script>
  import Button from '$lib/tools/Button.svelte'
  // import Book from '$lib/Book.svelte'
  import Book2 from '$lib/Book2.svelte'
</script>

<div class='grid grid-rows-4 grid-cols-2 justify-items-center'>
  <div class='row-span-4 flex flex-col justify-center'>
    <Book2 />
  </div>
  <!-- <Book2 classes='row-span-3 justify-self-center' /> -->
  <h1 class='text-6xl col-start-2 text-center text-slate-200'>SvelteKit Up and Running</h1>
  <h2 class='text-2xl col-start-2 text-center text-slate-200'>Building High Performance Web Apps with a Next Generation Framework</h2>
  <h3 class='text-xl col-start-2 text-center text-slate-200'>By Dylan Hildenbrand</h3>
  <Button href='https://www.packtpub.com/product/sveltekit-up-and-running/9781804615485' classes='col-start-2 justify-stretch'/>
</div>
