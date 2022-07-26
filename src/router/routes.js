import FooFoo from "@/components/FooFoo.vue";
import BarBar from "@/components/BarBar.vue";
import RouterTransiton from "@/views/router-transition/index";
import HomePage from '@/views/homePage/index'
import Animation from '@/views/animation/index'

const routes = [
  { path: "/", component: HomePage },
  { 
    path: "/router-transition", 
    component: RouterTransiton, 
    children: [
      { path: "/foo", component: FooFoo },
      { path: "/bar", component: BarBar },
    ]
  },
  { 
    path: "/router-transition", 
    component: RouterTransiton, 
    children: [
      { path: "/foo", component: FooFoo },
      { path: "/bar", component: BarBar },
    ]
  },
  { 
    path: "/animation", 
    component: Animation,
  },
];

export default routes