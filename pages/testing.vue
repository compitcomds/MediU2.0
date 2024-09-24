<template>
  <div class="h-96">
    </div>
    <h1>Cookie Data</h1>
    <pre>{{ cookies }}</pre>
  
</template>

<script>
export default {
  data() {
    return {
      cookies: ''
    };
  },
  mounted() {
    this.cookies = document.cookie;
  }
};
</script>

<style scoped>
/* Add any styles you need here */
</style>
