<template>
  <div class="flex flex-col items-center w-4/5 ">
    <post-component
      class="p-2 m-2"
      v-for="(post, index) in posts"
      :post="post"
      :key="index"
    />
    <client-only>
      <infinite-loading
        class="w-4 h-4"
        @infinite="infiniteHandler"
      ></infinite-loading>
    </client-only>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import PostComponent from "./PostComponent.vue";

export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  components: { InfiniteLoading, PostComponent },
  methods: {
    async infiniteHandler($state) {
      console.log("check");
      const { data } = await this.$store.dispatch("api");
      data.length ? $state.loaded() : $state.complete();
    }
  }
};
</script>
