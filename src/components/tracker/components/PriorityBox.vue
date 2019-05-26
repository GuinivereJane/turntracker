<template>
  <div v-bind:class="{'darken-1':glow}" @click.stop="selected()" pa-0 ripple class="secondary">
    <v-img height="8rem" contain class="white--text" :src="icon"></v-img>
  </div>
</template>
<style>
</style>
<script>
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
@Component
export default class ScoreBox extends Vue {
  @Prop() icon;
  @Prop() id;
  @Prop() glow;

  @Emit()
  selected() {
    return { id: this.id, target: 'priority' };
  }
}
</script>

