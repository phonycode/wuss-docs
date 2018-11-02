# Accordion 手风琴

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-accordion": "path/to/w-accordion/index",
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/accordion.mp4"
/>



### 代码演示

```html
<w-pane title="Accordion" desc="手风琴" />

<w-pane desc="Default" />

<w-accordion-group bind:onChange="onChange" bind:disabledClick="disabledClick">

	<w-accordion title="Wuss WeAPP 1" key="你好">
		content 1
	</w-accordion>
	<w-accordion title="Wuss WeAPP 2" key="{{['你好']}}">
		content 2
	</w-accordion>
	<w-accordion
	 disabled
	 title="Wuss WeAPP 3"
	 key="我是被禁用的"
	/>
	<w-accordion title="Wuss WeAPP 4" key="{{ {say:'你好'} }}">
		content 4
	</w-accordion>
</w-accordion-group>

<w-pane desc="Accordion = true" />

<w-accordion-group
 bind:onChange="onChange"
 accordion
 bind:disabledClick="disabledClick"
>

	<w-accordion title="Wuss WeAPP 1" key="你好">
		content 1
	</w-accordion>
	<w-accordion title="Wuss WeAPP 2" key="{{['你好']}}">
		content 2
	</w-accordion>
	<w-accordion
	 disabled
	 title="Wuss WeAPP 3"
	 key="我是被禁用的"
	/>
	<w-accordion title="Wuss WeAPP 4" key="{{ {say:'你好'} }}">
		content 4
	</w-accordion>
</w-accordion-group>
```

```javascript
onChange(e) {
  console.log(e.detail);
},
disabledClick(e) {
  console.log(e.detail);
},
```

```css
```

### API

#### 属性

| 属性 |    说明    |  类型  | 默认值 |
| ---- | :--------: | :----: | -----: |
| key | 携带的数据 | string | null |
| title | 标题 | string | - |
| disabled | 是否开启禁用 | boolean | - |

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
