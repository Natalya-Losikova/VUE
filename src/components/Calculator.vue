<template>
  <div>
    {{ message }}

    <div>
      <input
        type="number"
        placeholder="Operand1"
        v-on:focus="onFocus"
        v-model.number.trim="operand1"
      />
      <input
        type="number"
        placeholder="Operand2"
        v-model.number.trim="operand2"
      />
      <br />
      ={{ result }}
      <br />
      =Fibanachi -{{ fbResult }}

      <div v-if="!!error" :class="{ error: !!error }">
        Ошибка:
        {{ error }}
      </div>
      <div class="strMessage">
        <template v-if="result < 0">Отридцательное число</template>
        <template v-else-if="result < 100">Результат в первой сотне</template>
        <template v-else>Все остальное</template>
      </div>

      <div class="keyboard">
        <button
          v-for="operation in operations"
          :key="operation"
          @click="calculate(operation)"
          :title="operation"
        >
          {{ operation }}
        </button>
      </div>
      <div class="array">
        <input
          type="checkbox"
          id="numbersCheckbox"
          @click="hideNumbers()"
          checked
        />
        <div id="numbersKeyboard">
          <button
            v-for="(item, index) in myNumbers"
            :key="`${index}_list`"
            @click="insertNumber(item)"
          >
            {{ item }}</button
          ><br />
          <input
            type="radio"
            name="operandChange"
            id="operand1Checkbox"
            @click="chooseOperand1()"
            checked
          />
          <label for="operand1Checkbox">Operand 1</label>
          <input
            type="radio"
            name="operandChange"
            id="operand2Checkbox"
            @click="chooseOperand2()"
          />
          <label for="operand2Checkbox">Operand 2</label>
        </div>
      </div>
      <div class="logs">
        Logs
        <br />
        <div v-for="(log, id) in logs" :key="id">{{ id }} - {{ log }}</div>
      </div>
    </div>
    fib1 - {{ fb1 }} fib2 - {{ fb2 }}
  </div>
</template>



<script>
export default {
  name: "Calculator",
  data: () => ({
    message: "Calculator",
    operand1: 0,
    operand2: 0,
    result: 0,
    fbResult: 0,
    error: "",
    operations: [
      "+",
      "-",
      "*",
      "/",
      "Возвести в степень",
      "Целочисленное деление",
    ],
    myNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    logs: {},
    changeOperand: true,
  }),
  methods: {
    fb(n) {
      return n <= 1 ? n : this.fb(n - 1) + this.fb(n - 2);
    },
    calculate(operation = "+") {
      const { operand1, operand2, result } = this;
      this.error = "";
      switch (operation) {
        case "+":
          this.sum();
          break;
        case "-":
          this.min();
          break;
        case "*":
          this.multi();
          break;
        case "/":
          this.div();
          break;
        case "Возвести в степень":
          this.extent();
          break;
        case "Целочисленное деление":
          this.divInt();
          break;
      }
      const key = Date.now();
      const value = `${operand1}${operation}${operand2} = ${result}`;
      this.$set(this.logs, key, value);
    },
    doThan(text, event) {
      console.log(text, event);
    },
    sum() {
      this.result = this.operand1 + this.operand2;
      this.fbResult = this.fb1 + this.fb2;
    },
    min() {
      this.result = this.operand1 - this.operand2;
      this.fbResult = this.fb1 - this.fb2;
    },
    multi() {
      this.result = this.operand1 * this.operand2;
    },
    div() {
      const { operand1, operand2 } = this;
      if (operand2 === 0 || !operand2) {
        this.error = "На 0 делить нельзя!";
      } else {
        this.result = Math.trunc(operand1 / operand2);
      }
    },
    extent() {
      this.result = Math.pow(this.operand1, this.operand2);
    },
    divInt() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.error = "На 0 делить нельзя!";
      } else {
        this.result = Math.trunc(operand1 / operand2);
      }
    },
    onFocus() {
      console.log("onFocus");
    },
    hideNumbers() {
      const checkBox = document.getElementById("numbersCheckbox");
      const text = document.getElementById("numbersKeyboard");

      if (checkBox.checked == true) {
        text.style.display = "";
      } else {
        text.style.display = "none";
      }
    },
    chooseOperand1() {
      this.changeOperand = true;
    },
    chooseOperand2() {
      this.changeOperand = false;
    },
    insertNumber(number) {
      if (this.changeOperand) this.operand1 = number;
      else this.operand2 = number;
    },
  },
  computed: {
    fb1() {
      return this.fb(this.operand1);
    },
    fb2() {
      return this.fb(this.operand2);
    },
  },
};
</script>




<style>
.error {
  color: red;
}
</style>>
  
