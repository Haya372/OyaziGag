<template>
  <div id="app">
    <h1>みんなのおやじギャグ広場</h1>
    <div id="nav">
      <router-link to="/">ギャグ</router-link> |
      <router-link to="/Ranking">ランキング</router-link> |
      <router-link to="/Edit">投稿</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #0778a5;
}
</style>
