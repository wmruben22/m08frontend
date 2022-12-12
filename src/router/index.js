import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../views/Home.vue';
import Courses from '../views/Course.vue';
import AddCourse from '../views/AddCourse.vue';
import NotFound from '../views/404.vue';
import ViewCourse from '../views/ViewCourse.vue'
import EditCourse from '../views/EditCourse.vue'
const routes=[
    {
        path: '/',
        name: 'home',
        component: HomePage
    },{
        path: '/courses',
        name: 'courses',
        component: Courses
    },{
        path: '/courses/add',
        name: 'add-course',
        component: AddCourse
    },
    {
        path: '/course/:name',
        name: 'view-course',
        component: ViewCourse,
        props: true
    },
    {
        path: '/course/:courseID/edit',
        name: 'edit-course',
        component: EditCourse,
        props: true

    },
    {
        path: '/:pathMatch(.*)',
        name: 'not-found',
        component: NotFound
    },
];

const router=createRouter({
    history: createWebHistory(),
    hash: false,
    routes,
});

export default router;
