<template>
  <button
    class="w-full shadow-md focus:outline-none bg-gray-50 rounded-xl"
    @click="handleClick"
  >
    <div class="flex flex-col items-start justify-start px-2">
      <div class="mb-2 mr-2 font-semibold">{{ post.title }}</div>
      <div class="flex justify-between w-full">
        <!-- <div class="text-gray-500">{{ post.objectID }}</div> -->
        <div class="flex items-center text-gray-500 ">
          <div class="flex items-center mr-2">
            <span class="material-icons">
              perm_identity
            </span>
            {{ post.author }}
          </div>
          <div class="flex items-center mr-2">
            <span class="mr-1 material-icons">
              favorite_border
            </span>
            {{ post.points }}
          </div>
        </div>
        <div class="text-gray-500 ">{{ created_at_i }}</div>
      </div>
    </div>
  </button>
</template>

<script>
import { formatDistanceToNow } from "date-fns";

export default {
  props: ["post"],
  methods: {
    handleClick() {
      window.open(this.post.url);
    }
  },
  computed: {
    created_at_i() {
      return formatDistanceToNow(this.post.created_at_i * 1000);
    }
  }
};
</script>
