<template>
  <section class="details-container">
    <div class="background-details">
      <div class="img-details-container">
        <img class="img-details" :src="imgPath" alt="img" />
      </div>
      <div class="info-container">
        <div class="title-container">
          <div>
            <label class="title-label">
              {{ title }}
            </label>
            <span class="date-label">
              {{ date }}
            </span>

            <div class="description-container">
              {{ genreName }}
              {{ runtime }}
              <span class="language">
                {{ language }}
              </span>
              <span/>
              <p class="rating">
                {{ rating }}
              </p>
            </div>
          </div>

          <div class="star-container">
            <BIconStar
              v-if="showEmptyStar"
              font-scale="2.5"
              :style="{ cursor: 'pointer', color: 'var(--color-star)' }"
              @click="() => handleFavorite('empty')"
            />
            <BIconStarFill
              v-else
              font-scale="2.5"
              :style="{ cursor: 'pointer', color: 'var(--color-star)' }"
              @click="() => handleFavorite('filled')"
            />
          </div>
        </div>
        <div class="overview-container">
          <p class="overview-label">Overview</p>
          <p class="overview">
            {{ overview }}
          </p>
        </div>
        <div class="cast-container">
          <label class="directing">
            <label class="directing-label">{{ crewDirectingLabel }}</label>
            {{ crewDirecting }}
          </label>
          <label class="writing">
            <label class="writing-label">{{ crewWritingLabel }}</label>
            {{ crewWriting }}
          </label>
          <label class="production">
            <label class="production-label">{{ crewProductionLabel }}</label>
            {{ crewProduction }}
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  getFavoritesMovies,
  postFavoritesMovies,
  deleteFavoritesMovies,
  getCastMovie,
} from "@tcc-app/core";
import { BIconStar, BIconStarFill } from "bootstrap-vue";
export default {
  props: {
    details: { type: Object, default: () => ({}) },
  },
  components: {
    BIconStar,
    BIconStarFill,
  },
  data() {
    return {
      crew: {},
      showEmptyStar: false,
      isFavorite: false,
    };
  },
  computed: {
    title() {
      return this.details?.title ?? "";
    },
    date() {
      let date = this.details?.release_date?.split("-")[0];

      if (!date) return "";

      return "(" + this.details.release_date.split("-")[0] + ")";
    },
    genreName() {
      let genre = this.details?.genres[0];

      if (!genre) return "";

      return genre.name + " - ";
    },
    runtime() {
      let runtime = this.details?.runtime;

      if (!runtime) return "";

      return runtime + "min -";
    },
    language() {
      return this.details?.original_language ?? "";
    },
    rating() {
      let rating = this.details?.vote_average;

      if (!rating) return "";

      return "Rating:" + " " + rating;
    },
    overview() {
      let overview = this.details?.overview;

      if (!overview) return "Without Overview";

      return overview;
    },
    crewDirectingLabel() {
      if (this.crew?.Directing) return "Directing:";
      else return "";
    },
    crewDirecting() {
      return this.crew?.Directing ?? "";
    },
    crewWritingLabel() {
      if (this.crew?.Writing) return "Writing:";
      else return "";
    },
    crewWriting() {
      return this.crew?.Writing ?? "";
    },
    crewProductionLabel() {
      if (this.crew?.Production) return "Production:";
      else return "";
    },
    crewProduction() {
      return this.crew?.Production ?? "";
    },
    imgPath() {
      if (this.details.poster_path) {
        return "https://image.tmdb.org/t/p/w500" + this.details.poster_path;
      }

      return "https://tcc-app-builds.s3.amazonaws.com/assets/imgNotFound.jpg";
    },
  },
  watch: {
    isFavorite: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          this.showEmptyStar = false;
        } else {
          this.showEmptyStar = true;
        }
      },
    },
  },
  methods: {
    checkIsFavorite(movies, id) {
      for (let index = 0; index < movies.length; index++) {
        const movie = movies[index];

        if (movie.id === id) {
          return true;
        }
      }
    },
    handleFavorite(star) {
      if (star === "empty") this.saveFavorite(this.details);
      else this.removeFavorite(this.details.id);
    },
    async getFavorites() {
      await getFavoritesMovies()
        .then((response) => {
          if (response.data[0]) {
            this.isFavorite = this.checkIsFavorite(
              response.data,
              this.details.id
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async saveFavorite(movie) {
      await postFavoritesMovies(movie)
        .then(() => {
          this.isFavorite = true;
        })
        .catch((error) => {
          console.log(error);

          this.isFavorite = false;
        });
    },
    async removeFavorite(id) {
      await deleteFavoritesMovies(id)
        .then(() => {
          this.isFavorite = false;
        })
        .catch((error) => {
          console.log(error);
          this.isFavorite = false;
        });
    },
    async getCast(id) {
      await getCastMovie(id)
        .then((response) => {
          let Writing = "";
          let Directing = "";
          let Production = "";

          for (let index = 0; index < response.data.crew.length; index++) {
            const cast = response.data.crew[index];
            if (!Writing && cast.department === "Writing") {
              Writing = cast.name;
            }
            if (!Directing && cast.department === "Directing") {
              Directing = cast.name;
            }
            if (!Production && cast.department === "Production") {
              Production = cast.name;
            }
          }
          this.crew = {
            Writing: Writing,
            Directing: Directing,
            Production: Production,
          };
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async mounted() {
    await Promise.all([
      this.getCast(this.details?.id),
      this.getFavorites(this.details?.id),
    ]);
  },
};
</script>

<style>
@import "../styles/MovieItem.css";
</style>
