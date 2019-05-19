<template>
  <default/>
</template>
<style>
html {
  overflow-y: hidden;
}
</style>
<script>
import { Vue, Component, Prop } from 'vue-property-decorator';
import Default from './views/layouts/Default.vue';

@Component({
  components: {
    Default,
  },
})
export default class App extends Vue {}
</script>
