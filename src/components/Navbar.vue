<template>

<header>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/">
        <button class="navbar-brand">Accueil</button>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/films2020">
              <button class="" aria-current="page" href="#">Films de 2020</button>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/frenchfilms">
              <button class="" aria-current="page" href="#">Films Français</button>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/americanfilms">
              <button class="" aria-current="page" href="#">Films Américain</button>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/top50">
              <button class="" aria-current="page">Top 50</button>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/search">
              <button class="" aria-current="page">Rechercher par titre</button>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
  

</template>

<script>

export default {
  name: "navbar",
};
</script>

<style scoped>

  button {
    border: none;
    background-color: transparent;
  }

</style>