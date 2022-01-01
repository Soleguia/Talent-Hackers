import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component(
  "Step1",
  require("./components/Step_1.vue").default
);

Vue.component(
  "Step2",
  require("./components/Step_2.vue").default
);

Vue.component(
  "Step3",
  require("./components/Step_3.vue").default
);


new Vue({
  render: h => h(App),
}).$mount('#app')
