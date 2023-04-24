<template>
  <div id="app">
    <BContainer fluid="xl">
      <MovieDetails />
    </BContainer>
  </div>
</template>

<script>
import MovieDetails from './components/MovieDetails.vue'
import {BContainer} from "bootstrap-vue";

export default {
  name: 'App',
  components: {
    MovieDetails,
    BContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-details);
}
</style>
