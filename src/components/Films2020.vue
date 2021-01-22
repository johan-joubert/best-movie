<template>
  <div class="container">
    <Button :movies="this.movies" />

    <div class="row">
      <div class="col-md-8">
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

      <div class="col-md-4">
        <h2>Trier par genre</h2>
        <button
          v-on:click="getMoviesByGenre(18)"
          style="color: #41b883"
          type="submit"
          class="btn btn-light mb-2"
          value="Submit"
        >
          Action
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(12)"
          style="color: #41b883"
          type="submit"
          class="btn btn-light mb-2"
          value="Submit"
        >
          Aventure
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(16)"
          style="color: #41b883"
          type="submit"
          class="btn btn-light mb-2"
          value="Submit"
        >
          Animation
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(35)"
          style="color: #41b883"
          type="submit"
          class="btn btn-light mb-2"
          value="Submit"
        >
          Comédie
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(80)"
          style="color: #41b883"
          type="submit"
          class="btn btn-light mb-2"
          value="Submit"
        >
          Crime
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(99)"
          style="color: #41b883"
          type="submit"
          class="btn btn-light mb-2"
          value="Submit"
        >
          Documentaire
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(18)"
          style="color: #41b883"
          type="submit"
          class="btn btn-light mb-2"
          value="Submit"
        >
          Dramatique
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(10751)"
          style="color: #41b883"
          type="submit"
          class="btn btn-light mb-2"
          value="Submit"
        >
          Familliale
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(14)"
          style="color: #41b883"
          type="submit"
          class="btn btn-light mb-2"
          value="Submit"
        >
          Fantaisie
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(36)"
          style="color: #41b883"
          type="submit"
          class="btn btn-light mb-2"
          value="Submit"
        >
          Historique
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(27)"
          style="color: #41b883"
          type="submit"
          class="btn btn-light mb-2"
          value="Submit"
        >
          Horreur
        </button>
        <br />
        <button
          v-on:click="getMoviesByGenre(10402)"
          style="color: #41b883"
          type="submit"
          class="btn btn-light mb-2"
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

export default {
  name: "Films2020",
  components: {
    Movie,
    Button,
  },
  data() {
    return {
      query: '',
      movies: null,
    };
  },
  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=65a8344a59a4de14be662219b6d648cc&release_year=2020&page=1"
      )
      .then((response) => {
        this.movies = response.data.results;
        console.log(this.movies);
        axios
          .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=65a8344a59a4de14be662219b6d648cc&release_year=2020&page=2"
          )
          .then((response) => {
            response.data.results.forEach((movie) => {
              this.movies.push(movie);
            });
            console.log(this.movies);
          });
      });
  },
  methods: {
    getMoviesByGenre(nbr) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=65a8344a59a4de14be662219b6d648cc&release_year=2020&with_genres=" + nbr
        )
        .then((results) => {
          this.movies = results.data.results;
          console.log(this.movies);
        });
    },
  },
};
</script>
