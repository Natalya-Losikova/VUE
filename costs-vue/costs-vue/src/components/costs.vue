<template>
  <div class="list">
    <div class="item" v-for="(item, idx) in list" :key="idx">
      {{ idx + 1 }} - {{ item }}
    </div>
  </div>
</template>
<script>
export default {
  name: "costs",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {},
};
</script>