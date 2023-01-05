import{ createWebHashHistory,createRouter} from "vue-router"
import Index from "~/pages/index.vue"
import About from "~/pages/bount.vue"
import NotFound from "~/pages/404.vue"
const routes =[
    {
        path:'/',
        component:Index
    },
    {
        path:'/bount',
        component:About
    },
    {
         path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound
     }
]
const router =createRouter({
    history:createWebHashHistory(),
    routes
})
export default router