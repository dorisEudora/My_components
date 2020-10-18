import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import router from '@/router'
import setting from '@/setting'
NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  if (window._axiosPromiseArr && Array.isArray(window._axiosPromiseArr)) {
    window._axiosPromiseArr.forEach(cancel => {
      cancel()
    })
    window._axiosPromiseArr = []
  }

  if (to.meta.title) {
    document.title = setting.title + ' - ' + to.meta.title
  } else {
    document.title = to.name ? setting.title + ' - ' + to.name : setting.title
  }
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
