<script>
  export let color;
</script>

<div class='w-full {color}'>
  <div class='container mx-auto'>
    <slot>
      default section content
      this should span the entire screen width
      and should have nice background colors
    </slot>
  </div>
</div>
