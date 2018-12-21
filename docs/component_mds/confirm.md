# Confirm 确认框

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-confirm": "wuss-weapp/w-confirm/index",
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/confirm.mp4"
/>



### 代码演示

```html
<w-pane title="Confirm" desc="确认框" />

<w-pane desc="Default" />
<w-button type="info" bind:onClick="handleClick1" >Confirm</w-button>

<w-pane desc="ButtonColor" />
<w-button type="info" bind:onClick="handleClick2" >Confirm2</w-button>

<w-pane desc="ButtonText" />
<w-button type="info" bind:onClick="handleClick3" >Confirm3</w-button>

<w-pane desc="ShowCancel = False" />
<w-button type="info" bind:onClick="handleClick4" >Confirm3</w-button>


<w-confirm id="wuss-confirm" />
```

```javascript
import { Confirm } from '../../dist/index';
handleClick1() {
  Confirm({
    title: '警告',
    content: '你确定要删除吗？',
    confirm: () => { console.log('confirm') },
    cancel: () => { console.log('cancel') },
  })
},
handleClick2() {
  Confirm({
    title: '你变了',
    content: '你变绿了',
    cancelTextColor: '#55b2f0',
    confirmTextColor: 'green',
  })
},
handleClick3() {
  Confirm({
    title: '提示',
    content: '你爱我吗？',
    cancelText: '忘了爱',
    confirmText: '爱',
    cancelTextColor: '#999',
    confirmTextColor: 'red',
    confirm: () => { console.log('confirm') },
    cancel: () => { console.log('cancel') },
  })
},
handleClick4() {
  Confirm({
    title: '提示',
    showCancel: false,
    content: '你只能点确定',
  })
},
```

```css
```

### API

#### Attribute 属性

| 属性 |    说明    |  类型  | 默认值 |
| ---- | :--------: | :----: | -----: |
| title | 标题 | string | - |
| content | 内容 | string | - |
| cancelText | 取消按钮文本 | string | 取消 |
| confirmText | 确定按钮文本 | string | 确定 |
| cancelTextColor | 取消按钮文本颜色 | string | #333333 |
| confirmTextColor | 确定按钮文本颜色 | string | #ff9900 |
| showCancel | 是否展示取消按钮 | boolean | true |
| confirm | 确定按钮回调 | function | - |
| cancel | 取消按钮回调 | function | - |

#### Event 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |



#### Slot 插槽

| 名称 | 说明 |
| ---- | ---- |


#### Class 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
