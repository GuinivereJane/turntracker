<template>
  <v-carousel height="100%" :cycle="false" :hide-delimiters="true">
    <v-carousel-item>
      <tracker-grid/>
    </v-carousel-item>
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
  </v-carousel>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator';
import TrackerGrid from '../tracker/TrackerGrid';
@Component({
  components: { TrackerGrid },
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
    {
      src: `https://robohash.org/${Math.random()
        .toString(36)
        .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15)}?set=set4&size=100x100`,
    },
    {
      src: `https://robohash.org/${Math.random()
        .toString(36)
        .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15)}?set=set4&size=100x100`,
    },
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

