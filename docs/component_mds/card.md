# Card 卡片

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-card": "wuss-weapp/w-card/index",
}
```


### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/card.mp4"
/>



### 代码演示

```html
<w-pane title="Card" desc="卡片" />

<w-pane desc="Slot" />
<w-card
 loading="{{ loading }}"
 title="标题"
 extra="副标题"
 content="内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区"
 footer="底部信息"
 footer-extra="底部副标题"
/>

<view style="margin: 20px 0;" hover-class="none" hover-stop-propagation="false">
  <w-cell-group>
    <w-cell label="开启loading">
      <w-switch color="#ff9900" slot="content" bind:onChange="handleChange" />
    </w-cell>
  </w-cell-group>
</view>

<w-pane desc="Full" />
<w-card
 full
 shadow="{{ false }}"
 title="标题"
 extra="副标题"
 content="内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区内容区"
 footer="底部信息"
 footer-extra="底部副标题"
/>

<w-pane desc="Slot" />
<w-card>
	<view
	 slot="title"
	 class="w-card-title"
	 hover-class="none"
	 hover-stop-propagation="false"
	>
		标题
	</view>
	<view
	 slot="extra"
	 class="w-card-extra"
	 hover-class="none"
	 hover-stop-propagation="false"
	>
		副标题
	</view>
	<view
	 slot="content"
	 class="w-card-content"
	 hover-class="none"
	 hover-stop-propagation="false"
	>
		内容区内容区内容区内容区内容区内容区内容区内容区
	</view>
	<view
	 slot="footer"
	 class="w-card-footer"
	 hover-class="none"
	 hover-stop-propagation="false"
	>
		底部
	</view>
	<view
	 slot="footer-extra"
	 class="w-card-footer-extra"
	 hover-class="none"
	 hover-stop-propagation="false"
	>
		底部extra
	</view>
</w-card>
```

```javascript
data: {
  loading: false,
},
handleChange(e) {
  this.setData({
    loading: e.detail.value,
  })
},
```

```css
```

### API

#### Attribute 属性

| 属性 |    说明    |  类型  | 默认值 |
| ---- | :--------: | :----: | -----: |
| full | 通栏模式 | boolean | - |
| title | 头部标题 | string | - |
| extra | 头部副标题 | string | - |
| content | 内容区信息 | string | - |
| footer | 底部标题 | string | - |
| footerExtra | 底部副标题 | string | - |
| shadow | 开启卡片阴影 | boolean | true |
| loading | 进入loading模式 | boolean | false |

#### Event 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| onHdClick | header被点击回调 | - |
| onBdClick | body被点击回调 | - |


#### Slot 插槽

| 名称 | 说明 |
| content | 内容区信息 |
| footer | 底部标题 |
| footer-extra | 底部副标题 |
| title | 头部标题 |
| extra | 头部副标题 |


#### Class 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
| wuss-class-hd | 头部样式类 |
| wuss-class-bd | 内容部样式类 |
| wuss-class-ft | 底部样式类 |