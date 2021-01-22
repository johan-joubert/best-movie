<template>
  <div class="search">
    <h3>Rechercher par titre</h3>

    <input type="text" v-model="query" @keyup="getResult(query)" />

    <div v-if="query" class="container">
      <div class="row">
        <div class="col-md-6" v-for="movie in movies" :key="movie.id">
          <p>{{ movie.title }}</p>
          <router-link :to="{ path: '/zoommovie/' + movie.id }">
            <img
              v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
              width="100px"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      query: "",
      movies: null,
    };
  },
  methods: {
    getResult(query) {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=65a8344a59a4de14be662219b6d648cc&query=" +
            query
        )
        .then((response) => {
          this.movies = response.data.results;
        })
        .catch((error) => console.log(error));

      console.log(this.movies);
    },
  },
};
</script>

<style scoped>
  .search {
    text-align: center;
  }

  img {
    width: 250px;
  }
</style>
