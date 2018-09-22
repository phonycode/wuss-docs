# Cell 列表

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-cell": "path/to/w-cell/index",
}
```

### 代码演示

```html
<w-pane title="Cell" desc="列表" />

<w-pane desc="Default" />
<w-cell-group>
	<w-cell label="列表" content="内容" />
</w-cell-group>

<w-pane desc="Desc" />
<w-cell-group>
	<w-cell
	 label="列表"
	 content="内容"
	 desc="附加标题"
	/>
</w-cell-group>

<w-pane desc="Multiple" />
<w-cell-group>
	<w-cell
	 isLink
	 label="列表{{index}}"
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
	 content="w-button"
	 link="../w-button/index"
	/>
	<w-cell
	 isLink
	 label="redirectTo"
	 content="w-button"
	 linkType="redirectTo"
	 link="../w-button/index"
	/>
	<w-cell
	 isLink
	 label="switchTab"
	 content="index"
	 linkType="redirectTo"
	 link="../index/index"
	/>
	<w-cell
	 isLink
	 label="navigateBack"
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
	 disabled
	 icon="home"
	 link="/message"
	>
		<view
		 slot="label"
		>
			我的消息
		</view>
		<view
		 slot="content"
		>
			内容
		</view>
	</w-cell>
</w-cell-group>
```

### API

#### 属性

| 属性           |                                  说明                                   |  类型   | 默认值 |
| -------------- | :---------------------------------------------------------------------: | :-----: | -----: |
| label          |                                  标题                                   | string  |      - |
| labelSpan      |                           标题宽度可选值 1-5                            | number  |      - |
| content        |                                  内容                                   | string  |      - |
| desc           |                                附加描述                                 | string  |      - |
| isLink         |                      是否是链接开启后显示右边箭头                       | boolean |      - |
| link           |                   isLink 为 true 时,link 为跳转的 url                   | string  |      - |
| icon           |                                标题图标                                 | string  |      - |
| iconSize       |                                图标大小                                 | string  |      - |
| iconColor      |                                图标颜色                                 | string  |      - |
| delta          |         当 linkType 值为 navigateBack 时有效，表示返回页面层数          | number  |      - |
| linkType       | 跳转类型，类型有[navigateTo/redirectTo/switchTab/reLaunch/navigateBack] | string  |      - |
| disabled       |                                禁用 cell                                | boolean |      - |
| highlight      |                             开启 hoverclass                             | boolean |      - |
| direction      |                            内容区的显示方向                             | string  |      - |
| isValidateIcon |                                                                         | boolean |      - |

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
| wuss-class-cell    | 无   |
| wuss-class-hd      | 无   |
| wuss-class-left    | 无   |
| wuss-class-right   | 无   |
| wuss-class-content | 无   |
| wuss-class-ft      | 无   |
| wuss-class-left    | 无   |
