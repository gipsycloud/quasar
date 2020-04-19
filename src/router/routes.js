
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/page1', component: () => import('pages/Pageone.vue') },
      { path: '/page2', component: () => import('pages/Pagetwo.vue') },
      { path: '/page3', component: () => import('pages/Pagethree.vue') },
      { path: '/page4', component: () => import('pages/Pagefour.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
