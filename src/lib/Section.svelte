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

<div {id} class='{classes}'>
  <div class='container mx-auto px-4'>
    {#if children}{@render children()}{:else}
      default section content
      this should span the entire screen width
      and should have nice background colors
    {/if}
  </div>
</div>
