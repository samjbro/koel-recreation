import Vue from 'vue'

import apolloProvider from './apollo'
import '#/main.scss'
import App from './components/App'

new Vue({
  apolloProvider,
  el: '#root',
  render: h => h(App)
})