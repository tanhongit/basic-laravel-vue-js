// vue router
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AdminBase from "./components/admin/AdminBase.vue";
import LoginComponent from "./views/auth/LoginComponent";
import RegisterComponent from "./views/auth/RegisterComponent";
import CategoryListComponent from "./components/admin/category/ListCategory";
import CategoryNewComponent from "./components/admin/category/NewCategory"
import CategoryEditComponent from "./components/admin/category/EditCategory"
import AdminDashboard from "./components/admin/AdminDashboard"

import PublicComponent from "./components/blog/PublicComponent";

const routes = [
    {
        /*
         |--------------------------------------------------------------------------
         | Admin Backend Routes
         |--------------------------------------------------------------------------|
         */
        path: '/admin',
        component: AdminBase, // Change the desired Layout here
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                component: AdminDashboard
            },
            {
                path: 'category/list',
                component: CategoryListComponent
            },
            {
                path: 'category/add',
                component: CategoryNewComponent
            },
            {
                path: 'category/edit/:category_id',
                component: CategoryEditComponent
            },
        ]
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterComponent,
        meta: {
            auth: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginComponent,
        meta: {
            auth: false
        }
    },
    {
        path: '/',
        component: PublicComponent
    },
];

const router = new VueRouter({
    routes,
    mode: 'history', //https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
    linkActiveClass: 'active'
});

export default router;