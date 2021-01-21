<template>
      <div class="container">
          <div class="row">
              <div class="col-md-8">
                <div class="row">
                        <b-col>
                            <router-link :to="{path: '/zoommovie/' + movie.id}" >
                                <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + poster_path" width='250px'>
                            </router-link>
                        </b-col>

                    <b-col>
                        <h2>{{title}}</h2>
                        <p>{{overview}}</p>
                        <small>{{release_date | moment("DD/MM/YYYY")}}</small>
                        <p>{{include_video}}</p>
                    </b-col>
                    <p>Note moyenne {{vote_average}}</p>
                </div>
              </div>

            </div>

          </div>

</template>
    
<script>
    export default {
        name: 'Movie',
        props: ["title", "poster_path", "vote_average", "overview", "release_date", "include_video", "movie"],
    }
    
</script>
