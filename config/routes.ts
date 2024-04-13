export default [
  { path: '/',name:'主页',icon: 'HomeOutlined', component: './Index' },
  { path: '/interface_info/:id', name:'查看接口',icon:'smile',
    component: './InterfaceInfo',hideInMenu:true},
  {
    name:'登录',
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  {
    path: '/admin',
    name: '管理界面',
    icon: 'crown',
    //ant design pro的官方文档的规则规定的权限控制。
    access: 'canAdmin',
    routes: [
      { name: '接口管理', icon: 'table', path: '/admin/interface_info', component: './Admin/InterfaceInfo' },
      { name: '接口分析', icon: 'analysis', path: '/admin/interface_analysis',
        component: './Admin/InterfaceAnalysis' },
    ],
  },
  { name: '个人中心', icon: 'UserOutlined', path: '/profile', component: './User/Profile' },
 // { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
