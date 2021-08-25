<template>
  <div :class="[$style.wrapper]">
    <button :class="[$style.btnAdd]" @click="show = !show">
      ADD NEW COSTS +
    </button>
    <div v-if="show">
      <input type="text" v-model="date" placeholder="Date" />
      <!-- <input type="text" v-model="category" placeholder="Category" /> -->
      <select v-model="category" v-if="options">
        <option class="option" value="" disabled selected hidden>
          Category
        </option>
        <option v-for="option in options" :value="option" :key="option">
          {{ option }}
        </option>
      </select>
      <input type="number" v-model.number="value" placeholder="Value" />
      <button :class="[$style.btnSave]" @click="onSave">Save</button>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
export default {
  name: "addNewCosts",
  data() {
    return {
      show: false,
      date: "",
      category: "",
      value: "",
    };
  },
  computed: {
    ...mapMutations(["setPaymentListData"]),
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    options() {
      return this.$store.getters.getCategories;
    },
  },
  methods: {
    ...mapActions(["fetchCategoryList"]),
    onSave() {
      const { category, value } = this;
      const data = {
        date: this.date || this.getCurrentDate,
        category,
        value,
      };

      console.log("emit: addNewPayment", data);
      this.$emit("addNewPayment", data);
    },
  },
  created() {
    this.fetchCategoryList();
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
select {
  padding: 5px 10px;
  color: #7b7b7b;
}
option {
  color: black;
}
</style>