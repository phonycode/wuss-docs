## v 2.0.9

#### 修复

- 修复了 w-cell-picker 在popup里可以滚动问题。[#5783346](https://github.com/phonycode/wuss-weapp/commit/6ed52c499f45aec61355a7079203ac77609695c7)
- 修复了 w-input 抛出错误问题。[#3008f36](https://github.com/phonycode/wuss-weapp/commit/57833461805b757a54c6136f763bb208b148a9cc)


#### 支持

- w-card 将支持更长的数据加载块渲染.[#99fd5aa](https://github.com/phonycode/wuss-weapp/commit/3008f363519443cae3c2826d2d5fb028c7b8c74c)




## v 2.0.8

#### 修复

- 修复了w-cell-picker 修复了在取消选择值的时候当前激活的值不会回到默认值.[#ea04ffc](https://github.com/phonycode/wuss-weapp/commit/43585d78875e8b22e7e4bd2c68d106838c88091d)

- 修复了w-input 在类型为mobiled的情况下 onchange回调的手机号码带空格问题.[#c52a528](https://github.com/phonycode/wuss-weapp/commit/869395dcad1eae3723370066ed93990f42f1f792)


- 修复了ScrollableTabView 在动态修改options时导致pageview渲染出错问题.[#3bd800f](https://github.com/phonycode/wuss-weapp/commit/ea04ffc55dc8f96ea8aea6a7126acf6f1640e93f)



## v 2.0.7

#### 修复

- 修复了w-cell-picker 在移动端使用无过渡动画问题[#e9f913c](https://github.com/phonycode/wuss-weapp/commits/master)

- 修复了swiper-out组件在拖动时双击两下不会回到原位[#e9f913c]  (https://github.com/phonycode/wuss-weapp/commits/master)


## v 2.0.6

#### 修复

- 修复了w-activity-indicator 组件display显示方式为行内块.[#0be7a3a](https://github.com/phonycode/wuss-weapp/commit/7a66c6112572b1096a40fe6f6996f5e973cd7227)

- 修复了w-cell 右侧link箭头过小的问题.[#6e60899](https://github.com/phonycode/wuss-weapp/commit/1fed7e5ecea7d1bbaad51ecb2ef9a5d6ef047e09) 

- 修复了w-loading z-index在一些组件中显示层级过低现象[#79b3d70](https://github.com/phonycode/wuss-weapp/commit/f78168d4a5d4289443485005746b5fffd2443fe9)

- 修复了w-pane slot=desc 无法显示.[#f78168d](https://github.com/phonycode/wuss-weapp/commit/b42af2cf5972a26349795ed3633904d83fd7ae95)

- w-cell-picker
  - 1.修复有时无法选中的现象[]()
  - 2.在拾取器视图第二个选项渲染过程中无法重新计算高度问题的问题[#9aa5678](https://github.com/phonycode/wuss-weapp/commit/05e4ee02600c5349b8735daf21340a014f23bbbe)
  - 3.优化了滚动条件判断。
  - 4.现在支持单例模式array-keys数组键或array-object数组对象数组进行使用， 例: [a,b,c,d,e] or  [{}, {}, {}, {}]。
  - 5.修复了初始化默认值的问题.
  - 6.支持了表单校验模块，可配合validate,form使用.



## v 2.0.5

#### 支持

- w-popup组件的position属性支持了main值,可使用[left,right,top,bottom,main]值。[#8e79ac0](https://github.com/phonycode/wuss-weapp/commit/7eafe9d8340c255f89d9df28a1f71c09657649df)

#### 修复

- 修复了w-action-sheet 组件无法触发分享功能. 现在可指定openType属性来触发对应的功能，详见官方文档button的openType[#743b386](https://github.com/phonycode/wuss-weapp/commit/8e79ac0a1f13549b029aac86db3d6a4790308b95)


## v 2.0.4

#### 支持

- 现在w-tabs组件的options支持传入Array-Keys键值形式的值。[#b93db36](https://github.com/phonycode/wuss-weapp/commit/80d3ce1903bea5be3efc958b05e3957ec22115ab)

- validate组件支持了手机最新号码的正则表达式 [#76543dc](https://github.com/phonycode/wuss-weapp/commit/743b386f975feee408da401456d4278db3fc7522)

#### 重构

- 在2.0.4版本，我们重写了ScrollableTabView组件，现在它将支持传入Array-Keys键值形式的值。同时优化了代码，提升了渲染性能。让它使用起来更加方便。[#55cfcd1](https://github.com/phonycode/wuss-weapp/commit/b93db364be8af630f2465a4a5f714c6ab61aece2)


## v 2.0.3

#### 修复

- 修复了 SwiperOut 组件在列表滚动时 Y 轴也会触发侧滑菜单的展开和收起问题 [#6101c7b](https://github.com/phonycode/wuss-weapp/commit/6101c7bb0e358cb5f2b8a9fef2a02578527d9119)
- 修复了日历类型为 range 时月份计算出现的问题 [#22](https://github.com/phonycode/wuss-weapp/issues/22)

## v 2.0.2

#### 修复

- 修复了按钮在 loading 状态下没禁用的问题 [#e77a2a6](https://github.com/phonycode/wuss-weapp/commit/e77a2a69fe42c57ea27536888b36fcce1d68fcf8)

## v 2.0.1

#### 修复

- 调整了日历组件内边距样式
- 调整了 Switch 的层级过高问题
- 修复了 Form 组件在没教研组件下无法提交的问题

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

- 从 2.x 开始，所有组件将支持全局的样式覆盖，可在 app。wxss 进行全局覆盖
- 目前 Button 支持了圆角属性
- Checkbox 组件支持了键值的方式传递选项组。Array-Keys 形式的值。
- Cell 的 slot 插槽支持放置 icon 和图片

#### 重构

- 在 2.x 版本中，我们将重做了 Calendar 日历插件，优化了计算月份的算法。极大地提高了组件的性能，目前还支持多种模式：单选模式，日历预定模式，多选模式等。
- 重构了 Tabs 组件并删除了 tab 组件，从 2.x 版本开始，tabs 将不带 tab container 容器。

#### 修复

- 修复了 Checkbox 在 Form 表单提交时没初始化值的问题
- 修正了 Input 组件的最大最小值出现的问题
- 修复了 ActionSheet 使用 loading 时出现的 bug
- 统一了事件的命名规范，事件统一更正为 on[EventName] 形式.onClick,onChange 等
- 调整了 Mask-Shadow 的阴影度数
- 修复了 Cell-Group 元素高度未被撑开的问题
- 调整了 Button 组件的 loading 图标样式

## v 1.0.3

- Checkbox 组件支持了多种图标类型，用户可以自选进行配置
- 现在 DropMenu 组件支持了 type 为'filter'类型的格式，filter 可以通过配置自定义是 slot 使用。目前支持的格式有[radio,checkbox,sort,filter],

## v 1.0.2

- 支持了 Radio 的数组键值形式传值.

## v 1.0.1

- 修复了 Dialog 、Cell、Toast、Input、的部分 bug.

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
