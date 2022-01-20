<template>
  <div class="container-start">
    <button class="start-game" v-on:click="randomClick">Start</button>
    <h2 class="level-title">Round: {{ numberLevel }}</h2>
  </div>
  <div class="game-container">
    <div class="game-element1" id="game-element1" v-on:click="actionClick">
      <audio :src="file4"></audio>
    </div>
    <div class="game-element2" id="game-element2" v-on:click="actionClick">
      <audio :src="file3"></audio>
    </div>
    <div class="game-element3" id="game-element3" v-on:click="actionClick">
      <audio :src="file2"></audio>
    </div>
    <div class="game-element4" id="game-element4" v-on:click="actionClick">
      <audio  :src="file1"></audio>
    </div>
  </div>
</template>

<script>
import file1 from "./muz1.mp3"
import file2 from "./muz2.mp3"
import file3 from "./muz3.mp3"
import file4 from "./muz4.mp3"
let randomNumberArray;
let activeSetInterval;

export default { 
  name: 'GameElement',
   data() {
    return {
  arrayRandom:[],
  fullArray:[],
  newArray: [],
  numberTimes: 0,
  numberLevel: 0,
  numberOperations: 0,
  file1, 
  file2,
  file3,
  file4
    }},
    props:{
      idOption: String
    },
    watch: {
      idOption() {
        this.numberLevel=0;
        this.numberTimes=0;
        this.numberOperations=0;
      }
    },
    mounted() {
      this.fullArray.push(document.getElementById('game-element1'),
      document.getElementById('game-element2'),
      document.getElementById('game-element3'),
      document.getElementById('game-element4'))   
  },
  methods:{
    randomClick(e){
      if(this.idOption){
          this.numberLevel++;
      }
 
      switch (this.idOption) {
  case "Normal":  
       activeSetInterval = setInterval( () => {
        this.numberTimes++;

        if( this.numberTimes==this.numberLevel){
              clearInterval(activeSetInterval)
          }

        randomNumberArray= Math.floor(Math.random(this.fullArray)*this.fullArray.length );
          this.fullArray[randomNumberArray].classList.add("colorTime");
            let addColorBlock = document.querySelector(".colorTime");
              this.newArray.push(addColorBlock);
                this.fullArray[randomNumberArray].lastElementChild.play();
        setTimeout(()=> 
          this.fullArray[randomNumberArray].classList.remove("colorTime"),300);      
      }
      ,1500)
    break;

  case "Sound Only":
    activeSetInterval = setInterval( () => {
        this.numberTimes++;

        if( this.numberTimes==this.numberLevel){
              clearInterval(activeSetInterval)
          }

        randomNumberArray= Math.floor(Math.random(this.fullArray)*this.fullArray.length );
          this.fullArray[randomNumberArray].classList.add("colorTime");
            let addColorBlock = document.querySelector(".colorTime");
              this.newArray.push(addColorBlock);
                this.fullArray[randomNumberArray].lastElementChild.play();
        setTimeout(()=> 
          this.fullArray[randomNumberArray].classList.remove("colorTime"),300);     
      }
      ,1000)
    break;

  case "Light Only":
    activeSetInterval = setInterval( () => {
        this.numberTimes++;

        if( this.numberTimes==this.numberLevel){
              clearInterval(activeSetInterval)
          }

        randomNumberArray= Math.floor(Math.random(this.fullArray)*this.fullArray.length );
          this.fullArray[randomNumberArray].classList.add("colorTime");
            let addColorBlock = document.querySelector(".colorTime");
              this.newArray.push(addColorBlock);
                this.fullArray[randomNumberArray].lastElementChild.play();
        setTimeout(()=> 
          this.fullArray[randomNumberArray].classList.remove("colorTime"),100);
      }
      ,400)
    break;

  case "Free board":  
    activeSetInterval = setInterval( () => {
        this.numberTimes++;

        if( this.numberTimes==this.numberLevel){
              clearInterval(activeSetInterval)
          }
        randomNumberArray= Math.floor(Math.random(this.fullArray)*this.fullArray.length );
          let addColorBlock = document.getElementById(this.fullArray[randomNumberArray].id); 
            this.newArray.push(addColorBlock);
              this.fullArray[randomNumberArray].lastElementChild.play();  
      }
      ,1500)
}
    },
  actionClick(e){
    if(this.numberOperations<this.numberTimes){
      if(this.newArray[0].id == e.target.id){
          e.target.lastElementChild.play();
            this.newArray.splice(0, 1);
              this.numberOperations++;
    if(this.numberOperations==this.numberTimes){
      this.numberTimes=0;
        this.numberOperations=0;
          this.randomClick(e);
    }
      }else{
        alert("error")
         this.numberLevel=0;
          this.numberTimes=0;
           this.numberOperations=0;
        }
    }
  },
} 
}
</script>

<style scoped lang="sass">
.container-start
  display: grid
  grid-template-columns: auto
  grid-template-rows: 50px 35px
  max-width: 230px
  height: 85px
  order: 2
  grid-row: 2/3
  grid-column: 3/4

.level-title
  font-weight: 700
  font-size: 25px
  display: inline-block
  height: 20px
  width: 100%
  text-align: left
  grid-row: 2/3

.start-game
  background-color: blue
  color: white
  font-size: 25px
  width: 100px
  height: 40px
  outline-style: none
  border: none
  box-shadow: 4px 3px 5px 1px grey
  border-radius: 5px
  margin-bottom: 15px
  &:hover
    cursor: pointer
  &:active
    margin: 1px

.game-container
  display: grid
  grid-template-columns: 50% 50%
  grid-template-rows: 50% 50%
  width: 200px
  height: 200px
  box-shadow: 4px 3px 5px 1px grey
  border-radius: 25%
  order: 2
  grid-row: 2/3
  grid-column: 2/3

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
.game-element1:active
  background-color: rgba(255, 99, 71, 0.1)
.game-element2:active
  background-color: rgba(255, 99, 71, 0.1)
.game-element3:active
  background-color: rgba(255, 99, 71, 0.1)
.game-element4:active
  background-color: rgba(255, 99, 71, 0.1)
.colorTime
  background-color: black

</style>
