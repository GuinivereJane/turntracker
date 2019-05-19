<template>
  <v-container fluid grid-list-sm>
    <v-layout>
      <v-flex>
        <v-card tile dark color="primary">
          <v-card-text>1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout justify-space-between v-bind="binding">
      <v-flex sm4 md3>
        <v-card v-bind:class="{glow:!isActive}" @click="isActive = !isActive" color="primary">
          <v-img height="8rem" class="white--text" :src="require('../../assets/sigmar.png')"></v-img>
        </v-card>
      </v-flex>
      <v-flex sm2 md1>
        <v-card
          ripple
          @click="increment({id:'1', target:'score'})"
          height="8rem"
          dark
          color="secondary"
        >
          <v-flex align-self-center flexbox>
            <p class="text-xs-center display-4 white--text" v-text="game.players['1'].score"></p>
          </v-flex>
        </v-card>
      </v-flex>
      <v-flex sm2 md1>
        <v-card
          ripple
          @click="increment({id:'2', target:'score'})"
          height="8rem"
          dark
          color="secondary"
        >
          <v-flex align-self-center flexbox>
            <p class="text-xs-center display-4 white--text" v-text="game.players['2'].score"></p>
          </v-flex>
        </v-card>
      </v-flex>
      <v-flex sm4 md3>
        <v-card v-bind:class="{glow:isActive}" @click="isActive = !isActive" color="primary">
          <v-img height="8rem" class="white--text" :src="require('../../assets/chaos.png')"></v-img>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-card dark color="primary">
          <v-card-text>5</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
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




