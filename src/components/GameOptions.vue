<template>
  <div class="container">
    <h1>Game Options:</h1>
    <div class="containerInput">
    <input  type="radio" id="Normal" value="Normal" v-model="picked"><label class="itemLabel" for="Normal">Normal</label>
    </div>
    <div class="containerInput">
    <input  type="radio" id="Sound Only" value="Sound Only" v-model="picked"><label class="itemLabel" for="Sound Only">Sound Only</label>
    </div>
    <div class="containerInput">
    <input  type="radio" id="Light Only" value="Light Only" v-model="picked"><label class="itemLabel" for="Light Only">Light Only</label>
    </div>
    <div class="containerInput">
    <input  type="radio" id="Free board" value="Free board" v-model="picked"><label class="itemLabel" for="Free board">Free board</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameOptions',
  data () {
    return {
      picked: ''
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
    width: 300px
    height: 200px
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
