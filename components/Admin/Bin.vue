<template>
<NuxtLink :to="{ path: '/admin/bin', query: { level: bin.bin_level }}">
<div class="card has-background-warning">

  <div class="card-content">
    <p class="title has-text-centered">
        Bin  {{ bin.bin_level }}
    </p>
  </div>

  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        View Cards {{ bin.total_cards_in_bins }}
      </span>
    </p>
  </footer>
</div>
</NuxtLink>

</template>

<script>

export default {
    props:["bin"],
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