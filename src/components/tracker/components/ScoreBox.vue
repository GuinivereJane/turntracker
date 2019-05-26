<template>
  <v-container ma-0 pa-0>
    <v-layout secondary align-center justify-end row fill-height>
      <v-flex>
        <div @click.stop="increment()" ripple class="scr-height secondary pa-2">
          <p class="text-xs-center ma-2 display-3 white--text" v-text="score"></p>
        </div>
      </v-flex>
      <v-flex class="cp-btn">
        <v-btn @click.stop="increment" ma-0 icon small>
          <v-icon ma-0>add_circle</v-icon>
        </v-btn>

        <v-btn @click.stop="decrement" mx-0 icon small>
          <v-icon>remove_circle</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
.scr-height {
  height: 8rem;
}
</style>
<script>
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class ScoreBox extends Vue {
  @Prop() score;
  @Prop() id;

  @Emit()
  increment() {
    return { id: this.id, target: 'score' };
  }

  @Emit()
  decrement() {
    return { id: this.id, target: 'score' };
  }
}
</script>


    