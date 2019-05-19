 <template>
  <v-list dense>
    <menu-item v-for="(item, index) in menu.items" v-bind:key="index" v-bind:item="item"/>
  </v-list>
</template>
<script>
import { Vue, Component, Prop } from 'vue-property-decorator';
import MenuItem from './MenuItem.vue';
import { State } from 'vuex-class';

@Component({
  components: {
    MenuItem,
  },
})
export default class MenuItemList extends Vue {
  @State menu;
}
</script>
