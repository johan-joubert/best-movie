<template>
    <div class="container">
        <h2>{{title}}</h2>
        <small> {{release_date | moment("DD/MM/YYYY")}}</small>
        <div>
        <router-link :to="{path: '/zoommovie/' + movie.id}" >
            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + poster_path" width='250px'>
        </router-link>
        </div>
        <p>Note moyenne {{vote_average}}</p>
    </div>
</template>
    
<script>
    export default {
        name: 'Movie',
        props: ["title", "poster_path", "vote_average", "overview", "release_date", "include_video", "movie"],
    }
    
</script>
