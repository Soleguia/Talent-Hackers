<template>
  <div id="app">
    <div class="choose-step">
      <label for="step1">
        <input type="radio" v-model="showStep" name="choose-step" id="step1" value="1">
        <span>Step 1</span>
      </label>
      <label for="step2">
        <input type="radio" v-model="showStep" name="choose-step" id="step2" value="2">
        <span>Step 2</span>
      </label>
      <label for="step3">
        <input type="radio" v-model="showStep" name="choose-step" id="step3" value="3">
        <span>Step 3</span>
      </label>
    </div>
    <Step1 v-if="showStep == 1" />
    <Step2 v-if="showStep == 2" />
    <Step3 v-if="showStep == 3" />

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      showStep: 1
    }
  },
  methods: {
    addClick(){
      this.clicks++;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.choose-step {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 2rem;
  border: 1px solid #cacaca;

  input[type="radio"]:checked + span {
    font-weight: 600;
  }
}
</style>
