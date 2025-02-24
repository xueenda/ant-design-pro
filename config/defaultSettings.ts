import { Settings as ProSettings } from '@ant-design/pro-layout';

type DefaultSettings = ProSettings & {
  pwa: boolean;
};

const proSettings: DefaultSettings = {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'sidemenu',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: false,
  // colorWeak: true,
  menu: {
    locale: false,
  },
  title: 'Trading Interface',
  pwa: false,
  iconfontUrl: '',
};


// {
//   "navTheme": "light",
//   "primaryColor": "#1890ff",
//   "layout": "sidemenu",
//   "contentWidth": "Fluid",
//   "fixedHeader": false,
//   "fixSiderbar": false,
//   "menu": {
//     "locale": true
//   },
//   "title": "Ant Design Pro",
//   "pwa": false,
//   "iconfontUrl": ""
// }

export type { DefaultSettings };

export default proSettings;
