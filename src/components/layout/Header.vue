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
  name: 'Header',
  metaInfo: {
    title: 'Welcome to JJ1POW station!',
    meta: [
      { name: 'description', content: 'JJ1POW Ham radio QSL QSO 呼出符号 コールサイン アマチュア無線 無線局 50MHz 144MHz 430MHz jj1pow 鎌倉 Kamakura 極楽寺 長谷 QRP CW SSB FM ハム' },
      { name: 'keywords', content: 'JJ1POW jj1pow コールサイン Callsign 呼出符号 アマチュア無線 無線局 50MHz 144MHz 430MHz Ham radio QSL QSO 鎌倉 Kamakura 極楽寺 長谷 QSLカード QRP CW SSB FM 大仏ハイキングコース' },
      { name: 'auther', content: '月山堂' }
    ]
  }
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
