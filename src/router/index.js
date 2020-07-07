import Vue from 'vue'
import VueRouter from 'vue-router'
import oneRouter from '@/router/one'
import twoRouter from '@/router/two'
import threeRouter from '@/router/three'
import fourRouter from '@/router/four'

Vue.use(VueRouter)

const routes = [
  ...oneRouter,
  ...twoRouter,
  threeRouter,
  fourRouter,
  {
    //登陆路由
    path: '/denglu',
    name: 'denglu',
    component: () => import('../views/four/twoluyou/denglu.vue')
  },
  {
    //手机号登陆路由
    //登陆页面
    path: '/phone',
    name: 'phone',
    component: () => import('@/views/four/twoluyou/phonelogin.vue')
  },
  {
    //手机号注册路由
    path: '/enroll',
    name: 'enroll',
    component: () => import('@/views/four/twoluyou/enroll.vue')
  },
  {
    //手机号登陆路由
    path: '/phone',
    name: 'phone',
    component: () => import('@/views/four/twoluyou/phonelogin.vue')
  },
  {
    //手机号注册路由
    path: '/enroll',
    name: 'enroll',
    component: () => import('@/views/four/twoluyou/enroll.vue')
  },
  {
    //关注
    path: '/attention',
    name: 'attention',
    component: () => import('@/views/four/module/attention.vue')
  },
  //音乐播放路由
  {
    path: '/play',
    name: 'play',
    component: () => import('@/views/two/play.vue')
  },

  {
    //粉丝
    path: '/fons',
    name: 'fons',
    component: () => import('@/views/four/module/fons.vue')
  },
  {
    path: '/addContent',
    name: 'addContent',
    component: () => import('@/views/three/addcontent.vue')
  },
  {
    path:'/comment',
    name: 'comment',
    component:()=>import('@/views/three/comment.vue')
  },
  {
    //主播音乐电台排行榜
    path: '/ranking',
    name: 'ranking',
    component: () => import('@/views/one/ranking.vue'),
    children: [
      {
        path: '/ranking_one',
        name: 'ranking_one',
        component: () => import('@/views/one/ranking_one.vue')
      },
      {
        path: '/ranking_two',
        name: 'ranking_two',
        component: () => import('@/views/one/ranking_two.vue')
      },
      {
        path: '/ranking_three',
        name: 'ranking_three',
        component: () => import('@/views/one/ranking_three.vue')
      }
    ]
  },
  {
    //24小时榜
    path: '/test',
    name: 'test',
    component: () => import('@/views/three/test.vue')
  }
  ,
  {
    //24小时榜
    path: '/one_time',
    name: 'one_time',
    component: () => import('@/views/one/one_time.vue')
  },
  {
    //新人榜
    path: '/one_new',
    name: 'one_new',
    component: () => import('@/views/one/one_new.vue')
  },
  {
    //动态
    path: '/dynamichou',
    name: 'dynamichou',
    component: () => import('@/views/four/module/dynamichou.vue')
  },
  {
    path: '/mine/setting',
    name: 'setting',
    component: () => import('@/views/four/setting.vue')
  },
  {
    path: '/security',
    name: 'security',
    component:()=>import('@/views/four/security.vue')
  },
  {
    path: '/mine/setting/pushs',
    name: 'pushs',
    component:()=>import('@/views/four/Pushs.vue')
    
  },
  {
    path: '/login',
    name: 'login',
    component:()=>import('@/views/four/Login.vue')
    
  },
  {
    path: '/register',
    name: 'register',
    component:()=>import('@/views/four/Register.vue')
    
  },
  {
    path: '/mine',
    name: 'mine',
    component:()=>import('@/views/four/main.vue'),
    meta: {
      needLogin: true
  }
  },
  {
    path: '/mine/setting/audit',
    name: 'audit',
    component:()=>import('@/views/four/audit.vue')

},
  {
    //评论
    path: '/PL',
    name: 'PL',
    component: () => import('@/views/four/module/PL.vue'),
    children: [
      {
        path: '/soncomment',
        name: 'soncomment',
        // component: () => import('@/views/four/module/soncomment.vue')
        component:resolve=>require(['@/views/four/module/soncomment'],resolve)
      },
      {
        path: '/sontransmit',
        name: 'sontransmit',
        component: () => import('@/views/four/module/sontransmit.vue')
      },
      {
        path: '/sonpraise',
        name: 'sonpraise',
        component: () => import('@/views/four/module/sonpraise.vue')
        
      },
     
     
    ],
    redirect: '/soncomment'
  },
  {
    path: '/*',
    redirect: '/index'
  }
]

const router = new VueRouter({
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
router.beforeEach((to, from, next) => {
  //当前跳转的页面是否需要登陆
  if (to.meta.needLogin) {
      //判断是否登陆
      if (isLogined()) {
          next()
      } else {
          next({
              name: "four"
          })
      }
  } else {
      next()
  }
})

function isLogined() {
  if (localStorage.getItem('token')) {
      return true
  } else {
      return false
  }
}

export default router