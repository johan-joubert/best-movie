<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <label for="title" class="form-check-label m-2">Trier par titre</label>
        <input
          type="checkbox"
          class="form-check-input m-2"
          id="title"
          name="single_select"
          ref="rolesSelected"
          @click="orderMoviesByTitle"
        />

        <label for="title" class="form-check-label m-2">Trier par date</label>
        <input
          type="checkbox"
          class="form-check-input m-2"
          id="title"
          name="single_select"
          ref="rolesSelected"
          @click="orderMoviesByDate"
        />

        <label for="title" class="form-check-label m-2">Trier par notes</label>
        <input
          type="checkbox"
          class="form-check-input m-2"
          id="title"
          name="single_select"
          ref="rolesSelected"
          @click="orderMoviesByAverage"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["movies"],
  data() {
    return {
      order: true,
    };
  },

  methods: {
    orderMoviesByTitle: function () {
      if (this.order == false) {
        this.order = true;

        this.movies.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
      } else {
        this.movies.sort((a, b) => {
          this.order = false;

          if (a.title > b.title) {
            return -1;
          }
          if (a.title < b.title) {
            return 1;
          }
          return 0;
        });
      }
      console.log(this.movies);
    },
    orderMoviesByDate: function () {
      if (this.order == false) {
        this.order = true;
        this.movies.sort((a, b) => {
          if (a.release_date < b.release_date) {
            return -1;
          }
          if (a.release_date > b.release_date) {
            return 1;
          }
          return 0;
        });
      } else {
        this.movies.sort((a, b) => {
          this.order = false;

          if (a.release_date > b.release_date) {
            return -1;
          }
          if (a.release_date < b.release_date) {
            return 1;
          }
          return 0;
        });
      }
      console.log(this.movies);
    },
    orderMoviesByAverage: function () {
      if (this.order == false) {
        this.order = true;
        this.movies.sort((a, b) => {
          if (a.vote_average < b.vote_average) {
            return -1;
          }
          if (a.vote_average > b.vote_average) {
            return 1;
          }
          return 0;
        });
      } else {
        this.movies.sort((a, b) => {
          this.order = false;

          if (a.vote_average > b.vote_average) {
            return -1;
          }
          if (a.vote_average < b.vote_average) {
            return 1;
          }
          return 0;
        });
      }
      console.log(this.movies);
    },
  },
};
</script>
