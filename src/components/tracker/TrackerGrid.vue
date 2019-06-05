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
          :active="inactive()"
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
          :active="inactive()"
          :id="2"
          v-on:selected="togglePriority"
          :glow="game.players[2].priority[game.turn-1]"
          :icon="game.players[2].icon"
        />
      </v-flex>
    </v-layout>
    <v-layout align-center row fill-height wrap>
      <v-flex secondary height="100%" xs6 sm3 pa-2 order-sm1 text-xs-center>
        <play-order-box
          :p1prior="game.players[1].priority[game.turn - 1]"
          :p2prior="game.players[2].priority[game.turn - 1]"
          :status="game.players[1].priority[game.turn - 1]"
        />
      </v-flex>
      <v-flex secondary height="100%" xs6 sm3 pa-2 order-sm3 text-xs-center>
        <play-order-box
          :p1prior="game.players[1].priority[game.turn - 1]"
          :p2prior="game.players[2].priority[game.turn - 1]"
          :status="game.players[2].priority[game.turn - 1]"
        />
      </v-flex>

      <v-flex secondary height="100%" xs12 sm6 pa-0 order-sm2>
        <battle-round-box :battleround="game.turn"/>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-space-between row fill-height>
      <time-buttons
        :active="game.players[1].active"
        :id="1"
        v-on:start-time="time"
        v-on:pause-time="time"
        v-on:stop-time="time"
      />
      <time-buttons
        :active="game.players[2].active"
        :id="2"
        v-on:start-time="time"
        v-on:pause-time="time"
        v-on:stop-time="time"
      />
    </v-layout>
  </v-container>
</template>


<script>
import { Vue, Component } from 'vue-property-decorator';
import { State, Mutation, namespace } from 'vuex-class';

import CommandBox from './components/CommandBox';
import NameBox from './components/NameBox';
import ScoreBox from './components/ScoreBox';
import PriorityBox from './components/PriorityBox';
import TimeButtons from './components/TimeButtons';
import PlayOrderBox from './components/PlayOrderBox';
import BattleRoundBox from './components/BattleRoundBox';

const game = namespace('game/');

@Component({
  components: {
    NameBox,
    CommandBox,
    ScoreBox,
    PriorityBox,
    TimeButtons,
    PlayOrderBox,
    BattleRoundBox,
  },
})
export default class TrackerGrid extends Vue {
  @State game;
  @game.Mutation increment;
  @game.Mutation decrement;
  @game.Mutation setPriority;
  @game.Mutation setActive;
  @game.Mutation stampTime;
  @game.Mutation clearActive;
  @game.Mutation nextTurn;

  increment(payload) {
    this.increment(payload);
  }
  decrement(payload) {
    this.decrement(payload);
  }
  score(id) {
    return this.game.players[id].score;
  }
  inactive() {
    return !this.game.players[1].active && !this.game.players[2].active;
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
    this.setActive(payload);
  }

  time(payload) {
    if (this.game.turn > 0 && this.game.players[payload.id].active) {
      this.stampTime(payload);

      if (payload.action === 'stop') {
        this.clearActive();
        if (this.game.players[payload.id].priority[this.game.turn - 1]) {
          if (payload.id === 1) {
            this.setActive({ id: 2 });
          }
          if (payload.id === 2) {
            this.setActive({ id: 1 });
          }
        } else {
          this.clearActive();
          this.nextTurn();
        }
      }
    }
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




