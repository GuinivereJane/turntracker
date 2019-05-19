<template>
  <Carousel/>
</template>

<style>
.test {
  width: 100%;
  height: 100%;
}
</style>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator';
import Carousel from '../components/carousel/Carousel';
import { Random } from 'random-js';

@Component({
  components: {
    Carousel,
  },
})
export default class Dashboard extends Vue {
  random = new Random(); // uses the nativeMath engine
  get num() {
    return this.random.integer(1, 6);
  }
}
</script>
