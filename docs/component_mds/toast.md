## Toast 提示

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-toast": "wuss-weapp/w-toast/index",
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/toast.mp4"
/>



### 代码演示

```html
<w-pane title="Toast" desc="提示" />

<view bindtap="a">
	点这里测试是否会被穿透
	<w-toast id="wuss-toast" wuss-class="test"/>

	<w-button catchtap="top" type="info">top</w-button>
	<w-button catchtap="middle" type="info">middle</w-button>
	<w-button catchtap="bottom" type="info">bottom</w-button>
	<w-button catchtap="default" type="info">default</w-button>

	<w-button catchtap="success" type="warn">带icon: success</w-button>
	<w-button catchtap="like" type="warn">带icon: like</w-button>

	<w-button catchtap="useHide" type="danger">手动关闭 Toast </w-button>

</view>
```

```js
import { Toast } from 'wuss-weapp/index';
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

#### Event 事件

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

#### Class 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
