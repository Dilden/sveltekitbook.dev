<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [text]
	 * @property {any} classes
	 * @property {string} [href]
	 */

	/** @type {Props} */
	let { text = 'Buy now', classes, href = '#' } = $props();
</script>

<a
	class="{classes} bg-slate-900 uppercase hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-700 dark:highlight-white/20 dark:hover:bg-sky-600 transition-colors"
	{href}>{text}</a
>
