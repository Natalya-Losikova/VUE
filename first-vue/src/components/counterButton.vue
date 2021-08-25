<template>
  <div>
    <button @click="onClick">Clicked {{ counter }}</button>
  </div>
</template>
<script>
export default {
  name: "counterButton",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    onClick() {
      this.counter++;
    },
  },
};
</script>