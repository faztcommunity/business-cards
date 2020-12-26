<script>
    import Icon from '@components/Icon'
    import Button from '@components/Button'
</script>

<header>
    <nav class="container">
        <div>
            <Icon class="inline" name="logo" size="48" />
            <span>Meet</span>
        </div>

        <div class="links">
            <Button class="max-w-120">FAQs</Button>
            <Button class="max-w-120">About Us</Button>
            <Button class="max-w-120" primary>Login</Button>
        </div>

        <button class="block lg:hidden">
            <Icon name="hamburguer" size="42" color="#1565C0" />
        </button>
    </nav>
</header>

<style>
    header {
        @apply sticky top-0 w-screen px-8 py-4 text-blue-700 bg-white lg:px-0;
    }

    nav {
        @apply flex flex-row justify-between place-items-center;
    }

    span {
        @apply ml-2 text-xl font-bold;
    }

    .links {
        @apply hidden lg:flex lg:flex-row lg:w-1/2 lg:justify-evenly;
    }
</style>
