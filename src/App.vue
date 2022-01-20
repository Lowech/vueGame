<template>
  <div class="container-title">
    <GameOptions />
  </div>
</template>

<script>
import GameOptions from './components/GameOptions.vue'

export default {
  name: 'App',
  components: {
    GameOptions,
  },
  methods: {
    reverseMessage () {
      console.log(this.stability)
      this.start=false; 
    }
  },
}
</script>

<style lang="sass">
*
  padding: 0
  margin: 0
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  display: flex
  justify-content: center
  height: 100vh
  width: 100%
.container-title
  display: grid 
  grid-template-columns: 2% minmax(200px, 300px) minmax(250px, auto) 2%
  grid-template-rows: 50px 100px auto
  min-width: 280px
  height: 100%

</style>