export default [
  {
    path: '/',
    name: 'home',
    component: require('components/UploaderView')
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/history',
    name: 'history',
    component: require('components/HistoryView')
  }
]
