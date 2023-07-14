<template>
    <div class="card">
      <div class="card-content">
        <p class="title has-text-centered">
            <span class="word">{{ card.word }}</span>
            <span class="definition">{{ card.definition }}</span>
        </p>
      </div>
    
      <footer class="card-footer">
        <p class="card-footer-item">
          <span v-html="nextDisplayTime">
          </span>
        </p>
        <p class="card-footer-item">
          <span>
            Wrong count: {{ card.word_wrong_count  }}
          </span>
        </p>
      </footer>
    </div>
</template>
    
<script>    
    export default {
        props:["card"],
        components: {  },
        data () {
            return {}
        },
        computed:{
          timeLeft(){
            return this.$options.filters.timeLeft(this.card.time_difference_in_seconds)
          },
          nextDisplayTime(){
            if(Number(this.card.word_wrong_count) > 9){
              return 'Next display time: <span class="has-text-danger">never</span>' 
            }else{
              return 'Next display time: '+ this.timeLeft;
            }
          }
        }
    }
</script>
    
<style scoped lang="scss">
    .card{
        border-radius: 10px;
    }
    .definition {
      display:none;
    }
    .card-content:hover .definition {
      display:inline;
    }
    .card-content:hover .word {
      display:none;
    }
</style>