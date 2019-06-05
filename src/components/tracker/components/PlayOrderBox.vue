<template>
  <div pa-0 class="title center secondary">{{status ? 'Priority' : '' }}</div>
</template>
<style>
</style>
<script>
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class ScoreBox extends Vue {
  @Prop() notPriority;
  @Prop() priority;

  @Prop() status;
  order() {
    console.log('start');
    if (!this.notPriority && !this.priority) {
      return '--';
    }
    console.log('here');
    console.log(this.status ? '1st' : '2nd');

    return this.status ? '1st' : '2nd';
  }
}
</script>

        