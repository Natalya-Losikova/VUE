<template>
  <div>
    <input type="text" v-model="date" placeholder="Date" />
    <input type="text" v-model="Category" placeholder="Category" />
    <input type="text" v-model="Value" placeholder="Value" />
    <button @click="onSave">Save</button>
  </div>
</template>
<script>
export default {
  name: "addPaymentForm",
  data() {
    return {
      date: "",
      Category: "",
      Value: "",
      paymentList: []
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
  },
  methods: {
     addData(newPayment) {
      this.paymentList.push(newPayment);
      console.log(newPayment);
    },
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