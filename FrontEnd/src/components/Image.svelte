<script>
  export let name
  export let type = 'png'
  export { className as class }

  let className = ''

  const getName = () =>
    (name.charAt(0).toUpperCase() + name.slice(1)).replace(/-/g, ' ')
</script>

<img
  loading="lazy"
  class="{className}"
  src="./images/{name}.{type}"
  title="{getName()}"
  alt="{getName()}"
  on:click />
