module.exports = {
  head: [['link', { rel: 'icon', href: '../logo.png' }]],
  title: 'Wuss Weapp',
  base: '/wuss/',
  description: '🐳 wuss 一款高质量，组件齐全，高自定义的微信小程序UI组件库',
  themeConfig: {
    sidebarDepth: 0,
    nav: [
      { text: '首页', link: '/' },
      { text: '快速上手', link: '/quickstart' },
      { text: 'GitHub', link: 'https://github.com/phonycode/wuss' },
    ],
    repo: 'phonycode/wuss-docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [['/quickstart', '快速上手'], ['/CHANGELOG', '更新日志']],
      },
      {
        title: '基础组件',
        collapsable: false,
        children: [
          ['/component_mds/button', 'Button 按钮'],
          ['/component_mds/icon', 'Icon 图标'],
          ['/component_mds/avatar', 'Avatar 头像'],
          ['/component_mds/steps', 'Steps 步骤条'],
          ['/component_mds/countdown', 'Countdown 倒计时'],
          ['/component_mds/dialog', 'Dialog 消息框'],
          ['/component_mds/badge', 'Badge 徽章'],
          ['/component_mds/tag', 'Tag 标签'],
        ],
      },
      {
        title: '导航',
        collapsable: false,
        children: [
          ['/component_mds/cell', 'Cell 列表'],
          ['/component_mds/popup', 'Popup 弹出层'],
          ['/component_mds/drop-menu', 'DropMenu 下拉菜单'],
          ['/component_mds/tabs', 'Tabs 导航切换栏'],
        ],
      },
      {
        title: '操作反馈',
        collapsable: false,
        children: [
          ['/component_mds/action-sheet', 'ActionSheet 操作菜单'],
          ['/component_mds/toast', 'Toast 提示'],
          ['/component_mds/alert', 'Alert 弹出框'],
          ['/component_mds/notice', 'Notice 通告'],
          ['/component_mds/activity-indicator', 'ActivityIndicator 活动指示器'],
        ],
      },
      {
        title: '表单',
        collapsable: false,
        children: [
          ['/component_mds/form', 'Form 表单'],
          ['/component_mds/input', 'Input 输入框'],
          ['/component_mds/switch', 'Switch 开关'],
          ['/component_mds/radio', 'Radio 单选框'],
          ['/component_mds/checkbox', 'Checkbox 复选框'],
        ],
      },
      {
        title: '其他',
        collapsable: false,
        children: [
          ['/component_mds/calendar', 'Calendar 日历预定选择器'],
          ['/component_mds/qr-code', 'QRCode 二维码生成'],
        ],
      },
    ],
  },
};
