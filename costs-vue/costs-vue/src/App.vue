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
        <costs :list="currentElements" />
        Total Value: {{ getFPV }}
        <pagination
          :cur="page"
          :n="n"
          :length="paymentList.length"
          @paginate="onChangePage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import addNewCosts from "./components/addNewCosts.vue";
import costs from "./components/costs.vue";
import Pagination from "./components/pagination.vue";
export default {
  name: "App",
  components: {
    addNewCosts,
    costs,
    Pagination,
  },
  data() {
    return {
      page: 1,
      n: 10,
    };
  },

  computed: {
    ...mapGetters({
      paymentList: "getPaymentList",
    }),
    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },
    currentElements() {
      const { n, page } = this;
      return this.paymentList.slice(n * (page - 1), n * (page - 1) + n);
    },
  },

  mounted() {},
  methods: {
    ...mapMutations(["setPaymentListData", "addDataToPaymentList"]),

    addData(newPayment) {
      this.addDataToPaymentList(newPayment);
      console.log(newPayment);
    },
    onChangePage(p) {
      this.page = p;
    },
    fetchData() {
      return [
        {
          date: "15.4.2021",
          category: "Other",
          value: 111,
        },
        {
          date: "25.5.2021",
          category: "Food",
          value: 222,
        },
        {
          date: "04.7.2021",
          category: "Utilities",
          value: 333,
        },
      ];
    },
  },
  created() {
    // this.paymentList = this.fetchData();
    //this.$store.commit("setPaymentListData", this.fetchData());
    // this.setPaymentListData(this.fetchData());
    this.$store.dispatch("fetchData");
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