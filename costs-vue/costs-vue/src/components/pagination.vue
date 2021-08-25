<template>
  <div class="pagination-wrap">
    <div @click="onClick(cur - 1)">back</div>
    <div class="page" v-for="page in amount" :key="page" @click="onClick(page)">
      {{ page }}
    </div>
    <div @click="onClick(cur + 1)">next</div>
  </div>
</template>


<script>
export default {
  name: "Pagination",
  props: {
    length: Number,
    n: {
      type: Number,
      default: 10,
    },
    cur: Number,
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n);
    },
  },
  methods: {
    onClick(p) {
      if (p < 1 || p > this.amount) {
        return;
      }
      this.$emit("paginate", p);
    },
  },
};
</script>

<style scoped lang="scss">
.pagination-wrap {
  display: flex;
  justify-content: center;
  & > div {
    padding: 10px;
    &.active {
      color: rgb(20, 155, 50);
    }
  }
}
</style>