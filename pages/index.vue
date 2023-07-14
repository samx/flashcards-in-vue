<template>
<section class="default">
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
</template>

<script>

import { mapState, mapActions } from "vuex";

export default {

  components: {  },
  data () {
      return {
        showDefinition:false,
        cardReady:false
      }
  },
  props: [],
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