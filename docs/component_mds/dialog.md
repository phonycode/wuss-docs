# Dialog 弹出框

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-dialog": "path/to/w-dialog/index",
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/dialog.mp4"
/>



### 代码演示

```html
<w-pane title="Dialog" desc="弹出框" />

<w-pane desc="Pic" />
<w-button bind:onClick="handleClick" data-id="1" type="info">{{ visible1 ? 'on' : 'off' }}</w-button>
<w-dialog
 visible="{{ visible1 }}"
 bind:close="handleClose"
>
 <view class="example-dialog" hover-class="none" hover-stop-propagation="false">
   <image style="width: 100%;height: 300px;" class="" src="/pages/assets/logo.png" ></image>
 </view>
</w-dialog>


<w-pane desc="Button Close" />
<w-button bind:onClick="handleClick" data-id="2" type="info">{{ visible2 ? 'on' : 'off' }}</w-button>
<w-dialog
 visible="{{ visible2 }}"
 bind:close="handleClose"
>
 <view class="example-dialog" hover-class="none" hover-stop-propagation="false">
   <text>wuss 一款高质量，组件齐全，高自定义的微信小程序UI组件库</text>
   <w-button bind:onClick="handleClose" type="info">Close</w-button>
 </view>
</w-dialog>

<w-pane desc="MaskClose = False" />
<w-button bind:onClick="handleClick" data-id="3" type="info">{{ visible3 ? 'on' : 'off' }}</w-button>
<w-dialog
 visible="{{ visible3 }}"
 maskClose="{{ false }}"
 bind:close="handleClose"
>
 <view class="example-dialog" hover-class="none" hover-stop-propagation="false">
   <text>点击遮罩层是无法关闭该对话框的哟~</text>
   <w-button bind:onClick="handleClose" type="info">Close</w-button>
 </view>
</w-dialog>
```

### API

#### 属性

| 属性      |             说明             |  类型   | 默认值 |
| --------- | :--------------------------: | :-----: | -----: |
| visible   |          显示/隐藏           | boolean |  false |
| width     | dialog 的内容区宽度.默认 80% | string  |      - |
| maskClose |   点击遮罩层是否可以关闭？   | boolean |  false |
| height    |  dialog 的内容区高度，可选   | string  |      - |

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
