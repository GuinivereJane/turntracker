<template>
  <div class="headline text-xs-center secondary ma-0 fill pa-2">Battle Round: {{battleround}}</div>
</template>
<style>
</style>
<script>
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class BattleRoundBox extends Vue {
  @Prop() battleround;
}
</script>

