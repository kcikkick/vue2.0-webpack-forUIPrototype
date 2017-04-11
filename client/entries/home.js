import Vue from 'vue'
import Home from '../components/home/Home'

//Vue.use(require('vue-resource'));
Vue.config.productionTip = false
new Vue({
  el: '#app',
  template: '<Home/>',
  components: { Home}
  //render: (h) => h(Home)
})