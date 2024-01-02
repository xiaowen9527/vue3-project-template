import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入unocss
import 'virtual:uno.css'

// leancloud配置
import AV from 'leancloud-storage'
const appId = 'R1mtTgySeGDQ5DCYm1lzcfE9-gzGzoHsz'
const appKey = 'zt4iHjkOHQlaGODd034msbyU'
const serverURL = "https://r1mttgys.lc-cn-n1-shared.com"
AV.init({ appId, appKey, serverURL });

// leancloud方法封装
import leancloud_func from '@/config/leancloud_func.js'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')

app.config.globalProperties.$leancloud = leancloud_func
