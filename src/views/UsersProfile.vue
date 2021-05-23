<template>
  <div class="users profile">
    <h1>This is Profile page</h1>
    <div>Profile User Id: {{ id }}</div>
  </div>
</template>

<script>
export default {
  name: "UsersProfile",
  props: {
    id: {
      type: String,
    },
  },
  setup() {},
};
</script>
