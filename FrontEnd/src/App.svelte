<script>
  import { Router, Route } from 'svelte-routing'
  import Header from '@components/Header'
  import Home from '@pages/Home.svelte'
  import Footer from '@components/Footer.svelte'

  export let url = ''
</script>

<Router url="{url}">
  <Header />

  <main>
    <Route path="/">
      <Home />
    </Route>
  </main>

  <Footer />
</Router>
