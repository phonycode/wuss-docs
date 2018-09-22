## Toast 提示

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-toast": "path/to/w-toast/index",
}
```

### 代码演示

```html
<w-pane title="Alert" desc="弹出框" />

<w-pane desc="Default" />
<w-button bind:click="handleClick" type="info">Default</w-button>

<w-pane desc="ButtonColor" />
<w-button bind:click="handleClick2" type="info">ButtonColor</w-button>

<w-pane desc="MoreText" />
<w-button bind:click="handleClick3" type="info">MoreText</w-button>


<w-alert id="wuss-alert" />
```

```js
import { Toast } from 'path/to/index';
Page({
  top() {
    Toast.show({
      position: 'top',
      message: 'top',
    });
  },
  middle() {
    Toast.show({
      position: 'middle',
      message: 'middle',
    });
  },
  bottom() {
    Toast.show({
      position: 'bottom',
      message: 'bottom',
    });
  },
  default() {
    Toast.show({
      message: 'wuss小程序UI库',
    });
  },
  success() {
    Toast.show({
      type: 'success',
      message: 'success',
    });
  },
  like() {
    Toast.show({
      type: 'like',
      message: '收藏成功',
    });
  },
  thenClose() {
    Toast.show({ message: '完成后打印 close ' }).then(() => {
      console.log('close');
    });
  },
  useHide() {
    const wussToast = Toast.show({ message: '2.5s 后关闭 Toast', duration: 0 });
    wussToast.then(() => {
      console.log('close');
    });
    setTimeout(wussToast.hide, 2500);
  },
});
```

### API

#### 事件

| 事件名 | 说明              | 参数 |
| ------ | ----------------- | ---- |
| show   | 导入 Toast 后使用 | 参下 |

#### show 方法属性

| 属性     |                    说明                    |  类型   |  默认值 |
| -------- | :----------------------------------------: | :-----: | ------: |
| type     |                 icon 类型                  | string  |       - |
| message  |                  提示内容                  | string  |       - |
| duration |          自动关闭的延时，单位毫秒          | number  |    1500 |
| position | 弹出位置,可选值: default top middle bottom | string  | default |
| mask     |                是否可以穿透                | boolean |   false |
| color    |                 icon 颜色                  | string  | #ffffff |
| size     |                 icon 大小                  | number  |     100 |

#### 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
