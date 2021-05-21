<!-- https://router.vuejs.org/ja/guide/essentials/dynamic-matching.html -->
<!-- https://router.vuejs.org/ja/guide/advanced/navigation-guards.html#%E3%82%AF%E3%82%99%E3%83%AD%E3%83%BC%E3%83%8F%E3%82%99%E3%83%AB%E3%83%92%E3%82%99%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AB%E3%82%99%E3%83%BC%E3%83%88%E3%82%99 -->
<template>
  <div class="users">
    <h1>This is User Top Page</h1>
    <div>User ID: {{ $route.params.id }}</div>
  </div>
</template>
