<template>
  <v-carousel class="carousel" height="100%" :cycle="false" :hide-delimiters="true">
    <v-carousel-item>
      <tracker-grid/>
    </v-carousel-item>
    <v-carousel-item>
      <dashboard-grid/>
    </v-carousel-item>
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
  </v-carousel>
</template>
<style>
.carousel {
  max-width: 740px;
}
</style>
<script>
import { Vue, Component, Prop } from 'vue-property-decorator';
import TrackerGrid from '../tracker/TrackerGrid';
import DashboardGrid from '../tracker/DashboardGrid';

@Component({
  components: { TrackerGrid, DashboardGrid },
})
export default class MenuItem extends Vue {
  items = [
    {
      src: `https://robohash.org/${Math.random()
        .toString(36)
        .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15)}?set=set4&size=100x100`,
    },
  ];
}
</script>

