## Alert 弹出框

弹出提示

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
   "w-alert":"wuss-weapp/w-alert/index",
    "w-button":"wuss-weapp/w-button/index",
    "w-pane":"wuss-weapp/w-pane/index"
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/alert.mp4"
/>



### 代码演示

```html
<w-pane title="Alert" desc="弹出框" />

<w-pane desc="Default" />
<w-button bind:onClick="handleClick" type="info">Default</w-button>

<w-pane desc="ButtonColor" />
<w-button bind:onClick="handleClick2" type="info">ButtonColor</w-button>

<w-pane desc="MoreText" />
<w-button bind:onClick="handleClick3" type="info">MoreText</w-button>


<w-alert id="wuss-alert" />
```

```javascript
import { Alert } from '../../dist/index';
handleClick() {
  Alert({
    title: '提示',
    content: 'wuss weapp is good',
    confirm: () => {
      console.log('ok');
    },
  });
},
handleClick2() {
  Alert({
    title: 'ButtonColor',
    content: '按钮字体颜色是#28a2f3',
    buttonColor: '#28a2f3',
  });
},
handleClick3() {
  Alert({
    title: 'MoreText',
    content:
      '更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字',
  });
},
```

### API

#### Attribute 属性

| 属性 | 说明 | 类型 | 默认值 |
| ---- | :--: | :--: | -----: |
| title | 标题 |   string   | - |
| content | 内容 |   string   | - |
| maskClose | 点击遮罩层是否可关闭 |   boolean   | false |
| buttonColor | 按钮颜色 |   string   | #ff9900 |
| confirm | 确定按钮回调 |   function   | - |

#### Class 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
