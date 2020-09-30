<template>
  <div id="app">
    <user-finder />
  </div>
</template>

<script>
import UserFinder from './components/UserFinder'
export default {
  name: 'App',
  components: {
    UserFinder,
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
