## v 2.0.3

#### 修复

- 修复了SwiperOut组件在列表滚动时Y轴也会触发侧滑菜单的展开和收起问题 [#6101c7b](https://github.com/phonycode/wuss-weapp/commit/6101c7bb0e358cb5f2b8a9fef2a02578527d9119)
- 修复了日历跨年出现的问题 [#22](https://github.com/phonycode/wuss-weapp/issues/22)



## v 2.0.2

#### 修复
- 修复了按钮在loading状态下没禁用的问题 [#e77a2a6](https://github.com/phonycode/wuss-weapp/commit/e77a2a69fe42c57ea27536888b36fcce1d68fcf8)


## v 2.0.1

#### 修复

- 调整了日历组件内边距样式  
- 调整了Switch的层级过高问题
- 修复了Form组件在没教研组件下无法提交的问题


## v 2.0.0

#### 新增组件

- 新增组件 Loading 加载动画
- 新增组件 Marquee 垂直滚动视图
- 新增组件 Confirm 确认框
- 新增组件 Layout 布局
- 新增组件 Number 步进器
- 新增组件 CountUp 指数
- 新增组件 Accordion 手风琴
- 新增组件 AddressPicker 地区联动选择器
- 新增组件 Range 区域选择
- 新增组件 Card 卡片
- 新增组件 Rater 星级评分
- 新增组件 Segmented-control 分段器
- 新增组件 ScrollableTabView 滚动视图
- 新增组件 VCode 验证码
- 新增组件 CellPicker 选择器(支持多级联动)
- 新增组件 SearchBar 搜索栏


#### 新增功能

- 从2.x开始，所有组件将支持全局的样式覆盖，可在app。wxss进行全局覆盖
- 目前 Button 支持了圆角属性
- Checkbox组件支持了键值的方式传递选项组。Array-Keys形式的值。
- Cell的slot插槽支持放置icon和图片

#### 重构

- 在2.x版本中，我们将重做了Calendar日历插件，优化了计算月份的算法。极大地提高了组件的性能，目前还支持多种模式：单选模式，日历预定模式，多选模式等。
- 重构了Tabs组件并删除了tab组件，从2.x版本开始，tabs将不带tab container容器。

#### 修复

- 修复了Checkbox在Form表单提交时没初始化值的问题
- 修正了Input组件的最大最小值出现的问题
- 修复了ActionSheet使用loading时出现的bug
- 统一了事件的命名规范，事件统一更正为 on[EventName] 形式.onClick,onChange等
- 调整了Mask-Shadow的阴影度数
- 修复了Cell-Group元素高度未被撑开的问题
- 调整了Button组件的loading图标样式


## v 1.0.3

- Checkbox组件支持了多种图标类型，用户可以自选进行配置
- 现在DropMenu组件支持了type为'filter'类型的格式，filter可以通过配置自定义是slot使用。目前支持的格式有[radio,checkbox,sort,filter],

## v 1.0.2

- 支持了Radio的数组键值形式传值.

## v 1.0.1

- 修复了Dialog 、Cell、Toast、Input、的部分bug.

## v 1.0.0

- 新增组件 Button 按钮
- 新增组件 Avtar 头像
- 新增组件 Icon 图标
- 新增组件 Steps 步骤条
- 新增组件 Countdown 倒计时
- 新增组件 Dialog 消息框
- 新增组件 Badge 徽章
- 新增组件 Tag 标签
- 新增组件 Pane 窗格
- 新增组件 Cell 列表
- 新增组件 Popup 弹出层
- 新增组件 DropMenu 下拉菜单
- 新增组件 Tabs 导航切换栏
- 新增组件 ActionSheet 操作菜单
- 新增组件 Toast 提示
- 新增组件 Alert 弹出框
- 新增组件 Notice 通告
- 新增组件 ActivityIndicator 活动指示器
- 新增组件 Form 表单
- 新增组件 Input 输入框
- 新增组件 Switch 开关
- 新增组件 Radio 单选框
- 新增组件 Checkbox 复选框
- 新增组件 Calendar 日历预定选择器
- 新增组件 QRCode 二维码生成
- 新增组件 SwiperOut 侧滑菜单
- 新增组件 Validate 表单校验
