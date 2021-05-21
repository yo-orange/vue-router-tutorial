<template>
  <div class="us__nav">
    <router-link to="/settings/emails">emails</router-link>
    <br />
    <router-link to="/settings/profile">profile</router-link>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.us__nav {
  grid-area: nav;
  border: 1px dotted;
  margin-right: 0.75rem;
  padding: 0.3rem;
}
</style>