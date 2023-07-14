<template>
<div>
    <nav>
        <div class="is-flex">
            <div v-if="$store.state.isLogged">
                <font class="is-size-4 has-text-white">username: {{ $store.state.user.username }}</font>
                <button @click="$store.dispatch('signout')" class="mx-2 is-info is-light  button">Logout</button> 
                <button @click="$router.push({path: '/admin/bin', query: { level: 0 }});" class="mx-2 is-info is-light  button">View Cards</button> 
            </div>

            <div v-else>
                <button @click="$refs.LoginModal.openModal()"  class="button is-info is-light mx-2">Login</button> 
                <LoginModal ref="LoginModal"></LoginModal>
            </div>

            <button  @click="$refs.CreateCardModal.openModal()" class="mx-2 is-info is-light  button">Add Card</button> 
            <CreateCardModal ref="CreateCardModal"></CreateCardModal>
       </div> 
    </nav>
    <section class="main">
        <div class="bg-animation">
            <div class="bg-1"></div>
            <div class="bg-2"></div>
            <div class="bg-3"></div>
        </div>

        <button v-if="!cardReady" class="is-large button is-dark is-loading"></button>
        
        <div v-else-if="hasAlert" class="notification is-warning is-light">
            {{ card.message }}
        </div>

        <div v-else class="container is-widescreen">
            <div class="card">

                <div v-if="!showDefinition" class="card-content">
                    <p class="title has-text-centered">
                    {{ card.word }}
                    </p>
                </div>
                <div v-else class="card-content">
                    <p class="title has-text-centered">
                        {{ card.definition }}                
                    </p>
                </div>


                <footer v-if="!showDefinition" @click="showDefinition = true" class="card-footer">
                    <button class="button card-footer-item is-fullwidth is-large is-warning is-light">
                        <span>
                            Show definition
                        </span>
                    </button>
                </footer>

                <footer v-else class="card-footer">
                    <button @click="correct(true)" class="button card-footer-item  is-large is-success is-light">
                        <span>
                            I got it
                        </span>
                    </button>
                    <button @click="correct(false)" class="button card-footer-item  is-large is-danger is-light">
                        <span>
                            I did not get it
                        </span>
                    </button>
                </footer>

            </div>
        </div>
    </section>
</div>
</template>

<script>

import { mapState, mapActions } from "vuex";
import CreateCardModal from "../components/Shared/CreateCardModal.vue";
import LoginModal from "../components/Shared/LoginModal.vue";
export default {

  components: { CreateCardModal, LoginModal },
  data () {
      return {
        showDefinition:false,
        cardReady:false
      }
  },
  computed: {
    ...mapState("HomeStore",["hasAlert","card"]),
  },
  methods: {
    ...mapActions("HomeStore", ["drawCard","answerCard"]),
    async correct(value){
        this.cardReady = false;

        await this.answerCard({
            card_id:this.card.card_id,
            bin_id:this.card.bin_id,
            word_wrong_count:this.card.word_wrong_count,
            correct:value
        })

        await this.drawCard();

        this.cardReady = true;
        this.showDefinition = false;
    }
  },
  async created () {
    await this.drawCard();
    this.cardReady = true;
  }
}
</script>


<style scoped lang="scss">
nav {
    position: absolute;
    top: 0;
    left: 0px;
    right: 0px;
    box-shadow: 0 1px 6px #000000a3;
    background-color: #0079d8;
    z-index: 10000;
    display: flex;
    height:50px;
    align-items: center;
    padding: 0 20px;
    justify-content: center;
}
section {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: block;
    justify-content: center;
    align-items: center;
    display: flex;

}

.bg-animation {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0
}

.bg-animation>div {
    will-change: opacity;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0
}

.bg-1 {
    background: linear-gradient(180deg,#f9dea1 60%,#9bdaff 100%)
}

.bg-2 {
    background: linear-gradient(300deg,#f9c3f5 60%,#9bdaff 100%);
    animation: bg-fade-1 10s linear infinite
}

.bg-3 {
    background: linear-gradient(10deg,#bab2fc 60%,#9bdaff 100%);
    animation: bg-fade-2 10s linear infinite
}

@keyframes bg-fade-1 {
    0% {
        opacity: 1
    }

    33% {
        opacity: 1
    }

    66% {
        opacity: 0
    }

    to {
        opacity: 0
    }
}

@keyframes bg-fade-2 {
    0% {
        opacity: 1
    }

    33% {
        opacity: 0
    }

    66% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

</style>