<template>
  <h2 class="level-title">Round: {{ number }}</h2>
  <button class="start-game" v-on:click="reverseMessage">Start</button>
  <GameElement :start="start" />
  <GameOptions/>
</template>

<script>
import GameOptions from './components/GameOptions.vue'
import GameElement from './components/gameElement.vue'


export default {
  name: 'App',
  data () {
    return {
      picked: '',
      number: "",
      start: true,  
    }
  },
  components: {
    GameOptions,
    GameElement
  },
  methods: {
    reverseMessage () {
      this.start=false;
      alert(this.start)
    }
  },
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
.level-title
  font-weight: 700
  font-size: 25px
.start-game
  background-color: blue
  color: white
  font-size: 25px
  width: 100px
  outline-style: none
  border: none
  box-shadow: 4px 3px 5px 1px grey
  border-radius: 5px
  &:hover
    cursor: pointer
</style>