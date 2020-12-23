<script>
    export let status
    export let error

    const dev = process.env.NODE_ENV === 'development'
</script>

<svelte:head>
    <title>{status}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
    <pre>{error.stack}</pre>
{/if}

<style>
    h1 {
        @apply w-full font-bold text-center text-blue-800 font-roboto;
        font-size: 8rem;
    }

    p {
        @apply w-full text-center font-roboto;
    }
</style>
