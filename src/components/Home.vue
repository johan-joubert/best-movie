<template>
  <div class="container">
    <Button :movies="this.movies" />

    <div class="row">
      <div class="col-md-9">
        <div class="row">
            <div class="col-md-6" v-for="movie in movies" :key="movie.id">
              <Movie
                :movie="movie"
                :title="movie.title"
                :poster_path="movie.poster_path"
                :vote_average="movie.vote_average"
                :overview="movie.overview"
                :release_date="movie.release_date"
              />
            </div>
        </div>
      </div>

      <div class="col-md-3">
        <Search :movies="this.movies" />
        <h2>Trier par genre</h2>
        <button
          v-on:click="getMoviesByGenre(18)"
          style="color: #fff"
          type="submit"
          class="btn btn-secondary pull-right"
          value="Submit"
        >
          Action
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(12)"
          style="color: #fff"
          type="submit"
          class="btn btn-secondary pull-right"
          value="Submit"
        >
          Aventure
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(16)"
          style="color: #fff"
          type="submit"
          class="btn btn-secondary pull-right"
          value="Submit"
        >
          Animation
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(35)"
          style="color: #fff"
          type="submit"
          class="btn btn-secondary pull-right"
          value="Submit"
        >
          Comédie
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(80)"
          style="color: #fff"
          type="submit"
          class="btn btn-secondary pull-right"
          value="Submit"
        >
          Crime
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(99)"
          style="color: #fff"
          type="submit"
          class="btn btn-secondary pull-right"
          value="Submit"
        >
          Documentaire
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(18)"
          style="color: #fff"
          type="submit"
          class="btn btn-secondary pull-right"
          value="Submit"
        >
          Dramatique
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(10751)"
          style="color: #fff"
          type="submit"
          class="btn btn-secondary pull-right"
          value="Submit"
        >
          Familliale
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(14)"
          style="color: #fff"
          type="submit"
          class="btn btn-secondary pull-right"
          value="Submit"
        >
          Fantaisie
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(36)"
          style="color: #fff"
          type="submit"
          class="btn btn-secondary pull-right"
          value="Submit"
        >
          Historique
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(27)"
          style="color: #fff"
          type="submit"
          class="btn btn-secondary pull-right"
          value="Submit"
        >
          Horreur
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(10402)"
          style="color: #fff"
          type="submit"
          class="btn btn-secondary pull-right"
          value="Submit"
        >
          Musique
        </button>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Movie from "./Movie.vue";
import Button from "./Button.vue";
import Search from "./Search.vue";

export default {
  name: "home",
  components: {
    Movie,
    Button,
    Search,
  },
  data() {
    return {
      query: "",
    };
  },
  props: ["movies", "movie"],
  methods: {
    getMoviesByGenre(nbr) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=65a8344a59a4de14be662219b6d648cc&with_genres=" +
            nbr
        )
        .then((response) => {
          this.movies = response.data.results;
          console.log(this.movies);
        })
        .catch(error => console.log(error))
    },
  },
};
</script>
