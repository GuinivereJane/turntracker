<template>
  <v-container ma-0 pa-0 grid-list-xs>
    <v-layout ma-0 pa-0 align-center justify-space-between wrap row fill-height>
      <v-flex
        v-bind:class="{'blurry-text':!active}"
        v-ripple="active"
        @click.stop="startTime()"
        pa-2
        align-center
        secondary
        xs12
        sm4
        text-xs-center
        height="100%"
      >Start Turn</v-flex>
      <v-flex
        v-bind:class="{'blurry-text':!active}"
        v-ripple="active"
        @click.stop="pauseTime()"
        pa-2
        secondary
        xs12
        sm4
        text-xs-center
        height="100%"
      >Pause Turn</v-flex>
      <v-flex
        v-bind:class="{'blurry-text':!active}"
        v-ripple="active"
        @click.stop="stopTime()"
        pa-2
        secondary
        xs12
        sm4
        text-xs-center
        height="100%"
      >Stop Turn</v-flex>
    </v-layout>
  </v-container>
</template>
<style>
.blurry-text {
  pointer-events: none;
  color: transparent;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
}
</style>
<script>
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class TimeButtons extends Vue {
  @Prop() id;
  @Prop() active;

  @Emit()
  startTime() {
    return { id: this.id, action: 'start' };
  }
  @Emit()
  pauseTime() {
    return { id: this.id, action: 'pause' };
  }
  @Emit()
  stopTime() {
    return { id: this.id, action: 'stop' };
  }
}
</script>
