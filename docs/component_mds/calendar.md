# Calendar 预定日历选择器

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-calendar": "wuss-weapp/w-calendar/index",
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/calendar.mp4"
/>




### 代码演示

```html
<w-button type="info" bind:onClick="handleClick1">
	{{ visible1 ? 'show' : 'hide' }}
</w-button>
<w-calendar bindonSelect="handleSelected" bindconfirm="handleConfirm" bindcancel="handleCancel" defaultValue="{{defaultValue}}" visible disabledDate="{{disabledDate}}" />
```

### API

#### Attribute 属性

| 属性         | 说明 |  类型   | 默认值 |
| ------------ | :--: | :-----: | -----: |
| visible      |  是否可见    | Boolean | false |
| type      |  日历选择类型    | String | 'range' |
| maxDate      |  最大日期    | Null | 0 |
| minDate      |  最小日期    | Null | 0 |
| defaultValue      |  最小日期    | Array | [] |
| startDayText      |  开始日期的字    | String | '起' |
| endDayText      |  结束日期的字    | String | '止' |
| dateTextObj      |  日期的文本    | Object | {} |
| initalMonths      |  初始渲染月份    | Number | 6 |
| disabledDate      |  禁用的日期    | Object | {} |

#### Event 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| confirm      |   确认按钮的回调   | e.detail.value |
| onSelect      |  选中日历的值回调    | e.detail.value |
| cancel      |  取消后的回调    | - |


#### Slot 插槽

| 名称 | 说明 |
| ---- | ---- |


#### Class 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
