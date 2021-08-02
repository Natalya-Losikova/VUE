<template>
  <div>
    {{ message }}

    <div>
      <input type="number" placeholder="Operand1" v-on:focus="onFocus" v-model.number="operand1" />
      <input type="number" placeholder="Operand2" v-model.number="operand2" />
       ={{result}}
       <div class="keyboard">
       <button @click="result = operand1 + operand2">+</button>
       <button @click="min">-</button>
       <button @click="result = operand1 * operand2">*</button>
       <button @click="result = operand1 / operand2">/</button>
       <button @click="extent">Возвести в степень</button>
       <button @click="div">Целочисленное деление</button>
       </div>
      </div>
  </div>
</template>



<script>
export default {
  name: "Calculator",
  data: () => ({
    message: "Hello VUE",
    operand1: 0,
    operand2: 0,
    result: 0,
  }),
  methods: {
    doThan(text, event){
      console.log(text, event)
    },
    min(){
      this.result = this.operand1 - this.operand2
    },
    extent(){
      this.result = Math.pow(this.operand1, this.operand2)
    },
    div(){
       this.result = Math.trunc(this.operand1/this.operand2)
    },
    onFocus(){
        console.log('onFocus')
    },
  },
};
</script>