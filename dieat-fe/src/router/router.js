import { createRouter, createWebHistory } from 'vue-router'
import Regist from '@/components/Regist.vue'
import SubscribeList from '@/components/subscribe/SubscribeList.vue'
import BlockUserList from '@/components/block/BlockUserList.vue'
import DietPostLayout from '@/views/dietpost/DietPostLayout.vue'
import DietPostDetail from '@/views/dietpost/DietPostDetail.vue'
import Regist from '@/components/Regist.vue';
import SubscribeList from '@/components/subscribe/SubscribeList.vue';
import BlockUserList from '@/components/block/BlockUserList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Regist
    },
    {
      path: '/subscribeList',
      name: 'Subscribe',
      component: SubscribeList
    },
    {
      path: '/blockList',
      name: 'Block',
      component: BlockUserList
    },
    {
      path: '/dietPost',
      name: 'DietPostList',
      component: DietPostLayout
    },
    {
      path: '/dietPost/:id',
      name: 'DietPostDetail',
      component: DietPostDetail
    }
  ]
})

export default router