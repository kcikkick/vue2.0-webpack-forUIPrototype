import Vue from 'vue'
import App from '../components/app/app.vue'

//Vue.use(require('vue-resource'));
Vue.config.productionTip = false
new Vue({
  el: '#app',
  //template: '<App/>',
  //components: {App}
  render: (h) => h(App)
})