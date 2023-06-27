<script>
  export let sections = [
    { 
      title: 'Buy Now',
      href: 'buy'
    },
    {
      title: 'Book',
      href: 'content'
    },
    {
      title: 'Author',
      href: 'author'
    },
    {
      title: 'FAQ',
      href: 'faq'
    },
  ];
</script>

<div class='fixed top align-center w-screen grid grid-cols-4 z-30'>
  <nav class='z-150 bg-[#323131] rounded-b-lg drop-shadow-lg col-start-2 col-span-2'>
    <ul class='list-none flex flex-direction justify-evenly gap-x-0.5 gap-y-0 flex-nowrap'>
      {#each sections as section, x}
        <li class='w-full text-center'>
          {#if x === 0}
            <!--  Apply rouneded bottom left corner to 1st item-->
            <a class='link block w-full  rounded-bl-lg py-0.5 px-4 text-lg text-amber-600 transition-all ease-in-out duration-600' href='#{section.href}'>
             {section.title}
            </a>
          {:else if x===3}
            <!--  Apply rouneded bottom right corner to 4th item-->
            <a class='link block w-full rounded-br-lg py-0.5 px-4 text-lg text-amber-600 transition-all ease-in-out duration-600' href='#{section.href}'>
             {section.title}
            </a>
          {:else}
            <a class='link block w-full py-0.5 px-4 text-lg text-amber-600 transition-all ease-in-out duration-600' href='#{section.href}'>
             {section.title}
            </a>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>
</div>

<style>
  .link:hover {
    text-shadow: 0px 0px 2px #ffa215;
    text-decoration: underline;
    background-color: #242323;
  }
</style>
