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
                            Select Login Type
                        </p>
                        <button
                            type="button"
                            class="delete"
                            @click="$emit('close')"/>
                    </header>

                    <section class="modal-card-body">                  
                        <b-field label="Anonymous login">
                            <button @click="loginAsTempUser" class="is-large is-fullwidth button is-info is-light">Quick test login</button>
                        </b-field>

                        <b-field label="Google login">
                            <button @click="loginWithGoogle" class="is-large is-fullwidth button is-warning is-light">Signin with Google</button>
                        </b-field>

                    </section>
                </div>

            </template>
        </b-modal>
    </div>
</template>


<script>
import {  mapActions } from "vuex";

export default {

  components: {  },
  data () {
      return {
        showModal:false,
      }
  },
  methods: {
    ...mapActions("AdminStore", ["loginAsTempUserAction"]),
    openModal(){
        this.showModal = true;
    },
    loginWithGoogle(){
        let currentWindow = window.location.href;
        window.location.href = `https://${window.location.hostname}/api/web/auth/google?returnTo=${currentWindow}`;
    },
    async loginAsTempUser(){
       this.loginAsTempUserAction()
    }
  },
  created () {

  }
}
</script>