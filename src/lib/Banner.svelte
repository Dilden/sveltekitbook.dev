<script>
  import Button from '$lib/tools/Button.svelte'
  import Book from '$lib/Book.svelte'
  import Book2 from '$lib/Book2.svelte'
</script>

<div class='min-h-full grid grid-rows-[auto-1fr] lg:grid-rows-1 grid-cols-6 justify-items-center gap-y-28 lg:gap-y-3 m-2 lg:m-5'>
  <div class='flex flex-col row-start-2 lg:row-start-1 col-span-6 col-start-1 lg:col-span-3 lg:col-start-1 justify-center'>
    <Book />
    <Book2 />
  </div>
  <div class='flex flex-col row-start-1 col-span-4 col-start-2 lg:col-span-3 lg:col-start-4 lg:row-start-1 gap-y-5 m-2 lg:m-5'>
    <h1 class='text-6xl text-center text-slate-200'>SvelteKit Up and Running</h1>
    <h2 class='text-2xl text-center text-slate-200'>Leverage the power of a next-generation web framework to build high-performance web apps with ease</h2>
    <h3 class='text-xl text-center text-slate-200'>By Dylan Hildenbrand</h3>
    <Button classes='justify-center' text='Buy now!' href='https://www.packtpub.com/product/sveltekit-up-and-running/9781804615485'/>
  </div>
</div>
