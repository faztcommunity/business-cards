<script>
    import Logo from '@assets/icons/logo.svg'
    import Share from '@assets/icons/share.svg'
    import Missing from '@assets/icons/missing.svg'
    import Hamburguer from '@assets/icons/hamburguer.svg'

    export let size
    export let color = '#FFF'
    export let name = 'missing'
    export { className as class }

    let className = ''

    const ICONS = {
        logo: Logo,
        share: Share,
        missing: Missing,
        hamburguer: Hamburguer,
    }
</script>

<svelte:component
    this="{ICONS[name]}"
    class="{className}"
    width="{size}"
    height="{size}"
    fill="{color}" />
