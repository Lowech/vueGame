<template>
  <div class="game-container">
    <div class="game-element1" id="game-element1" v-on:click="actionClick">
      <audio src="./src/assets/a.wav"></audio>
    </div>
    <div class="game-element2" id="game-element2" v-on:click="actionClick">
      <audio src="./src/assets/a.ogg"></audio>
    </div>
    <div class="game-element3" id="game-element3" v-on:click="actionClick">
      <audio src="./src/assets/a.wav"></audio>
    </div>
    <div class="game-element4" id="game-element4" v-on:click="actionClick">
      <audio controls src="@/assets/a.mp3"></audio>
    </div>
  <div><img src="@/assets/logo.png" alt="нет"></div>
  </div>
</template>

<script>

export default {
  
  name: 'GameElement',
   data() {
    return {
  emptyArray:[],
  arrayRandom:[],
  fullArray:[],
  numberTimes: 0,
  numberOperations: 1,
  responseInterval: 1000,
  cancellationInterval: 400
    }},
    props:{
      start: Boolean
    },
    mounted() {
      this.fullArray.push(document.getElementById('game-element1'),
      document.getElementById('game-element2'),
      document.getElementById('game-element3'),
      document.getElementById('game-element4'))   
  },
  methods:{
    actionClick(e){
this.emptyArray.push(e.target);

setInterval(
   ()=>{
if(this.start && this.numberTimes<this.numberOperations){
   this.numberTimes++;
let randomNumberArray= Math.floor(Math.random(this.fullArray)*this.fullArray.length );

this.arrayRandom.push(this.fullArray[randomNumberArray].classList.add("colorTime"));
setTimeout(()=> this.fullArray[randomNumberArray].classList.remove("colorTime"),this.cancellationInterval);
  console.log(this.fullArray[randomNumberArray].lastElementChild.play())
}}
,this.responseInterval)

     
      //console.log(this.fullArray)
      //console.log(this.arrayRandom)
      
     // aud.play()
    },
  randomClick(){
  
      console.log(this.fullArray)
      
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.game-container
  display: grid
  grid-template-columns: 50% 50%
  grid-template-rows: 50% 50%
  width: 200px
  height: 200px
  box-shadow: 4px 3px 5px 1px grey
  border-radius: 25%

.game-element1
  display: inline-block
  width: 100%
  height: 100%
  background-color: pink
  border-top-left-radius: 50%
.game-element2
  display: inline-block
  width: 100%
  height: 100%
  background-color: green
  border-top-right-radius: 50%
.game-element3
  display: inline-block
  width: 100%
  height: 100%
  background-color: blue
  border-bottom-left-radius: 50%
.game-element4
  display: inline-block
  width: 100%
  height: 100%
  background-color: yellow
  border-bottom-right-radius: 50%  
.game-element1, 
.game-element2,
.game-element3,
.game-element4:hover
  cursor: pointer
.game-element4:active
  background-color: rgba(255, 99, 71, 0.1)
.colorTime
  background-color: black
</style>
