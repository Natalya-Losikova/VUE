<template>
  <div :class="[$style.wrapper]">
    <button :class="[$style.btnAdd]" @click="show = !show">
      ADD NEW COSTS +
    </button>
    <div v-if="show">
      <input type="text" v-model="date" placeholder="Date" />
      <input type="text" v-model="Category" placeholder="Category" />
      <input type="text" v-model="Value" placeholder="Value" />
      <button :class="[$style.btnSave]" @click="onSave">Save</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "addNewCosts",
  data() {
    return {
      show: false,
      date: "",
      Category: "",
      Value: "",
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    totalValue() {
      return 0;
    },
  },
  methods: {
    onSave() {
      const { Value, Category } = this;
      const data = {
        date: this.date || this.getCurrentDate,
        Category,
        Value,
      };

      console.log("emit: addNewPayment", data);
      this.$emit("addNewPayment", data);
    },
  },
};
</script>


<style lang="scss" module>
.btnAdd {
  padding: 10px 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: rgb(20, 155, 50);
  color: white;
}
.btnSave {
  margin-left: 40px;
  padding: 5px 20px;
}
input {
  padding: 5px 10px;
}
</style>