export default {
	path: '/three',
	name: 'three',
	component: () => import('@/views/three'),
	children: [{
			path: '/dynamic',
			name: 'DYNAMAIC',
			component: () => import('@/views/three/dynamic.vue')
		},{
			path:'/duanzi',
			name: 'DUANZI',
			component:()=>import('@/views/three/duanzi.vue')
		},
		{
			path: '/near',
			name: 'NEAR',
			component: () => import('@/views/three/near.vue')
		},
		
		{
			path:'/funnyvedio',
			name:'FUNNYVEDIO',
			component:() =>import('@/views/three/funnyvedio.vue')
		},
		{
			path: '/funnypic',
			name:'FUNNYPIC',
			component:()=>import('@/views/three/funnypic.vue')
		},
		{
			path: '/tjgz',
			name: 'TJGZ',
			component: () => import('@/views/three/tjgz.vue')
		},
		{
			path: '/sousuo',
			name: 'SOUSUO',
			component: () => import('@/views/three/sousuo.vue')
		},
		{
			path: '/project',
			name: 'PROJECT',
			component: () => import('@/views/three/project.vue')
		},
		{
		  path: '/mxyh',
		  name: 'MXYH',
		  component: () => import('@/views/three/mxyh.vue')
		},{
			path: '/geshou',
		  name: 'Geshou',
		  component: () => import('@/views/three/geshougedan.vue')
		}
	],
	redirect: '/duanzi'

}
