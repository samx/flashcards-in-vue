<template>
<div class="columns">
  <div class="column is-one-quarter has-background-success">
    <div class="container">
        <CreateCardModal></CreateCardModal>
        <div class="">            
            <div class="column" v-for="(bin, index) in bins">
                <Bin :bin="bin" :key="'bin'+index" :id="'bin'+index"></Bin>
            </div>
        </div>
    </div>
  </div>
  <div class="column">
    <NuxtChild  />
  </div>
</div>
</template>

<script>
import CreateCardModal from "../components/Admin/CreateCardModal.vue";
import { mapState, mapActions } from "vuex";
import Bin from "../components/Admin/Bin.vue"

export default {

  components: { Bin, CreateCardModal },
  data () {
      return {}
  },
  props: [],
  computed: {
    ...mapState("AdminStore",["bins"]),
  },
  methods: {
    ...mapActions("AdminStore", ["getBins"]),
  },
  async created () {
    await this.getBins();
  }

}
</script>
<style scoped lang="scss">
</style>