<template>
  <header class="header">
      <h1>JJ1POW, STATION</h1>
      <div class="nav justify-content-center">
          <router-link to="/">Home</router-link> /
          <router-link to="/about">/ About</router-link> /
          <router-link to="/qslupload">/ QSL Card Upload</router-link> /
          <router-link to="/qsldownload">/ QSL Card Download</router-link> /
          <router-link to="/pictures">/ Pictures</router-link> /
          <router-link to="/history">/ History</router-link> /
          <router-link to="/english">/ English</router-link>
      </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
    .header {
        background: #333;
        color : #fff;
        text-align: center;
        padding :  10px;
    }
    .header a {
        color : #fff;
        padding-right: 5px;
        text-decoration: none;
    }
</style>
