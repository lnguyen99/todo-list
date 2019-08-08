<template>
  <div id="app">
    <h1>SIMPLE TODO LIST</h1>
    <Handlers></Handlers>
  </div>
</template>

<script>
import Handlers from './components/Handlers';

export default {
  name: 'app',
  components: {
    Handlers,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
