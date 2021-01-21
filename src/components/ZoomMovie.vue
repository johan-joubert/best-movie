<template>
  <div class="container-fluid">
    <div class="top">
      <img
        class="imgTop bloc"
        v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.backdrop_path"
        alt=""
      />
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <img
            class="bloc m-auto"
            v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
            width="350px"
          />
        </div>

        <div class="col-md-6">
          <h2>{{ movie.title }}</h2>
          <h3>{{ movie.tagline }}</h3>
          <p>
            <span>U</span> {{ movie.release_date }}. {{ movie.genres[0].name }},
            {{ movie.genres[1].name }}. {{ movie.runtime }}min
          </p>
          <p class="average">{{ movie.vote_average * 10 }} %</p>
          <p>{{ movie.overview }}</p>
          <div>
            <b-button v-b-modal.modal-1>Voir la bande annonce</b-button>

            <b-modal id="modal-1" title="{{BootstrapVue}}">
              <div>
                <iframe
                  width="450"
                  height="315"
                  v-bind:src="'https://www.youtube.com/embed/' + video.results[0].key"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ZoomMovie",
  data() {
    return {
      id: this.$route.params.id,
      movie: null,
      video: null,
    };
  },
  methods: {
    getMovies(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            component.id +
            "?api_key=65a8344a59a4de14be662219b6d648cc&language=fr"
        )
        .then((response) => {
          component.movie = response.data;
        });
    },
    getVideo(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            component.id +
            "/videos?api_key=65a8344a59a4de14be662219b6d648cc"
        )
        .then((response) => {
          component.video = response.data;
        });
    },
  },
  created() {
    this.getMovies(this);
    this.getVideo(this);
  },
};
</script>

<style scoped>
.top {
  padding: 0;
  margin: 0;
  height: 15vh;
}

.imgTop {
  mask-image: linear-gradient(rgba(255, 1, 1, 0.2), transparent);
  width: 100%;
}

h2,
h3 {
  color: #ffff;
  font-weight: bold;
  text-transform: uppercase;
}

span {
  border: 1px solid #fff;
  padding: 2px;
}

p {
  color: #ffff;
}

.average {
  margin: 10px;
  width: 50px;
  background: #000;
  height: 50px;
  text-align: center;
  border-radius: 100px;
  line-height: 50px;
}
</style>
