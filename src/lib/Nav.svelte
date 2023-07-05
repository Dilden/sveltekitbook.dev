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
  let isOpen = false;
  const toggle = () => (isOpen = !isOpen);
</script>
<!-- Container -->
<div class='fixed top align-center w-screen grid grid-cols-2 lg:grid-cols-6 z-30 {isOpen ? "h-auto" : "h-0"}'>
  <!-- Mobile Hamburger -->
  <div class='col-span-2 p-2 transition-all duration-100 delay-75 bg-[#323131] drop-shadow-lg {isOpen ? "drop-shadow-none z-50" : ""} lg:hidden text-right'>
    <button class='relative w-[45px] h-[40px] m-2' on:click={toggle}>
      <span class=' w-full absolute p-1 bg-[#f97141] transition-all ease-in-out duration-300 left-0 shadow-[0_0_5px_black] {isOpen ? "rotate-45 top-[16px]" : ""} top-0'> </span>
      <span class=' w-full absolute p-1 bg-[#f97141] transition-all ease-in-out duration-300 left-0 shadow-[0_0_5px_black] {isOpen ? "bg-transparent shadow-none" : ""} top-[16px]'> </span>
      <span class=' w-full absolute p-1 bg-[#f97141] transition-all ease-in-out duration-300 left-0 shadow-[0_0_5px_black] {isOpen ? "-rotate-45 bottom-[16px]" : ""} bottom-0'> </span>
    </button>
  </div>
  <!-- Menu -->
  <nav class='bg-[#323131] rounded-b-lg drop-shadow-lg lg:col-start-2 col-span-4 block relative lg:top-0 {isOpen ? "z-40 top-0" : "-top-[300%]" } transition-all duration-300'>
    <ul class='list-none flex lg:flex-row flex-col justify-evenly gap-x-1 gap-y-0.5 flex-nowrap '>
      {#each sections as section, x}
        <li class='w-full text-right lg:text-center'>
          <a class='{x == 0 ? "lg:rounded-bl-lg" : ""} {x == 3 ? "rounded-b-lg lg:rounded-bl-none lg:rounded-br-lg " : "" } block w-full p-2 lg:p-5 text-lg text-slate-200 hover:text-amber-600 transition-all ease-in-out duration-300 hover:bg-[#242323] lg:hover:scale-110' href='#{section.href}'>
           {section.title}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>
