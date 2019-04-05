import Vue from 'vue';
import Router from 'vue-router';
import PicturesList from './components/PicturesList.vue';
import PictureDetail from '@/components/PictureDetail';
import UserPictures from '@/components/UserPictures';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Pictures List',
      component: PicturesList
    },
    {
      path: '/picture/:id',
      name: 'Pictures Detail',
      component: PictureDetail
    },
    {
      path: '/user/:id',
      name: 'User Pictures',
      component: UserPictures
    }
  ]
})
