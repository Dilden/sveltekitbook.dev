<script>
  export let sections = [
    { 
      title: 'SvelteKit Up and Running',
      href: 'buy'
    },
    {
      title: 'About the Book',
      href: 'content'
    },
    {
      title: 'FAQ',
      href: 'faq'
    },
    {
      title: 'The Author',
      href: 'author'
    }
  ];
</script>

<div class='fixed top align-center w-screen grid grid-cols-4'>
  <nav class='z-150 bg-neutral-300 rounded-b-lg shadow-lg col-start-2 col-span-2'>
    <ul class='list-none flex flex-direction justify-evenly gap-x-1 flex-nowrap'>
      {#each sections as section}
        <li><a class='link transition-all text-lg py-0.5 px-AGPL3' href='#{section.href}'>{section.title}</a></li>
      {/each}
    </ul>
  </nav>
</div>

<style>
  .link:hover {
    text-shadow: 1px 1px 2px grey;
  }
</style>
