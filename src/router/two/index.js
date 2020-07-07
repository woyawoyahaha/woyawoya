export default [
  
  {
    path: '/songSheet',
    name: 'songSheet',
    component: () => import('@/views/two/songSheet')
  },
  {
    path: '/songComment',
    name: 'songComment',
    component: () => import('@/views/two/songComment')
  }
]
