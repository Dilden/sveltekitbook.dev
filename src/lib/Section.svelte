<script>
  export let classes;
  export let anchor = '';
</script>

<div id={anchor} class='{classes}'>
  <slot>
    default section content
    this should span the entire screen width
    and should have nice background colors
  </slot>
</div>
