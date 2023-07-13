<template>
    <div>
        <div class="has-text-centered">
            <button @click="showModal = true" class="is-fullwidth button m-3 ">Create Card</button>
        </div>
        <b-modal
            v-model="showModal"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-modal>
            <template #default="props">

            <div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">
                        Create New Flash Card
                    </p>
                    <button
                        type="button"
                        class="delete"
                        @click="$emit('close')"/>
                </header>

                <section class="modal-card-body">                  
                    <b-field label="Word">
                        <b-input v-model="word" value=""></b-input>
                    </b-field>

                    <b-field label="Definition">
                        <b-input v-model="definition" maxlength="200" type="textarea"></b-input>
                    </b-field>

                </section>

                <footer class="modal-card-foot">
                    <b-button label="Close" @click="props.close" />
                    <b-button :loading="isLoading"  label="Create card" @click="createCard" type="is-link" />
                </footer>
            </div>

            </template>
        </b-modal>
    </div>
</template>


<script>
import { mapState, mapActions } from "vuex";

export default {

  components: {  },
  data () {
      return {
        word:"",
        definition:"",
        showModal:false,
        isLoading:false
      }
  },
  methods: {
    ...mapActions("AdminStore", ["createNewCard"]),
    async createCard(){
        this.isLoading = true;

        await this.createNewCard({
            word:this.word,
            definition:this.definition
        })

        this.$router.push({
             path: '/admin/bin', query: { level: 0 }
        });

        this.showModal = false;
        this.isLoading = false;
    }
  },
  created () {

  }
}
</script>