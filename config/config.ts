// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import darkThemeSingle from 'antd/dist/dark-theme'
import compactThemeSingle from 'antd/dist/compact-theme'

// console.log(darkThemeSingle)

// console.log(1111)

import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'en-US',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      component: '../layouts/BlankLayout',
      routes: [
        {
          path: '/user',
          component: '../layouts/UserLayout',
          routes: [
            {
              path: '/user',
              redirect: '/user/login',
            },
            {
              name: 'login',
              icon: 'smile',
              path: '/user/login',
              component: './user/login',
            },
            {
              name: 'register-result',
              icon: 'smile',
              path: '/user/register-result',
              component: './user/register-result',
            },
            {
              name: 'register',
              icon: 'smile',
              path: '/user/register',
              component: './user/register',
            },

            {
              component: '404',
            },
          ],
        },
        {
          path: '/',
          component: '../layouts/BasicLayout',
          Routes: ['src/pages/Authorized'],
          authority: ['admin', 'user'],
          routes: [
            {
              name: 'Fixed Income',
              icon: 'smile',
              path: '/fixedincome',
              component: './TestPage',
            },
            // {
            //   path: '/list',
            //   icon: 'table',
            //   name: 'Trade History',
            //   routes: [
            //     {
            //       name: 'table-list',
            //       icon: 'smile',
            //       path: '/list/table-list',
            //       component: './list/table-list',
            //     }
            //   ],
            // },
            // {
            //   name: 'account',
            //   icon: 'user',
            //   path: '/account',
            //   routes: [
            //     {
            //       name: 'settings',
            //       icon: 'smile',
            //       path: '/account/settings',
            //       component: './account/settings',
            //     },
            //   ],
            // },
            {
              path: '/',
              redirect: '/fixedincome',
              authority: ['admin', 'user'],
            },
            {
              component: '404',
            },
          ],
        },
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    ...compactThemeSingle,
    // ...darkThemeSingle,
    // 'primary-color': '#d46b08'
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});


// @primary-color: #1890ff; // primary color for all components
// @link-color: #1890ff; // link color
// @success-color: #52c41a; // success state color
// @warning-color: #faad14; // warning state color
// @error-color: #f5222d; // error state color
// @font-size-base: 14px; // major text font size
// @heading-color: rgba(0, 0, 0, 0.85); // heading text color
// @text-color: rgba(0, 0, 0, 0.65); // major text color
// @text-color-secondary: rgba(0, 0, 0, 0.45); // secondary text color
// @disabled-color: rgba(0, 0, 0, 0.25); // disable state color
// @border-radius-base: 4px; // major border radius
// @border-color-base: #d9d9d9; // major border color
// @box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15); // major shadow for layers
