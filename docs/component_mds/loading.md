# Loading 加载指示器

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-loading": "path/to/w-loading/index",
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/loading.mp4"
/>


### 代码演示

```html
<w-pane title="Loading" desc="加载指示器" />

<w-pane desc="Callback" />
<w-button type="info" bind:onClick="handleClick3" >正常使用</w-button>

<w-pane desc="Default" />
<w-button type="info" bind:onClick="handleClick1" >3秒后SetTimeOut关闭</w-button>

<w-pane desc="TimeOut" />
<w-button type="info" bind:onClick="handleClick2" >3秒后自动关闭</w-button>


<w-loading id="wuss-loading" />
<w-alert id="wuss-alert" />
```

```javascript
handleClick3() {
  Loading.show({
    hide: () => Alert({
      title: '提示',
      content: '我被关闭了',
    }),
  })
  setTimeout(() => {
    Loading.hide()
  }, 3000);
},
handleClick1() {
  Loading.show({
    content: 'Loading...',
    hide: () => Alert({
      title: '提示',
      content: '手动调用Hide方法关闭',
    }),
  })
  setTimeout(() => {
    Loading.hide()
  }, 3000);
},
handleClick2() {
  Loading.show({
    content: 'Loading...',
    timeout: 2000,
    hide: () => Alert({
      title: '提示',
      content: '设置TimeOut自动关闭',
    }),
  })
}
```

```css
```

### API

#### 属性

| 属性 |    说明    |  类型  | 默认值 |
| ---- | :--------: | :----: | -----: |
| content | 展示内容 | string | 正在加载... |
| showText | 是否展示内容文字 | boolean | true |
| timeout | 指定时间段内关闭loading | number | - |
| hide | loading消失后的回调 | function | - |

#### 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |



#### slot

| 名称 | 说明 |
| ---- | ---- |


#### 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
