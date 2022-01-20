<template>
  <div class="container" >
    <h1>Game Options:</h1>
    <div class="containerInput" >
    <input  type="radio" id="Normal" value="Normal" v-model="picked" v-on:click="idElement" ref="input"><label class="itemLabel" for="Normal">Normal</label>
    </div>
    <div class="containerInput">
    <input  type="radio" id="Sound Only" value="Sound Only" v-model="picked" v-on:click="idElement" ref="input"><label class="itemLabel" for="Sound Only">Sound Only</label>
    </div>
    <div class="containerInput">
    <input  type="radio" id="Light Only" value="Light Only" v-model="picked" v-on:click="idElement" ref="input"><label class="itemLabel" for="Light Only">Light Only</label>
    </div>
    <div class="containerInput">
    <input  type="radio" id="Free board" value="Free board" v-model="picked" v-on:click="idElement" ref="input"><label class="itemLabel" for="Free board">Free board</label>
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
    align-items: flex-start
    max-width: 230px
    height: 200px
    order: 2
    grid-row: 3/4
    grid-column: 3/4

.containerInput
    display: inline-block
    width: auto
.itemLabel
    color: black
    font-size: 15px
    padding-left: 5px
h3
    color: black
    font-size: 20px

</style>
