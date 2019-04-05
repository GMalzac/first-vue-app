import Vue from 'vue'
import App from './App.vue'
import './assets/style.css'
import router from './routes'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faCoffee)
library.add(faGlobe)
library.add(faInstagram)
library.add(faTwitter)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
