import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
import Login from './../components/Login/login'
import Regite from './../components/Registe/registe'
import My from './../components/section/Mine/mine'
import GoHome from './../components/shouye/shouye'
import Cars from './../components/section/cars/cars'
import shoppingcars from './../components/section/cars/shoppingcars'
import Find from './../components/section/find/find'
import ChechBox from './../components/chechBox'
import Check from './../components/check'
import Zhubao from './../components/shouye/Zhubao/zhubao'
import Content from './../components/shouye/content/zhuye'
import Jiesuan from './../components/section/cars/jiesuan/jiesuan'
import Zhifu from '../components/section/cars/zhifu/zhifu'
import Shangpin from '../components/shouye/shangpin/shangpin'
// import buy from './../components/buy'

Vue.use(Router);


export default new Router({
  routes: [
    {path:'/',component:GoHome},
    {path:'/gohome',component:GoHome},
    {path:'/login',component:Login},
    {path:'/regite',component:Regite},
    {path:'/my', component:My},
    {path:'/find', component:Find},
    {path:'/cars', component:Cars},
    {path:'/shoppingcars', component:shoppingcars},
    {path:'/chechBox',component:ChechBox},
    {path:'/check',component:Check},
    {path:'/zhubao',component:Zhubao},
    {path:'/zhuye',component:Content},
    {path:'/jiesuan',component:Jiesuan},
    {path:'/zhifu',component:Zhifu},
    {path:'/shangpin',component:Shangpin},
    // {path:'/buy',component:buy},

  ]
})
