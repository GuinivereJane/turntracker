<template>
  <div class="height headline secondary ma-0 fill pa-2">{{value}}</div>
</template>
<style>
.height {
  height: 3rem;
}
</style>
<script>
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class NameBox extends Vue {
  @Prop() value;
}
</script>



    