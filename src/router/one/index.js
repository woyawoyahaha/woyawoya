export default [
  {
    path: "/index",
    component: () => import("@/views/one"),

    children: [
      {
        path: "gexing",
        name: "Gexing",
        component: () => import("@/views/one/gexing.vue")
      },
      {
        path: "gedan",
        name: "Gedan",
        component: () => import("@/views/one/gedan.vue")
      },
      {
        path: "zhubo",
        name: "Zhubo",
        component: () => import("@/views/one/zhubo.vue")
      },
      {
        path: "paihang",
        name: "Paihang",
        component: () => import("@/views/one/paihang.vue"),

      },
      {
        path:"/index",
        name:"one",
        redirect:"/index/gexing"
      },
      // {
      //   path: "/*",
      //   component: () => import("@/views/one/gexing.vue"),
      // }
    ],


  },
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/one/search.vue")
  },
  {
    path: "/ritiu",
    name: "Ritiu",
    component: () => import("@/views/one/ritiu.vue"),
  },
  {
    path:"/mvitem",
    name:"mvItem",
    component:()=>import("@/views/one/mvItem.vue")
  },
  {
    path:"/phItem",
    name:'phItem',
    component:()=>import('@/views/one/PHitem.vue')
  },{
    path:"/zhuboItem",
    name:'zhuboItem',
    component:()=>import('@/views/one/zhuboItem.vue')
  }


];
