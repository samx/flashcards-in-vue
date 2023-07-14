<template>
    <div>        
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
                    
                        <div class="has-text-danger mr-4" v-if="$store.state.isLogged === false">Login to start creatings cards</div>

                        <div>
                            <b-button label="Close" @click="props.close" />
                            <b-button :disabled="$store.state.isLogged === false" :loading="isLoading"  label="Create card" @click="createCard" type="is-link" />
                        </div>
                    </footer>
                </div>

            </template>
        </b-modal>
    </div>
</template>


<script>
import { mapActions } from "vuex";

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
    openModal(){
        this.showModal = true;
    },
    async createCard(){
        this.isLoading = true;

        await this.createNewCard({
            word:this.word,
            definition:this.definition
        })

        if(this.$route.query.level == 0){
            location.reload();
            return false;
        }

        this.$router.push({
             path: '/admin/bin', query: { level: 0 }
        });

        this.showModal = false;
        this.isLoading = false;
        this.word = ""
        this.definition = ""
    }
  },
  created () {

  }
}
</script>