<template>
  <div class="post">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="info" class="content">
      <p>{{ info }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ZipCode",
  data() {
    return {
      loading: true,
      info: null,
      error: null,
    };
  },
  created() {
    // view が作られた時にデータを取得し、
    // そのデータは既に監視されています
    this.getData();
  },
  watch: {
    // ルートが変更されたらこのメソッドを再び呼び出します
    $route: "getData",
  },
  methods: {
    getData() {
      this.error = this.info = null;
      this.loading = true;

      this.axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => {
          console.log("axios");
          this.info = response;
        })
        .catch((error) => {
          this.error = error.toString();
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  setup() {},
};
</script>