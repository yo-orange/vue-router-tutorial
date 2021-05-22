<template>
  <div class="users posts">
    <h1>This is Posts page</h1>
    <div>Post User ID: {{ id }}</div>
    <div>Post Title: {{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "UsersPosts",
  props: {
    id: {
      type: String,
    },
    title: { type: String },
  },
  setup() {},
};
</script>