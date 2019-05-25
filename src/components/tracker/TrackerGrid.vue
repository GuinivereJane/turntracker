<template>
  <v-container   grid-list-sm>
    <v-layout row wrap>
      <v-flex xs6 sm3 order-sm1>
          <v-card dark color="primary">
          <v-card-text class="px-0" >{{playerName(1)}}</v-card-text>
        </v-card>
      </v-flex>
          <v-flex xs6 sm3 order-sm3 >

      <v-card dark color="primary">
          <v-card-text class="px-0" >{{playerName(2)}}</v-card-text>
          </v-card>
      </v-flex>
      <v-flex xs6 sm3 order-sm2 >

      <v-card dark color="primary">
          <v-card-text class="px-0" >CP={{cp(1)}}</v-card-text>
          </v-card>
      </v-flex>
     <v-flex xs6 sm3 order-sm4>

      <v-card dark color="primary">
          <v-card-text class="px-0" >CP={{cp(2)}}</v-card-text>
          </v-card>
      </v-flex>
    
  
    </v-layout>

    <v-layout justify-space-between v-bind="binding">
      <v-flex xs12 sm3>
        <v-card v-bind:class="{glow:!isActive}" @click="isActive = !isActive" color="primary">
          <v-img
            height="8rem"
            contain
            class="white--text"
            :src="require('../../assets/sigmar.png')"
          ></v-img>
        </v-card>
      </v-flex>
      <v-flex xs6 sm3>
        <v-card
          height="8rem"
          ripple
          @click="increment({id:'1', target:'score'})"
          dark
          color="secondary"
        >
          <v-flex align-self-center flexbox>
            <p class="text-xs-center pt-3 display-3 white--text" v-text="game.players['1'].score"></p>
          </v-flex>
        </v-card>
      </v-flex>
      <v-flex xs6 sm3>
        <v-card
          ripple
          @click="increment({id:'2', target:'score'})"
          height="8rem"
          dark
          color="secondary"
        >
          <v-flex align-self-center flexbox>
            <p class="text-xs-center pt-3 display-3 white--text" v-text="game.players['2'].score"></p>
          </v-flex>
        </v-card>
      </v-flex>
      <v-flex xs12 sm3>
        <v-card v-bind:class="{glow:isActive}" @click="isActive = !isActive" color="primary">
          <v-img contain height="8rem" class="white--text" :src="require('../../assets/chaos.png')"></v-img>
        </v-card>
      </v-flex>
    </v-layout>
      <v-layout row wrap>
      <v-flex xs12 sm6 order-sm1>
     <v-layout justify-space-around>
          <v-flex sm2 v-for="(turn,index) in priority(1)" :key="index">
            <div v-bind:class="{primary: turn, secondary:!turn, 'secondary--text': !turn} ">
              {{ turn}}
            </div>
          </v-flex>
        </v-layout>
         
      </v-flex>
          <v-flex xs12 sm6 order-sm2 >

     <v-layout justify-space-around row reverse>
          <v-flex sm2 v-for="(turn,index) in priority(2)" :key="index" >
            <div v-bind:class="{primary: turn, secondary:!turn, 'secondary--text': !turn} ">
              {{turn}}
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    
    
  
    </v-layout>
  </v-container>
</template>

<style>
.height-8 {
  height: 8rem;
}
.glow {
  box-shadow: inset 0 0 50px #fff, inset 20px 0 80px #f0f,
    inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,
    0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
}
</style>
<script>
import { Vue, Component } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

const game = namespace('game/');

@Component
export default class TrackerGrid extends Vue {
  @State game;
  @game.Mutation increment;

  isActive = true;

  mounted() {
    console.log(this.$vuetify.breakpoint);
  }
  priority(playerNum){
    return this.game.players[playerNum].priority
  }
  cp(playerNum){
    return this.game.players[playerNum].cp
  }
  playerName(playerNum){
    return this.game.players[playerNum].name
  }
  random() {
    return `https://robohash.org/${Math.random()
      .toString(36)
      .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)}?set=set4&size=75x75`;
  }
  get binding() {
    const binding = {};
    if (this.$vuetify.breakpoint.xs) binding.column = true;
    return binding;
  }
}
</script>




