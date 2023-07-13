<template>
<div>
    <section class="hero is-info">
        <div class="hero-body">
            <p class="title">
                Bin {{ binLevel }}
            </p>
            <p class="subtitle">
                You have {{ binCardsTotal }} cards in bin
            </p>
        </div>
    </section>
    <div class="column" v-for="(card, index) in binCards">
        <Card :card="card" :key="'card'+index" :id="'card'+index"></Card>
    </div>
    

</div>
</template>

<script>
import Card from "../../components/Admin/Card.vue"
import { mapState, mapActions } from "vuex";

export default {
    components:{
        Card
    },
    data() {
        return {
            bin_level:null
        }
    },
    computed:{
        ...mapState("AdminStore",["binCards"]),
        binLevel(){
            return this.$route.query.level
        },
        binCardsTotal(){
            return this.binCards.length;
        }
    },
    methods: {
        ...mapActions("AdminStore", ["getBinCards"]),
        loadCards(){
            this.getBinCards(this.binLevel)
        }
    },
    created() {
        this.loadCards()
    },
    watch: {
        binLevel(){
            this.loadCards()
        }
    }
}
</script>