# Popup 弹出层

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-popup": "wuss-weapp/w-popup/index",
}
```


### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/popup.mp4"
/>


### 代码演示

```html
<w-pane title="Popup" desc="弹出层" />

<w-pane desc="Position" />

<w-button type="info" bind:onClick="handleClick1">Top</w-button>
<w-popup
 visible="{{ popup1 }}"
 position="top"
 height="250px"
 bind:onClose="handleClose"
>
	<scroll-view scroll-y class="scroll-view-x">
		<view
		 class=""
		 wx:for="{{50}}"
		 wx:key="index"
		 hover-class="none"
		 hover-stop-propagation="false"
		>
			{{ index }}
		</view>
	</scroll-view>
</w-popup>
<w-button type="info" bind:onClick="handleClick2">Bottom</w-button>
<w-popup
 visible="{{ popup2 }}"
 position="bottom"
 height="250px"
 bind:onClose="handleClose"
>
	<scroll-view scroll-y class="scroll-view-x">
		<view
		 class=""
		 wx:for="{{50}}"
		 wx:key="index"
		 hover-class="none"
		 hover-stop-propagation="false"
		>
			{{ index }}
		</view>
	</scroll-view>
</w-popup>
<w-button type="info" bind:onClick="handleClick3">Left</w-button>
<w-popup
 visible="{{ popup3 }}"
 position="left"
 bind:onClose="handleClose"
>
	<scroll-view scroll-y class="scroll-view-y">
		<view
		 class=""
		 wx:for="{{50}}"
		 wx:key="index"
		 hover-class="none"
		 hover-stop-propagation="false"
		>
			{{ index }}
		</view>
	</scroll-view>
</w-popup>
<w-button type="info" bind:onClick="handleClick4">Right</w-button>

<w-popup
 visible="{{ popup6 }}"
 position="main"
 height="45%"
 width="72%"
 padding="0"
 bind:onClose="handleClose"
 wuss-class="wuss-popup"
>
  <view class="demo-popup-6">
    <w-qr-code size="200" text="hello world" />
    <w-icon bindtap="handleClose" type="close" color="#999999" wuss-class="w-icon" />
  </view>
</w-popup>
<w-button type="info" bind:onClick="handleClick6">Main</w-button>

<w-popup
 visible="{{ popup4 }}"
 position="right"
 bind:onClose="handleClose"
>
	<scroll-view scroll-y class="scroll-view-y">
		<view
		 class=""
		 wx:for="{{50}}"
		 wx:key="index"
		 hover-class="none"
		 hover-stop-propagation="false"
		>
			{{ index }}
		</view>
	</scroll-view>
</w-popup>

<w-pane desc="Disabled MaskCancel" />

<w-button type="info" bind:onClick="handleClick5">Info</w-button>
<w-popup
 maskCancel="{{ false }}"
 visible="{{ popup5 }}"
 position="bottom"
 height="250px"
 bind:onClose="handleClose"
>
	<scroll-view scroll-y class="scroll-view-x">
		<view
		 class=""
		 wx:for="{{50}}"
		 wx:key="index"
		 hover-class="none"
		 hover-stop-propagation="false"
		>
			下拉点击关闭按钮{{ index }}
		</view>
	  <w-button type="info" bind:onClick="handleClose">关闭</w-button>
	</scroll-view>
</w-popup>
```

```javascript
data: {
  popup1: false,
  popup2: false,
  popup3: false,
  popup4: false,
  popup5: false,
  popup6: false,
},
handleClose() {
  this.setData({
    popup1: false,
    popup2: false,
    popup3: false,
    popup4: false,
    popup5: false,
    popup6: false,
  });
},
handleClick1() {
  this.setData({ popup1: true });
},
handleClick2() {
  this.setData({ popup2: true });
},
handleClick3() {
  this.setData({ popup3: true });
},
handleClick4() {
  this.setData({ popup4: true });
},
handleClick5() {
  this.setData({ popup5: true });
},
handleClick6() {
  this.setData({ popup6: true });
},
```

```css
.scroll-view-x {
  height: 250px;
  width: 100%;
}

.scroll-view-y {
  height: 100%;
}
```

### API

#### Attribute 属性

| 属性       |                      说明                      |  类型   | 默认值 |
| ---------- | :--------------------------------------------: | :-----: | -----: |
| visible    |                  组件是否可见                  | boolean |  false |
| position   |       弹出位置,可选值:[left,right,top,bottom,main]       | string  |      - |
| mask       |                 是否开启遮罩层                 | boolean |  false |
| maskIndex  |             当前组件的 z-index 值              | number  |      - |
| width      | 内容区的宽度，当 type 的值为 left,right 时生效 | string  |      - |
| height     | 内容区的高度,当 type 的值为 top,bottom 时生效  | string  |      - |
| padding    |                 内容区的内边距                 | string  |      - |
| styles     |                                                | string  |      - |
| zIndex     |                                                | number  |      - |
| maskCancel |               点击遮罩层可否关闭               | boolean |  false |

#### Event 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| onClose | popup关闭时的回调 | ---- |


#### Slot 插槽

| 名称 | 说明 |
| ---- | ---- |


#### Class 自定义类名

| 类名               | 说明 |
| ------------------ | ---- |
| wuss-class         | 无   |
| wuss-popup-content | 无   |
