# Switch 开关

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-switch": "path/to/w-switch/index",
}
```

### 图片演示

<img style="margin: 20px 0;" height="450px" src="../../resource/switch.jpg"/>



### 代码演示

```html
<w-pane label="Switch" desc="开关" />

<w-cell-group>
	<w-cell label="Default">
		<w-switch
		 slot="content"
		 value="{{ value }}"
		 bind:onChange="handleChange"
		/>
	</w-cell>

	<w-cell label="Size = small">
		<w-switch
		 slot="content"
		 value="{{ value }}"
		 size="small"
		 bind:onChange="handleChange"
		/>
	</w-cell>

	<w-cell label="Size = default">
		<w-switch
		 slot="content"
		 value="{{ value }}"
		 size="default"
		 bind:onChange="handleChange"
		/>
	</w-cell>

	<w-cell label="Size = larger">
		<w-switch
		 slot="content"
		 value="{{ value }}"
		 size="larger"
		 bind:onChange="handleChange"
		/>
	</w-cell>

	<w-cell label="Color = 1c75f3" labelSpan="5">
		<w-switch
		 slot="content"
		 value="{{ value }}"
		 color="#1c75f3"
		 bind:onChange="handleChange"
		/>
	</w-cell>

	<w-cell label="Color = 28a2f3" labelSpan="5">
		<w-switch
		 slot="content"
		 value="{{ value }}"
		 color="#28a2f3"
		 bind:onChange="handleChange"
		/>
	</w-cell>

	<w-cell label="Color = ff8800" labelSpan="5">
		<w-switch
		 slot="content"
		 value="{{ value }}"
		 color="#ff8800"
		 bind:onChange="handleChange"
		/>
	</w-cell>

	<w-cell label="Color = e42112" labelSpan="5">
		<w-switch
		 slot="content"
		 value="{{ value }}"
		 color="#e42112"
		 bind:onChange="handleChange"
		/>
	</w-cell>

	<w-cell label="Disabled">
		<w-switch
		 slot="content"
		 disabled
		 value
		 color="#1c75f3"
		/>
	</w-cell>

</w-cell-group>
```

### API

#### 属性

| 属性     |              说明               |  类型   | 默认值 |
| -------- | :-----------------------------: | :-----: | -----: |
| size     | 大小,可选[small/default/larger] | string  |      - |
| value    |                                 | boolean |  false |
| color    |       颜色，激活后的颜色        | string  |      - |
| disabled |            是否禁用             | boolean |  false |

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
