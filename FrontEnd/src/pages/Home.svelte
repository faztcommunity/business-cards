<script>
  import Image from '@components/Image.svelte'
  import Button from '@components/Button.svelte'
</script>

<section class="container home">
  <article class="home-text">
    <h1>Start meeting new people today!</h1>
    <p class="home-text-lorem">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam fuga
      doloremque nemo perferendis eaque voluptatibus vitae consectetur expedita.
      Pariatur, maxime totam! Debitis itaque exercitationem repellat quae
      consequuntur id consectetur.
    </p>
    <Button primary class="px-8 mx-auto max-w-40 lg:mx-0">Sign Up</Button>
  </article>

  <article class="home-image">
    <Image class="max-w-640 xl:mx-auto" name="team-meeting" type="svg" />
  </article>
</section>

<style>
  .home {
    @apply flex flex-col flex-col-reverse w-full my-8 lg:flex-row lg:mt-16;
  }

  .home-text {
    @apply flex flex-col justify-center w-full xl:w-1/3;
  }

  h1 {
    @apply text-3xl font-bold text-center text-blue-700 lg:text-left lg:text-5xl;
  }

  .home-text-lorem {
    @apply my-4 text-center lg:text-left;
  }

  .home-image {
    @apply w-full mx-auto mb-4 xl:w-2/3;
  }
</style>
