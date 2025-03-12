import EditFeed from "@/views/EditFeed.vue"
import FavoriteArticles from "@/views/FavoriteArticles.vue"
import FeedArticles from "@/views/FeedArticles.vue"
import HomeView from "@/views/HomeView.vue"
import NotFound from "@/views/NotFound.vue"
import { createRouter, createWebHistory } from "vue-router"
import FeedForm from "../views/FeedForm.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/add-feed",
      name: "addFeed",
      component: FeedForm,
    },
    {
      path: "/feed/:id",
      name: "feedArticles",
      component: FeedArticles,
    },
    {
      path: "/edit-feed/:id",
      name: "editFeed",
      component: EditFeed,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: FavoriteArticles,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: NotFound,
    },
  ],
})

export default router
