<!-- https://router.vuejs.org/ja/guide/essentials/dynamic-matching.html -->
<!-- https://router.vuejs.org/ja/guide/advanced/navigation-guards.html#%E3%82%AF%E3%82%99%E3%83%AD%E3%83%BC%E3%83%8F%E3%82%99%E3%83%AB%E3%83%92%E3%82%99%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AB%E3%82%99%E3%83%BC%E3%83%88%E3%82%99 -->
<template>
  <div class="users">
    <div id="nav">
      <router-link :to="{ name: 'UsersTop', params: { id: id } }">Top</router-link> |
      <router-link :to="{ name: 'Profile', params: { id: id } }">Profile</router-link> | 
      <router-link :to="{ name: 'Posts', params: { id: id } }">Posts</router-link>
    </div>
    <router-view class="child-view" v-slot="{ Component }">
      <transition :name="transitionName">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "Users",
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      transitionName: 'slide-left'
    }
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
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
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

<!-- https://github.com/vuejs/vue-router/blob/dev/examples/transitions/index.html -->
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .75s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.child-view {
  position: absolute;
  transition: all .75s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>