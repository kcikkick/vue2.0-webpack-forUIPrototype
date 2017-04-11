import Vue from 'vue'
import Home from '../components/home/home.vue'

//Vue.use(require('vue-resource'));
Vue.config.productionTip = false
new Vue({
  el: '#app',
  //template: '<App/>',
  components: {Home}
})