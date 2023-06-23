<script>
  export let text = 'Buy now';
  export let classes;
  export let href = '#';
</script>
<a class='{classes} bg-slate-900 uppercase hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400'
  {href}>{text}</a>
