import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movie from '../views/Movie.vue'
import Details from '../views/Details.vue'
import Music from '../views/Music.vue'
import MusicList from "../views/MusicList.vue"
import Book from '../views/Book.vue'
import Photo from '../views/Photo.vue'
import PhotoDetails from '../views/PhotoDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/movie'//默认叶 重定向到movie
  },
  {path:'/movie',
  component:Movie
  },
  {path:'/details/:id',
  component:Details

  },
  {path:'/music',
  component:Music

  },
  {
path:'/musiclist',
component: MusicList
  },
  {
    path:'/book',
    component:Book
  },
  {
    path:'/photo',
    component:Photo
  },{
    path:'/photodetails/:index',
    component:PhotoDetails
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
