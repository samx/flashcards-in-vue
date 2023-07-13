<template>
<div class="columns">
  <div class="column is-one-quarter has-background-success">
    <div class="container">
        <div class="">
            <div class="column" v-for="(bin, index) in bins">
                <Bin :bin="bin" :key="'bin'+index" :id="'bin'+index"></Bin>
            </div>
        </div>
    </div>
  </div>
  <div class="column has-background-warning	">Auto</div>
</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Bin from "../components/Admin/Bin.vue"

export default {

  components: { Bin },
  data () {
      return {}
  },
  props: [],
  computed: {
    ...mapState("Admin",["bins"]),
  },
  methods: {
    ...mapActions("Admin", ["getBins"]),
  },
  async created () {

    await this.getBins();

    console.log(this.bins);

  },

}
</script>
<style scoped lang="scss">
.card{
    border-radius: 10px;
}
</style>