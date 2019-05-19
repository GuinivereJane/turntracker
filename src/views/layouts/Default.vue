<template>
  <v-app height="100%" id="inspire" dark>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <menu-item-list/>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Turn Tracker</v-toolbar-title>
    </v-toolbar>
    <v-content overflow-hidden>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span></span>
    </v-footer>
  </v-app>
</template>

<script>
import { Vue, Component, Prop } from 'vue-property-decorator';
import MenuItemList from '../../components/menu/MenuItemList.vue';

@Component({
  components: {
    MenuItemList,
  },
})
export default class Default extends Vue {
  @Prop(String) source;
  drawer = null;
}
</script>