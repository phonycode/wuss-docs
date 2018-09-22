# Popup 弹出层

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-popup": "path/to/w-popup/index",
}
```

### 代码演示

```html
<w-pane title="Popup" desc="弹出层" />

<w-pane desc="Position" />

<w-button type="info" bind:click="handleClick1">Top</w-button>
<w-popup
 visible="{{ popup1 }}"
 position="top"
 height="250px"
 bind:close="handleClose"
>
 <view wx:for="{{100}}" wx:key="index">{{ index }}</view>
</w-popup>
<w-button type="info" bind:click="handleClick2">Bottom</w-button>
<w-popup
 visible="{{ popup2 }}"
 position="bottom"
 height="250px"
 bind:close="handleClose"
>
 <view wx:for="{{100}}" wx:key="index">{{ index }}</view>
</w-popup>
<w-button type="info" bind:click="handleClick3">Left</w-button>
<w-popup
 visible="{{ popup3 }}"
 position="left"
 bind:close="handleClose"
>
 <view wx:for="{{100}}" wx:key="index">{{ index }}</view>
</w-popup>
<w-button type="info" bind:click="handleClick4">Right</w-button>
<w-popup
 visible="{{ popup4 }}"
 position="right"
 bind:close="handleClose"
>
 <view wx:for="{{100}}" wx:key="index">{{ index }}</view>
</w-popup>

<w-pane desc="Disabled Mask" />

<w-button type="info" bind:click="handleClick5">Info</w-button>
<w-popup
 visible="{{ popup5 }}"
 position="bottom"
 height="250px"
 bind:close="handleClose"
 mask="{{false}}"
>
 <view wx:for="{{100}}" wx:key="index">{{ index }}</view>
 <w-button type="info" bind:click="handleClose">关闭</w-button>
</w-popup>
```

### API

#### 属性

| 属性       |                      说明                      |  类型   | 默认值 |
| ---------- | :--------------------------------------------: | :-----: | -----: |
| visible    |                  组件是否可见                  | boolean |      - |
| position   |       弹出位置,可选值:leftrighttopbottom       | string  |      - |
| mask       |                 是否开启遮罩层                 | boolean |      - |
| maskIndex  |             当前组件的 z-index 值              | number  |      - |
| width      | 内容区的宽度，当 type 的值为 left,right 时生效 | string  |      - |
| height     | 内容区的高度,当 type 的值为 top,bottom 时生效  | string  |      - |
| padding    |                 内容区的内边距                 | string  |      - |
| styles     |                                                | string  |      - |
| zIndex     |                                                | number  |      - |
| maskCancel |               点击遮罩层可否关闭               | boolean |      - |

#### 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |


#### slot

| 名称 | 说明 |
| ---- | ---- |


#### 自定义类名

| 类名               | 说明 |
| ------------------ | ---- |
| wuss-class         | 无   |
| wuss-popup-content | 无   |
