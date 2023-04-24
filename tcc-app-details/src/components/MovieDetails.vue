<template>
  <div>
    <b-spinner
      v-if="showSpinner"
      style="width: 3rem; height: 3rem"
      label="Large Spinner"
      type="grow"
    ></b-spinner>
    <div class="movie-item-container">
      <MovieItem v-if="!showSpinner && details" :details="details" />
    </div>
  </div>
</template>

<script>
import MovieItem from "./MovieItem";
import { BSpinner } from "bootstrap-vue";
import { getMovieDetails } from "@tcc-app/core";

export default {
  components: {
    BSpinner,
    MovieItem,
  },
  data() {
    return {
      id: "",
      showSpinner: true,
      showDetails: false,
      details: null,
    };
  },
  methods: {
    async getMovieDetails() {
      this.showSpinner = true;

      await getMovieDetails(this.id)
        .then((response) => {
          this.details = response.data;
          this.showSpinner = false;
        })
        .catch((err) => {
          this.showSpinner = false;
          console.log(err);
        });
    },
  },
  mounted() {
    this.id = window.location.search.split("=")[1];

    if (!this.id) window.location.href = "/";
    else this.getMovieDetails();
  },
};
</script>

<style scoped>
.movie-item-container {
  padding: 0px 40px 40px 40px;
}
</style>
