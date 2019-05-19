<template>
  <v-list-tile @click="go(item.route)">
    <v-list-tile-action>
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>
<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class MenuItem extends Vue {
  @Prop(Object) item;
  go(route) {
    this.$router.push(route);
  }
}
</script>