<template>
    <div class="card">
      <div class="card-content">
        <p class="title has-text-centered">
            {{ card.word }}
        </p>
      </div>
    
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
            Next display: {{ card.bin_word_date_next_display  }}
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
        }
    }
</script>
    
<style scoped lang="scss">
    .card{
        border-radius: 10px;
    }
</style>