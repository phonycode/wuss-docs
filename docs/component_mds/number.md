# Number 步进器

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-number": "path/to/w-number/index",
}
```

### 图片演示

<img style="margin: 20px 0;" height="450px" src="../../resource/number.jpg"/>



### 代码演示

```html
<w-pane title="Number" desc="计数器" />

<w-pane desc="Default" />
<w-number wuss-class="w-number" />

<w-pane desc="DefaultValue = 1000" />
<w-number wuss-class="w-number" defaultValue="1000" />

<w-pane desc="Min = 10,Max = 100" />
<w-number
 wuss-class="w-number"
 max="100"
 min="10"
/>

<w-pane desc="Width = 150" />
<w-number
 width="150"
 default-value="233333333"
 wuss-class="w-number"
/>

<w-pane desc="Steps = 10" />
<w-number
 default-value="100"
 steps="10"
 wuss-class="w-number"
/>

<w-pane desc="buttonType = circle" />
<w-number
 default-value="100"
 button-type="circle"
 wuss-class="w-number"
/>

<w-pane desc="Fillable" />
<w-number
 fillable="{{ false }}"
 default-value="100"
 wuss-class="w-number"
/>

<w-pane desc="Disabled" />
<w-number disabled wuss-class="w-number" />

<w-pane desc="In Cell" />
<w-cell-group>
	<block wx:for="{{ items }}" wx:key="item">
		<w-cell label="{{ item }}">
			<w-number
			 slot="content"
			 button-type="circle"
			 default-value="{{ index }}"
			 max="1000"
			/>
		</w-cell>
	</block>
</w-cell-group>
```

```javascript
data: {
  items: ['娃娃菜', "牛肉脯", "鸡柳", "酸菜鱼", "卤蛋", "鱼豆腐", "章鱼丸", "空心菜", "猪血", "番茄", "黄瓜", "鸭肠", "牛杂"],
},
```

```css
.w-number {
  margin: 15px;
}
```

### API

#### 属性

| 属性 |    说明    |  类型  | 默认值 |
| ---- | :--------: | :----: | -----: |
| defaultValue | 当前默认值 | number | 0 |
| max | 最大值 | number | Infinity |
| min | 最小值 | number | 0 |
| width | 当前输入框宽度 | number | 35 |
| steps | 步进数 | number | 1 |
| fillable | 是否可填写 | boolean | true |
| buttonType | 按钮样式，可选[box/circle] | string | box |
| disabled | 禁用 | boolean | false |

#### 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| onChange | 改变值后的回调 | e.detail.value |



#### slot

| 名称 | 说明 |
| ---- | ---- |


#### 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
