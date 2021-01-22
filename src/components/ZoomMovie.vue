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
            class="bloc m-auto mainImg"
            v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path"
            width="350px"
          />
        </div>

        <div class="col-md-6">
          <h2>{{ movie.title }}</h2>
          <p class="tagline">{{ movie.tagline }}</p>
            <p>{{ movie.release_date }}<span class="dot"> . </span><span class="genre" v-for="mo in movie.genres" :key="mo.id">{{mo.name}}</span><span class="dot"> . </span> {{ movie.runtime }}min</p>
            <p><span class="average">{{ movie.vote_average * 10 }}%</span> Notes utilisateurs <b-button class="btnBA vertical-align" v-b-modal.modal-2><i class="fas fa-play"></i> Bande-annonce</b-button></p>

          <p class="synopsis mt-2">Synopsis</p>
          <p>{{ movie.overview }}</p>

          <div class="mb-2">
            <b-button v-b-modal.modal-1>Voir le casting</b-button>

            <b-modal id="modal-1" v-bind:title="movie.title">
              <div class="container">
                <div class="row">
                  <div
                    class="col-md-6"
                    v-for="actor in actors.cast"
                    :key="actor.id"
                  >
                    <img
                      class="bloc m-auto"
                      v-bind:src="
                        'http://image.tmdb.org/t/p/w500/' + actor.profile_path
                      "
                      width="100px"
                    />
                    <div class="nameActor mb-2">
                      {{ actor.name }}
                      <br />
                      role : {{ actor.character }}
                    </div>
                  </div>
                </div>
              </div>
            </b-modal>
          </div>

          <div>
            <b-modal id="modal-2" v-bind:title="movie.title">
              <div>
                <iframe
                  width="450"
                  height="315"
                  v-bind:src="
                    'https://www.youtube.com/embed/' + video.results[0].key
                  "
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
      actors: null,
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
    getActors(component) {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            component.id +
            "/credits?api_key=65a8344a59a4de14be662219b6d648cc&language=fr"
        )
        .then((response) => {
          component.actors = response.data;
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
    this.getActors(this);
  },
};
</script>

<style scoped>

.container-fluid {
  margin: 0;
  padding: 0;
}

.top {
  padding: 0;
  margin: 0;
  height: 15vh;
}

.imgTop {
  mask-image: linear-gradient(rgba(255, 1, 1, 0.4), transparent);
  width: 100%;
}

h2,
h3 {
  color: #ffff;
  font-weight: bold;
  text-transform: uppercase;
}

.certification {
  border: 1px solid #fff;
  padding: 2px;
}

p {
  color: #ffff;
}

.synopsis {
  font-weight: bold;
}

img {
  border-radius: 1px;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.8);
}

.genre {
  display: inline-block;
  border: none;
  color: #fff;
}

.dot {
  border: none; 
  font-size: 3em;
}

h5 {
  color: #fff;
}

.btnBA {
  border: none;
  background-color: transparent;
  transition: 0.5s;
}

.btnBA:hover {
  transform: scale(1.1);
  transition: 0.5s;
}

.mainImg {
    animation: crescendo 1.5s ease-in; 
}

@keyframes crescendo {
0% {
       transform: scale(0.1, 0.1) translate3d(-300px, -50px, 30px);
       animation-timing-function:ease-in-out
   }

   50% {
       transform: scale(0.6, 0.6) translate3d(150px, 12px, 1px);
       animation-timing-function:ease-in-out
   }

   100% {
       transform: scale(1, 1) translate3d(0px, 0px, 30px);
       animation-timing-function:ease-in-out
   }  }


@media screen and (max-width: 991px){
  .container-fluid {
    text-align: center;
  }

  img {
    width: 250px;
    display: block;
  }
}

</style>
