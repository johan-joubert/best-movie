<template>
  <div class="search text-center">

    <h1>Liste Films</h1>

    <input type="text" v-model="query" @keyup="getResult(query)" />


          <div v-for="movie in movies" :key="movie.id">

            <p>{{ movie.title }}</p>
                                        <router-link :to="{path: '/zoommovie/' + movie.id}" >

            <img
              v-bind:src="
                'http://image.tmdb.org/t/p/w500/' + movie.poster_path
              "
              width="200px"
            />
                                        </router-link>

          </div>

  </div>
</template>

<script>
  import axios from 'axios'; 

  export default {
    name: 'Search',
    data() {
      return {
        query: '',
        movies: null,
      };
    },
    methods: {
          getResult(query) {
      axios
        .get("https://api.themoviedb.org/3/search/movie?api_key=65a8344a59a4de14be662219b6d648cc&query=" + query)
        .then((response) => {
          this.movies = response.data.results;
        });
      console.log(this.movies);
    },

    }      
  }
</script>
