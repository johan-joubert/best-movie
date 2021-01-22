<template>
  <div id="app">
    <Navbar />


    <div v-if="$route.path == '/'">
      <Home :movies = "this.movies" />
    </div>

    <div v-else>
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>
<script>
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import axios from "axios";


export default {
  name: "App",
  components: {
    Home,
    Navbar,
  },
  data() {
    return {
      query: "",
      movies: null,
    };
  },
  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=65a8344a59a4de14be662219b6d648cc&popularity.desc&language=fr&page=1"
      )
      .then((response) => {
        this.movies = response.data.results;
        console.log(this.movies)
        .catch(error => console.log(error));
        axios
          .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=65a8344a59a4de14be662219b6d648cc&popularity.desc&language=fr&page=2"
          )
          .then((response) => {
            response.data.results.forEach( movie => {
              this.movies.push(movie)
            })
            console.log(this.movies);
          })
          .catch(error => console.log(error))
      });
    },
  
};

</script>
