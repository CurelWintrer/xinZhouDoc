import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "新舟一号平板App船员手册",
  description: "test",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'CrossOcrean',
        items: [
          { text: '系统简介', link: '/systemIntroduction'},
          { text: '安全声明', link: '/securityStatements'},
          { text: 'APP结构', link: '/app结构' }
        ]
      },
      {
        text: '主页',
        link: '/HomePage/homePage',
        collapsed: false,
        items: [
          {text: '航行状态显示',link: '/HomePage/feature/sailingState'},
          {text: '灯光-空调控制',link: '/HomePage/feature/lightsAirControl'},
          {text: '天气数据',link: '/HomePage/feature/weatherInfo'},
        ]
      },
      {
        text: '地图页',
        link: '/MapPage/mapPage',
        collapsed: false,
        items: [
          {text: '循迹',link: '/MapPage/feature/tracking'},
          {text: '电子围栏',link: '/MapPage/feature/electronicFence'},
          {text: '地图控制',link: '/MapPage/feature/mapControl'},
          {text: '航线保存',link: '/MapPage/feature/wayPointSave'},
        ],
      },
      {
        text: '智能设备控制页',
        link: '/ShipPage/shipPage',
        collapsed: false,
        items: [

        ],
      },
      {
        text: '靠泊页',
        link: '/BerthPage/berthPage',
        collapsed: false,
        items: [
          {text: '靠泊',link: '/BerthPage/feature/berth'},
          {text: '泊位保存',link: '/BerthPage/feature/saveBerthPosition'},
        ],
      },
      {
        text: '设置页',
        link: '/SettingPage/settingPage',
        collapsed: false,
        items: [
          {text: '船舶设置',link: '/SettingPage/feature/shipSetting'},
          {text: '主题切换',link: '/SettingPage/feature/themeSetting'},
          {text: '语音助手',link: '/SettingPage/feature/languageAssistant'},
        ],
      },
      {
        text: '小韵语音助手',
        link: '/XiaoYun/xiaoYun',
        collapsed: false,
        items: [
          // {text: '语音助手功能',link: '/XiaoYun/feature/'},
          // {text: '常见问题',link: '/XiaoYun/feature/'},
        ],
      },
      {
        text: '术语表',
        link: '/termList',
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'http://www.crossocean.world/' }
    // ]
  }
})
