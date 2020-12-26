<script>
    import Image from '@components/Image'
    import Icon from '@components/Icon'
</script>

<article>
    <div class="content">
        <Image class="mx-12 rounded-full max-w-120" name="profile" />

        <div class="info">
            <h1>Example Full Name</h1>
            <span>example@example.com</span>
            <p>Full Stack Dev</p>
        </div>
    </div>

    <Icon
        class="absolute top-0 right-0 mt-4 mr-4 cursor-pointer"
        name="share"
        size="38" />
</article>

<style>
    article {
        @apply relative bg-white rounded-xl;
        max-width: 762px;
        box-shadow: -4px -4px 5px 3px rgba(255, 255, 255, 0.15),
            4px 4px 5px 3px rgba(0, 0, 0, 0.15);
    }

    .content {
        @apply flex flex-row py-8;
    }

    .info {
        @apply self-center;
    }

    h1 {
        @apply text-3xl font-bold text-blue-700;
    }

    span {
        @apply text-lg font-medium text-gray-900;
    }

    p {
        @apply text-2xl;
        color: #69a1ff;
    }
</style>
