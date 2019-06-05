<template>
  <div
    v-bind:class="{'darken-1':glow, 'disabled':!active}"
    @click.stop="selected()"
    pa-0
    ripple
    class="secondary"
  >
    <v-img height="8rem" contain class="white--text" :src="icon"></v-img>
  </div>
</template>
<style>
.disabled {
  pointer-events: none;
}
</style>
<script>
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
@Component
export default class ScoreBox extends Vue {
  @Prop() icon;
  @Prop() id;
  @Prop() glow;
  @Prop() active;

  @Emit()
  selected() {
    return { id: this.id, target: 'priority' };
  }
}
</script>

