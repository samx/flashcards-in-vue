<template>
  <div class="container">
    <div class="content">
      <h1 class="is-size-3" v-if="error.statusCode === 404 || error.statusCode === 403">
        {{ error.message }}
      </h1>
      <h1 class="is-size-3" v-else>An error occurred</h1>
      <a :href="linkHome">Home page</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  data () {
    return {
    linkHome:'/'  
    }
  },
  layout: "error", // you can set a custom layout for the error page,
  computed: {
    
  },
  head() {
    return {
      // Set Meta Tags for this Page
      title:`Page Error - ${this.error.statusCode}`,
    };
  },
  mounted () {

  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  background-color: rgba(255, 255, 255, 0.527);
  max-width: 700px;
  padding: 20px;
  border-radius: 20px;
  margin: 0px auto 20px;
  font-family: "Maniac-Logo";
  justify-content: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  display: block;
  height: fit-content;
}
</style>