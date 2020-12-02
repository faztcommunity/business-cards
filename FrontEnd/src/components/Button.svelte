<script>
  export let primary
  export { className as class }

  let className = ''
</script>

<button class="{className}" class:primary on:click>
  <slot />
</button>

<style>
  button {
    @apply w-full py-2 font-medium rounded-md outline-none;
    transition: all 200ms ease-out;
  }

  button:active {
    @apply transform scale-95;
    transition: all 200ms ease-in;
  }

  .primary {
    @apply text-white bg-blue-700;
  }
</style>
