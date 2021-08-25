<template>
  <div id="app">
    <div :class="[$style.wrapper]">
      <header>
        <div :class="[$style.title]">My personal costs</div>
      </header>
      <div :class="[$style.content]">
        {{ totalValue }}
        <my-costs :list="paymentList" />
      </div>
      <div :class="[$style.content]">
        <add-payment-form @addNewPayment="addData" />
      </div>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./components/addPaymentForm.vue";
import myCosts from "./components/myCosts.vue";

export default {
  name: "App",
  components: {
    myCosts,
    AddPaymentForm,
  },
  data() {
    return {
      paymentList: [],
    };
  },
  computed: {
    totalValue() {
      return 0;
    },
  },
  methods: {
    addData(newPayment) {
      this.paymentList.push(newPayment);
      console.log(newPayment);
    },
    fetchData() {
      return [
        {
          date: "111",
          category: "aaaaa",
          value: "111",
        },
        {
          date: "222",
          category: "bbbbb",
          value: "222",
        },
        {
          date: "333",
          category: "cccccc",
          value: "333",
        },
      ];
    },
  },
  created() {
    this.paymentList = this.fetchData();
  },
};
</script>

<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  display: block;
  height: 100%;
}
.title {
  font-size: 30px;
}
.content {
  padding-top: 30px;
}
</style>
