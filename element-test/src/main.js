import Vue from 'vue'
import App from './App.vue'
import {Button, Message, Form, FormItem, Input, Select, Option} from 'element-ui'

// 手动实现Vue.use(ElementUI)的细节，完成按需加载
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.prototype.$message = Message
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
