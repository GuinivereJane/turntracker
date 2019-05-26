<template>
  <v-container ma-0 pa-0>
    <v-layout justify-space-between>
      <v-flex v-for="(item,index) in priority" :key="index" @click.stop="active(index)">
        <div
          :class="{ 'darken-1': index+1 === turn && activate} "
          class="text-xs-center secondary pa-2 ma-0"
        >{{order(index)}}</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class TurnBox extends Vue {
  @Prop() turn;
  @Prop() priority;
  @Prop() id;
  @Prop() activate;

  @Emit()
  active(index) {
    return { id: this.id, target: 'turn', turn: index + 1 };
  }
  order(turn) {
    if (turn < this.turn) {
      return this.priority[turn] ? '1st' : '2nd';
    } else {
      return '--';
    }
  }
}
</script>
