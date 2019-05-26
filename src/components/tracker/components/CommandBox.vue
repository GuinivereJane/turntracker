<template>
  <v-container ma-0 pa-0>
    <v-layout secondary align-center justify-end row fill-height>
      <v-flex>
        <p class="my-0 text-xs-center headline">CP: {{value}}</p>
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
.cp-btn {
  text-align: right;
}
</style>
<script>
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class NameBox extends Vue {
  @Prop() value;
  @Prop() id;

  @Emit()
  increment() {
    return { id: this.id, target: 'cp' };
  }

  @Emit()
  decrement() {
    return { id: this.id, target: 'cp' };
  }
}
</script>



    