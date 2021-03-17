<template>
  <App />
</template>

<script lang="ts">
import Vue from "vue";
import InfiniteLoading from "vue-infinite-loading";
import App from "~/components/App.vue";

export default Vue.extend({
  components: { InfiniteLoading, App }
});
</script>
