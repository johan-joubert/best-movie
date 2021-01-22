<template>
    <div class="container mb-2">
        <h2>{{title}}</h2>
        <small> {{release_date | moment("DD/MM/YYYY")}}</small>
        <small> Note moyenne {{vote_average}}</small>
        <div class="blocImg">
        <router-link :to="{path: '/zoommovie/' + movie.id}" >
            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + poster_path" width='250px'>
        </router-link>
        </div>
    </div>
</template>
    
<script>
    export default {
        name: 'Movie',
        props: ["title", "poster_path", "vote_average", "overview", "release_date", "include_video", "movie"],
    }
    
</script>

<style scoped>

h2, small {
    color: #fff;
}

h2 {
    font-weight: bold;
    font-size: 1.8em;
}

img{
    transition: 0.2s;
}

img:hover {
    transform: scale(1.02);
    transition: 0.2s;
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.8);
}

</style>
