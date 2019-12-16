<template>
  <div id="app">
    <app-head></app-head>
    <router-view/>
    
    <app-nav/>
  </div>
</template>

<script>
import AppNav from './components/AppNav'
import AppHead from './components/AppHead'
//import Conter from './components/conter'
export default {
  name: 'App',
  components: {
    "app-nav":AppNav,
    "app-head":AppHead,
 //   "app-conter":Conter
  }
}
</script>

<style>
body,div,ul,li,span,p,h2,h3,h4,a {
  margin: 0;
  padding: 0;
}
html,body {
  width: 100%;
  height: 100%;
}
ul {
  list-style-type: none;
}
#app {
  font-family: Verdana, Geneva, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;

}
</style>
