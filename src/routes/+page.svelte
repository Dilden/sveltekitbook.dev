<script>
  import Button from '$lib/tools/Button.svelte'
  import Section from '$lib/Section.svelte'
  import Book from '$lib/Book.svelte'
</script>

<Section classes='w-full justify-items-center max-h-screen p-20 grid gap-4 grid-cols-2 grid-rows-3 bg-amber-600 bg-gradient-to-b from-amber-400 to-orange-400'>
    <Book classes='row-span-3 justify-self-center'/>
    <h1 class='text-6xl justify-self-start text-center text-red-900'>SvelteKit Up and Running</h1>
    <h2 class='text-2xl justify-self-start text-center text-red-900'>By Dylan Hildenbrand</h2>
    <Button classes='col-start-2 justify-self-auto'/>
</Section>
<Section classes='w-full max-h-screen p-20 bg-slate-300 bg-gradient-to-b from-slate-300 to-zinc-500'/>
<Section classes='w-full max-h-screen p-20 bg-sky-400 bg-gradient-to-b from-zinc-400 to-sky-500'/>
<Section classes='w-full max-h-screen p-20 bg-slate-300'/>
