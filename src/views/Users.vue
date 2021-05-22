<!-- https://router.vuejs.org/ja/guide/essentials/dynamic-matching.html -->
<!-- https://router.vuejs.org/ja/guide/advanced/navigation-guards.html#%E3%82%AF%E3%82%99%E3%83%AD%E3%83%BC%E3%83%8F%E3%82%99%E3%83%AB%E3%83%92%E3%82%99%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AB%E3%82%99%E3%83%BC%E3%83%88%E3%82%99 -->
<template>
  <div class="users">
    <div id="nav">
      <router-link :to="{ name: 'UsersTop', params: { id: id } }"
        >Top</router-link
      >
      |
      <router-link :to="{ name: 'Profile', params: { id: id } }"
        >Profile</router-link
      >
      |
      <router-link :to="{ name: 'Posts', params: { id: id } }"
        >Posts</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Users",
  props: {
    id: {
      type: Number,
    },
  },
  beforeRouteEnter(to, from, next) { // eslint-disable-line
    // このコンポーネントを描画するルートが確立する前に呼ばれます。
    // `this` でのこのコンポーネントへのアクセスはできません。
    // なぜならばこのガードが呼び出される時にまだ作られていないからです!
    console.log("component:beforeRouteEnter");
    next();
  },
  beforeRouteUpdate(to, from, next) { // eslint-disable-line
    // このコンポーネントを描画するルートが変更されたときに呼び出されますが、
    // このコンポーネントは新しいルートで再利用されます。
    // たとえば、動的な引数 `/foo/:id` を持つルートの場合、`/foo/1` と `/foo/2` の間を移動すると、
    // 同じ `Foo` コンポーネントインスタンスが再利用され、そのときにこのフックが呼び出されます。
    // `this` でコンポーネントインスタンスにアクセスできます。
    console.log("component:beforeRouteUpdate");
    next();
  },
  beforeRouteLeave(to, from, next) { // eslint-disable-line
    // このコンポーネントを描画するルートが間もなく
    // ナビゲーションから離れていく時に呼ばれます。
    // `this` でのコンポーネントインスタンスへのアクセスができます。
    console.log("component:beforeRouteLeave");
    next();
  },
  setup() {},
};
</script>