# QR Code 二维码

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-qr-code": "path/to/w-qr-code/index",
}
```

### 图片演示

<img style="margin: 20px 0;" height="450px" src="../../resource/qrcode.jpg"/>



### 代码演示

```html
<w-pane title="QR Code" desc="二维码" />

<w-pane desc="Default" />


<view class="cell" >
 <w-qr-code
   text="{{ code }}"
 />
</view>
<w-button type="info" bind:onClick="handleClick">取随机值</w-button>


<w-pane desc="Size" />

<view class="cell" >
 <w-qr-code
   text="{{ code }}"
   size="{{200}}"
 />
</view>

<view class="cell" >
 <w-qr-code
   text="{{ code }}"
   size="{{300}}"
 />
</view>
```

### API

#### 属性

| 属性 |    说明    |  类型  | 默认值 |
| ---- | :--------: | :----: | -----: |
| text | 二维码信息 | string |      - |
| size | 二维码大小 | string |      - |

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
