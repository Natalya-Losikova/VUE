<template>
  <div id="app">
    <div :class="[$style.wrapper]">
      <header>
        <div :class="[$style.title]">My personal costs</div>
      </header>
      <div :class="[$style.content]">
        <add-new-costs @addNewPayment="addData" />
      </div>
      <div :class="[$style.content]">
        <costs :list="paymentList" />
        {{ "Total: " }} {{ totalValue }}
      </div>
    </div>
  </div>
</template>

<script>
import addNewCosts from "./components/addNewCosts.vue";
import costs from "./components/costs.vue";
export default {
  name: "App",
  components: {
    addNewCosts,
    costs,
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
          date: "2016-05-03",
          category: "aaaaa",
          value: "111",
        },
        {
          date: "2016-05-0",
          category: "bbbbb",
          value: "222",
        },
        {
          date: "2016-05-0",
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
  margin-left: 35px;
  font-size: 20px;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.title {
  font-size: 50px;
  color: rgb(58, 73, 68);
  margin-top: 35px;
}
</style>