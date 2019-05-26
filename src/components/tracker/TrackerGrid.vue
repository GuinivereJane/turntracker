<template>
  <v-container grid-list-xs ma-0>
    <v-layout align-center justify-end row fill-height wrap>
      <v-flex xs6 sm3 order-sm1 color="primary">
        <name-box :value="playerName(1)"/>
      </v-flex>
      <v-flex xs6 sm3 order-sm3 color="primary">
        <name-box :value="playerName(2)"/>
      </v-flex>
      <v-flex xs6 sm3 order-sm2="primary">
        <command-box :id="1" :value="cp(1)" v-on:increment="increment" v-on:decrement="decrement"/>
      </v-flex>
      <v-flex xs6 sm3 order-sm4 color="primary">
        <command-box :id="2" :value="cp(2)" v-on:increment="increment" v-on:decrement="decrement"/>
      </v-flex>
    </v-layout>
    <v-layout justify-space-between v-bind="binding">
      <v-flex xs12 sm3>
        <priority-box
          :id="1"
          v-on:selected="togglePriority"
          :glow="game.players[1].priority[game.turn-1]"
          :icon="game.players[1].icon"
        />
      </v-flex>
      <v-flex xs6 sm3>
        <score-box :id="1" v-on:increment="increment" v-on:decrement="decrement" :score="score(1)"/>
      </v-flex>
      <v-flex xs6 sm3>
        <score-box :id="2" v-on:increment="increment" v-on:decrement="decrement" :score="score(2)"/>
      </v-flex>
      <v-flex xs12 sm3>
        <priority-box
          :id="2"
          v-on:selected="togglePriority"
          :glow="game.players[2].priority[game.turn-1]"
          :icon="game.players[2].icon"
        />
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 order-sm1>
        <turn-box
          :id="1"
          :turn="turn()"
          v-on:active="toggleActiveTurn"
          :priority="game.players[1].priority"
          :activate="game.players[1].active"
        />
      </v-flex>
      <v-flex xs12 sm6 order-sm2>
        <turn-box
          :id="2"
          v-on:active="toggleActiveTurn"
          :turn="turn()"
          :priority="game.players[2].priority"
          :activate="game.players[2].active"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import { Vue, Component } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';
import TurnBox from './components/TurnBox';
import CommandBox from './components/CommandBox';

import NameBox from './components/NameBox';
import ScoreBox from './components/ScoreBox';
import PriorityBox from './components/PriorityBox';

const game = namespace('game/');

@Component({
  components: { NameBox, TurnBox, CommandBox, ScoreBox, PriorityBox },
})
export default class TrackerGrid extends Vue {
  @State game;
  @game.Mutation increment;
  @game.Mutation decrement;
  @game.Mutation setPriority;
  @game.Mutation setActive;

  increment(payload) {
    this.increment(payload);
  }
  decrement(payload) {
    this.decrement(payload);
  }
  score(id) {
    return this.game.players[id].score;
  }

  turn() {
    return this.game.turn;
  }
  cp(playerNum) {
    return this.game.players[playerNum].cp;
  }
  playerName(playerNum) {
    return this.game.players[playerNum].name;
  }
  togglePriority(payload) {
    this.setPriority(payload);
  }

  toggleActiveTurn(payload) {
    this.setActive(payload);
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




