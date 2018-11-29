module.exports = {
  head: [['link', { rel: 'shortcut icon', type: "image/x-icon", href: 'https://raw.githubusercontent.com/phonycode/wuss-weapp/master/assets/logo.png' }]],
  title: 'Wuss-weapp',
  base: '/wuss-weapp/',
  description: '一款高质量,组件齐全,高自定义的小程序组件库',
  themeConfig: {
    sidebarDepth: 0,
    nav: [
      { text: '首页', link: '/' },
      { text: '组件库', link: '/component_mds/button' },
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
          ['/component_mds/badge', 'Badge 徽章'],
          ['/component_mds/tag', 'Tag 标签'],
          ['/component_mds/accordion', 'Accordion 手风琴'],
        ],
      },
      {
        title: '布局',
        collapsable: true,
        children: [
          ['/component_mds/layout', 'Layout 栅格'],
          ['/component_mds/card', 'Card 卡片'],
          ['/component_mds/pane', 'Pane 窗格'],
        ],
      },
      {
        title: '导航',
        collapsable: true,
        children: [
          ['/component_mds/cell', 'Cell 列表'],
          ['/component_mds/popup', 'Popup 弹出层'],
          ['/component_mds/scrollable-tab-view', 'ScrollableTabView 可滑动视图'],
          ['/component_mds/drop-menu', 'DropMenu 下拉菜单'],
          ['/component_mds/tabs', 'Tabs 导航切换栏'],
          ['/component_mds/segmented-control', 'SegmentedControl 分段器'],
        ],
      },
      {
        title: '操作反馈',
        collapsable: true,
        children: [
          ['/component_mds/action-sheet', 'ActionSheet 操作菜单'],
          ['/component_mds/toast', 'Toast 提示'],
          ['/component_mds/alert', 'Alert 弹出框'],
          ['/component_mds/confirm', 'Confirm 确认框'],
          ['/component_mds/notice', 'Notice 通告'],
          ['/component_mds/dialog', 'Dialog 消息框'],
          ['/component_mds/loading', 'Loading 加载指示器'],
          ['/component_mds/activity-indicator', 'ActivityIndicator 活动指示器'],
        ],
      },
      {
        title: '表单',
        collapsable: true,
        children: [
          ['/component_mds/form', 'Form 表单'],
          ['/component_mds/input', 'Input 输入框'],
          ['/component_mds/switch', 'Switch 开关'],
          ['/component_mds/radio', 'Radio 单选框'],
          ['/component_mds/checkbox', 'Checkbox 复选框'],
          ['/component_mds/cell-picker', 'CellPicker 选择器'],
          ['/component_mds/address-picker', 'AddressPicker 地区联动选择器'],
          ['/component_mds/calendar', 'Calendar 日历选择器'],
          ['/component_mds/range', 'Range 区域选择'],
          ['/component_mds/number', 'Number 步进器'],
          ['/component_mds/vcode', 'VCode 验证码'],
        ],
      },
      {
        title: '其他',
        collapsable: true,
        children: [
          ['/component_mds/qr-code', 'QRCode 二维码生成'],
          ['/component_mds/count-up', 'CountUp 指数'],
          ['/component_mds/swiper-out', 'SwiperOut 侧滑菜单'],
          ['/component_mds/marquee', 'Marquee 垂直滚动视图'],
          ['/component_mds/rater', 'Rater 星级评分'],
        ],
      },
    ],
  },
};
