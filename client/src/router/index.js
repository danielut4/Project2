import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    // },
    // {
    //   path: '/songs',
    //   name: 'songs',
    //   component: Songs
    // },
    // {
    //   path: '/songs/create',
    //   name: 'songs-create',
    //   component: CreateSong
    // },
    // {
    //   path: '/songs/:songId',
    //   name: 'song',
    //   component: ViewSong
    // },
    // {
    //   path: '/songs/:songId/edit',
    //   name: 'song-edit',
    //   component: EditSong
    // },
    // {
    //   path: '*',
    //   redirect: 'songs'
    // }
  ]
})
