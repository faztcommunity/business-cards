<script>
  import MeetIcon from '@assets/icons/meet-icon.svg'
  import Hamburguer from '@assets/icons/hamburguer.svg'
  import Missing from '@assets/icons/missing.svg'

  export let size
  export let color = '#FFF'
  export let name = 'missing'
  export { className as class }

  let className = ''

  const ICONS = {
    'meet-icon': MeetIcon,
    hamburguer: Hamburguer,
    missing: Missing,
  }
</script>

<svelte:component
  this="{ICONS[name]}"
  class="{className}"
  width="{size}"
  height="{size}"
  fill="{color}" />
