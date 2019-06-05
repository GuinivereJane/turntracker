<template>
  <v-container grid-list-xs ma-0>
    <v-layout align-center justify-end row fill-height wrap>
      <v-flex xs6 sm3 order-sm1 color="primary">
        <name-box :value="playerName(1)"/>
      </v-flex>
      <v-flex xs6 sm3 order-sm3 color="primary">
        <name-box :value="playerName(2)"/>
      </v-flex>
      <v-flex xs6 sm3 order-sm2="primary">time</v-flex>
      <v-flex xs6 sm3 order-sm4 color="primary">time</v-flex>
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
import NameBox from './components/NameBox';

const game = namespace('game/');

@Component({
  components: {
    NameBox,
    TurnBox,
  },
})
export default class DashboardGrid extends Vue {
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
  toggleActiveTurn(payload) {
    this.setActive(payload);
  }

  get binding() {
    const binding = {};
    if (this.$vuetify.breakpoint.xs) binding.column = true;
    return binding;
  }
}
</script>




