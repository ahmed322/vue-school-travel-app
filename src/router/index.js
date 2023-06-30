import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import sourceData from '../data.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    // router to insure admin
    {
      path: '/protected',
      name: 'protected',
      component: () => import('../views/protectedView.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: () => import('../views/InvoicesView.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/loginView.vue')
    },

    {
      path: '/destination/:id/:slug',
      name: 'destination.show',
      component: () => import('../views/DestinationShow.vue'),
      props: true,

      beforeEnter(to) {
        const exists = sourceData.destinations.find(
          (destination) => destination.id === parseInt(to.params.id)
        )
        //if not equal he will load notfound page
        if (!exists)
          return {
            name: 'NotFound',
            // allows keeping the URL while rendering a different page
            params: { pathMatch: to.path.split('/').slice(1) },
            query: to.query,
            hash: to.hash
          }
      },
      children: [
        {
          path: '/destination/:id/:slug/:experienceSlug',
          name: 'experience.show',
          component: () => import('../views/ExperiencesShow.vue')
        }
      ]
    },

    // not foud page load
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0 }), 300)
      })
    )
  }
})
router.beforeEach((to, form, next) => {
  if (to.meta.requireAuth && !window.user) {
    next({ name: 'login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router
