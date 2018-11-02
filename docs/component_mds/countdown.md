# Countdown 倒计时

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-countdown": "path/to/w-countdown/index",
}
```

### 图片演示

<img style="margin: 20px 0;" height="450px" src="../../resource/count-down.jpg"/>



### 代码演示

```html
<!--pages/w-countdown/index.wxml-->
<w-pane title="Countdown" desc="倒计时" />

<w-pane desc="Default" />
<w-countdown time="{{ date1 }}" />



<w-pane desc="notimestamp = true time = 60" />
<w-countdown time="60" bindcallback="countdownComplate"notimestamp="{{true}}" />

<w-pane desc="format = D" />
<w-countdown time="{{ date1 }}" format="D" />

<w-pane desc="format = H" />
<w-countdown time="{{ date1 }}" format="H" />

<w-pane desc="format = MM" />
<w-countdown time="{{ date1 }}" format="MM" />

<w-pane desc="format = s" />
<w-countdown time="{{ date1 }}" format="s" />
```

### API

#### 属性

| 属性        |            说明            |  类型   | 默认值 |
| ----------- | :------------------------: | :-----: | -----: |
| notimestamp | 是否使用时间戳 true 为不是 | boolean |  false |
| format      |   格式化时间格式默认为 H   | string  |      - |
| time        |     倒计时的时间单位 s     | number  |      - |

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
