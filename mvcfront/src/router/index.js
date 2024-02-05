import { createRouter, createWebHistory } from "vue-router";
import AllTables from "../views/AllTables.vue";
import StudySession from "../views/StudySession.vue";

const routes = [
  {
    path: "/",
    name: "AllTables",
    component: AllTables,
  },
  {
    path: "/study-session",
    name: "StudySession",
    component: StudySession,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
