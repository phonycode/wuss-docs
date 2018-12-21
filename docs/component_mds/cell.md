# Cell 列表

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-cell": "wuss-weapp/w-cell/index",
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/cell.mp4"
/>



### 代码演示

```html
<w-pane title="Cell" desc="列表" />

<w-pane desc="Default" />
<w-cell-group>
	<w-cell
	 label="列表"
	 highlight
	 content="内容"
	/>
</w-cell-group>

<w-pane desc="Desc" />
<w-cell-group>
	<w-cell
	 label="列表"
	 highlight
	 content="内容"
	 desc="附加标题"
	/>
</w-cell-group>

<w-pane desc="Multiple" />
<w-cell-group>
	<w-cell
	 isLink
	 label="列表{{index}}"
	 highlight
	 content="内容{{index}}"
	 wx:for="{{4}}"
	 wx:key="index"
	/>
</w-cell-group>

<w-pane desc="Link" />
<w-cell-group>
	<w-cell
	 isLink
	 label="navigateTo"
	 highlight
	 content="w-button"
	 link="../w-button/index"
	/>
	<w-cell
	 isLink
	 label="redirectTo"
	 highlight
	 content="w-button"
	 linkType="redirectTo"
	 link="../w-button/index"
	/>
	<w-cell
	 isLink
	 label="switchTab"
	 highlight
	 content="index"
	 linkType="redirectTo"
	 link="../index/index"
	/>
	<w-cell
	 isLink
	 label="navigateBack"
	 highlight
	 content="w-button"
	 linkType="navigateBack"
	 delta="1"
	/>
</w-cell-group>

<w-pane desc="Icon" />
<w-cell-group>
	<w-cell
	 isLink
	 label="example title"
	 highlight
	 content="example description"
	 icon="home"
	/>
</w-cell-group>

<w-pane desc="Disabled" />
<w-cell-group>
	<w-cell
	 isLink
	 disabled
	 label="消息"
	 link="/message"
	/>
	<w-cell
	 isLink
	 disabled
	 label="列表"
	 link="/message"
	/>
	<w-cell
	 isLink
	 disabled
	 label="设置"
	 link="/message"
	/>
</w-cell-group>

<w-pane desc="Slot" />
<w-cell-group>
	<w-cell
	 isLink
	 highlight
	 icon="home"
	 link="/message"
	>
		<view slot="label">
			我的消息
		</view>
		<view slot="content">
			内容
		</view>
	</w-cell>
	<w-cell
	 isLink
	 highlight
	 desc="您在闲鱼上售卖的产品已出售，点击查看详情"
	 wuss-class-hd="w-cell-hd"
	 wuss-class-left="w-cell-left"
	>
		<view
		 slot="label"
		 class="w-cell-label"
		 hover-class="none"
		 hover-stop-propagation="false"
		>
			<view
			 class="left"
			 hover-class="none"
			 hover-stop-propagation="false"
			>
				您有新的通知
			</view>
			<view
			 style="font-size: 14px;color: #999999;"
			 class="right"
			 hover-class="none"
			 hover-stop-propagation="false"
			>
				10-31 09:12
			</view>
		</view>
		<image
		 slot="icon"
		 class="w-cell-avatar"
		 src="../../assets/logo.png"
		/>
	</w-cell>
</w-cell-group>
```

```css
.w-cell-avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  padding: 5px;
  border: 1rpx solid #eeeeee;
}

.w-cell-label {
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-bottom: 2px;
}

.w-cell-hd {
  padding: 10px 15px!important;
}

.w-cell-left {
  padding-right: 0!important;
}
```

### API

#### Attribute 属性

| 属性 |    说明    |  类型  | 默认值 |
| ---- | :--------: | :----: | -----: |
| label | 标题 | string | - |
| labelSpan | 标题宽度可选值1-5 | string | - |
| content | 内容 | string | - |
| desc | 附加描述 | string | - |
| isLink | 是否是链接 开启后显示右边箭头 | boolean | false |
| link | isLink为true时,link为跳转的url | string | - |
| icon | 标题图标 | string | - |
| iconSize | 图标大小 | string | - |
| iconColor | 图标颜色 | string | - |
| delta | 当linkType值为 navigateBack 时有效，表示返回页面层数 | number | 1 |
| linkType | 跳转类型，类型有 [navigateTo/redirectTo/switchTab/reLaunch/navigateBack] | string | navigateTo |
| disabled | 禁用cell | boolean | false |
| highlight | 开启hover class | boolean | false |
| direction | 内容区的显示方向 | string | flex-end |
| isValidateIcon | 是否是表单中的按钮,开启是将触发表单功能 | boolean | false |


#### Event 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| onClick | 点击事件回调 | ---- |


#### Slot 插槽

| 名称 | 说明 |
| ---- | ---- |
| icon | 自定义图标slot |
| label | 左边标题的slot |
| content | 内容区slot |
| slot | 默认的slot是content的slot |


#### Class 自定义类名

| 类名               | 说明 |
| ------------------ | ---- |
| wuss-class         | 组件根样式类   |
| wuss-class-cell    | cell样式类   |
| wuss-class-hd      | 头部样式类   |
| wuss-class-left    | 内容区左边样式类   |
| wuss-class-right   | 内容区右边样式类   |
| wuss-class-content | 内容区样式类   |
| wuss-class-ft      | 底部样式类   |
