<template>
  <div class="container" >
    <h1>Game Options:</h1>
    <div class="containerInput" >
    <input class="itemInput" type="radio" id="Easy" value="Easy" v-model="picked" v-on:click="idElement" ref="input"><label class="itemLabel" for="Easy">Easy</label>
    </div>
    <div class="containerInput">
    <input class="itemInput" type="radio" id="Medium" value="Medium" v-model="picked" v-on:click="idElement" ref="input"><label class="itemLabel" for="Medium">Medium</label>
    </div>
    <div class="containerInput">
    <input class="itemInput" type="radio" id="Hard" value="Hard" v-model="picked" v-on:click="idElement" ref="input"><label class="itemLabel" for="Hard">Hard</label>
    </div>
    <div class="containerInput">
    <input class="itemInput" type="radio" id="Only music" value="Only music" v-model="picked" v-on:click="idElement" ref="input"><label class="itemLabel" for="Only music">Only music</label>
    </div>
  </div>
  <GameElement :idOption="idOption" />
</template>

<script>
import GameElement from './gameElement.vue'

export default {
  name: 'GameOptions',
  data () {
    return {
      picked: '',
      start: true, 
      idOption: ''  
    }
  },
  components: {
    GameElement
  },
  methods:{
    idElement(e){
      this.idOption=e.target.id;
    }
  }
}
</script>

<style scoped lang="sass">
.container
    display: flex
    flex-direction: column
    flex-wrap: wrap
    justify-content: space-evenly
    align-items: flex-start
    max-width: 230px
    height: 200px
    order: 2
    grid-row: 3/4
    grid-column: 3/4

.containerInput
    display: inline-block
    width: auto
.itemInput
  vertical-align: middle
  zoom: 1.3
.itemLabel
    color: black
    font-size: 15px
    padding-left: 15px
    font-weight: 600
h3
    color: black
    font-size: 20px

</style>
