import {createApp} from 'vue'
import TrafficLights from './TrafficLights.vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'

const routes = [
    {path: '/:color', component: TrafficLights, props: true},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


const app = createApp(App)
app.use(router)
app.mount('#app')

if (window.location.href === 'http://localhost:3000/') {
    router.push('/red')
}
