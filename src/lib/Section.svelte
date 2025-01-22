<script>
	/**
	 * @typedef {Object} Props
	 * @property {any} classes
	 * @property {string} [id]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { classes, id = '', children } = $props();
</script>

<div {id} class={classes}>
	<div class="container mx-auto px-4">
		{@render children?.()}
	</div>
</div>
