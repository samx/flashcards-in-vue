<template>
<div class="columns">
  <div class="column is-one-quarter has-background-success">
    <div class="container">
        <div class="p-3">
            <button @click="$router.push({path: '/'})" class="is-fullwidth button ">Draw Card</button>
        </div>
        <div class="p-3">
            <button @click="$refs.CreateCardModal.openModal()" class="is-fullwidth button ">Create Card</button>
        </div>
        <CreateCardModal ref="CreateCardModal"></CreateCardModal>
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
import CreateCardModal from "../components/Shared/CreateCardModal.vue";
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