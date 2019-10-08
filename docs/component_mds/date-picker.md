# DatePicker 日期/时间选择器

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-cell-group": "wuss-weapp/w-cell-group/index",
  "w-date-picker": "wuss-weapp/w-date-picker/index"
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/date-picker.mp4"
/>


### 代码演示

```html
<w-cell-group>
  <w-date-picker
    label="年月日"
    title="请选择日期"
    format="YYYY-MM-DD"
    defaultValue="{{ date }}"
    bind:onSelect="handleSelected"
  />
  <w-date-picker
    label="年月日时分秒"
    format="YYYY-MM-DD HH:mm:ss"
    title="请选择日期"
    defaultValue="{{ 1548487316805 }}"
    bind:onSelect="handleSelected"
  />
  <w-date-picker
    label="年月"
    format="YYYY-MM"
    title="请选择日期"
    bind:onSelect="handleSelected"
  />
  <w-date-picker
    label="年月日时分"
    format="YYYY-MM-DD HH:mm"
    title="请选择日期"
    bind:onSelect="handleSelected"
  />
  <w-date-picker
    label="年月日时"
    format="YYYY-MM-DD HH"
    title="请选择日期"
    defaultValue="2019-03-14 09:26"
    bind:onSelect="handleSelected"
  />
</w-cell-group>


<w-pane desc="Time 时间选择器 HH:mm:ss" />
<w-cell-group>
  <w-date-picker
    label="HH:mm:ss"
    format="HH:mm:ss"
    title="请选择时间"
    bind:onSelect="handleSelected"
  />
  <w-date-picker
    label="HH:mm"
    format="HH:mm"
    title="请选择时间"
    bind:onSelect="handleSelected"
  />
  <w-date-picker
    label="mm:ss"
    format="mm:ss"
    title="请选择时间"
    bind:onSelect="handleSelected"
  />
</w-cell-group>


<w-pane desc="设置默认值" />
<w-cell-group>
  <w-date-picker
    label="mode = date"
    title="请选择日期"
    defaultValue="{{ 1548487316805 }}"
    bind:onSelect="handleSelected"
  />
</w-cell-group>


<w-pane desc="指定开始时间和结束时间" />
<w-cell-group>
  <w-date-picker
    label="1990 ~ 2020"
    startDate="1990"
    endDate="2020"
    title="请选择日期"
    bind:onSelect="handleSelected"
  />
</w-cell-group>


<w-pane desc="自定义后缀名" />
<w-cell-group>
  <w-date-picker
    label="CH"
    title="请选择日期"
    startDate="1990"
    endDate="2020"
    suffixName="{{ ['年','月','日','时','分','秒'] }}"
    bind:onSelect="handleSelected"
  />
  <w-date-picker
    label="EN"
    title="Please choose the time"
    startDate="1990"
    endDate="2020"
    suffixName="{{ ['Y','M','D','h','m','s'] }}"
    bind:onSelect="handleSelected"
  />
</w-cell-group>
```

```javascript
data: {
  date: new Date('2019-03-13 18:10:50').format('YYYY-MM-DD HH:mm:ss'),
},
handleSelected(e) {
  console.log(e);
},
```

### API

#### Attribute 属性

| 属性 |    说明    |  类型  | 默认值 |
| -------- | :------: | :----: | :----- |
| format | 要格式化的模板格式 YYYY-MM-DD HH:mm:ss | String | 'YYYY-MM-DD' |
| label | 标签名称 | String | - |
| title | popup弹窗标题 | String | - |
| showValue | 返回何种格式的时间类型 [formateDate/timestamp/date] | String | date |
| startDate | 开始的年份 | Number | 1978 |
| endDate | 结束的年份 默认为当前的年份 | Number | new Date().getFullYear() |
| suffixName | 每个column对应的后缀名称 | Array | ['年','月','日','时','分','秒'] |
| defaultValue | 设置初始化默认值,值可以为时间蹉、格式化后的字符串时间或数组格式的时间，如['2019年','09月','15号',....] | [String,Number,Array] | [formateDate/timestamp/dateArray] |
| currentValue      |  动态设置值. *（需要动态设置请使用currentValue)    | any | - |
| cancelTextColor | picker取消文本的字体颜色 | String | - |
| cancelText | picker取消文本 | String | 取消 |
| confirmTextColor | picker确认文本的字体颜色 | String | - |
| maskClosable | 点击蒙层是否允许关闭 | Boolean | true |
| confirmText | picker确认文本 | String | 确认 |
| placeholder | date picker的占位符文本 | String | - |

#### Event 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| onSelect | 选中时触发的回调 | e.detail.value |

#### Slot 插槽

| 名称 | 说明 |
| ---- | ---- |


#### Class 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
