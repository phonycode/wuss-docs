# Checkbox 复选框

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-checkbox": "path/to/w-checkbox/index",
}
```

### 图片演示

<img style="margin: 20px 0;" height="450px" src="../../resource/checkbox.jpg"/>



### 代码演示

```html
<w-pane title="Checkbox" desc="复选框" />

<w-pane desc="Default" />
<w-cell-group>
	<w-checkbox options="{{ items1 }}" bind:onChange="handleChange" />
</w-cell-group>

<view>{{ items1Str }}</view>

<w-pane desc="Disabled" />
<w-cell-group>
	<w-checkbox options="{{ items2 }}" bind:onChange="handleChange" />
</w-cell-group>

<w-pane desc="Directon" />
<w-cell-group>
	<w-checkbox
	 direction="right"
	 options="{{ items1 }}"
	 bind:onChange="handleChange"
	/>
</w-cell-group>

<w-pane desc="IconType" />
<w-cell-group>
	<w-checkbox
   icon-type="circle"
	 direction="right"
	 options="{{ items1 }}"
	 bind:onChange="handleChange"
	/>
  <w-checkbox
   icon-type="box"
	 direction="right"
	 options="{{ items1 }}"
	 bind:onChange="handleChange"
	/>
  <w-checkbox
   icon-type="check"
	 direction="right"
	 options="{{ items1 }}"
	 bind:onChange="handleChange"
	/>
</w-cell-group>


<w-pane desc="ArrayKeys" />
<w-cell-group>
	<w-checkbox
	 direction="right"
	 options="{{ items3 }}"
	 bind:onChange="handleChange"
	/>
</w-cell-group>
```

```javascript
const MOCK_DATA = {
  productName: 'iphone X max',
  total: 1,
  num: 642135,
  id: 2143324234,
  price: 12700.0,
  desc: 'iphone is good',
};
data: {
  items1Str: '',
  items1: [
    {
      text: '复选框1',
      ...MOCK_DATA,
    },
    {
      text: '复选框2',
      ...MOCK_DATA,
    },
    {
      text: '复选框3',
      ...MOCK_DATA,
    },
  ],
  items2: [
    {
      text: '复选框1',
      ...MOCK_DATA,
    },
    {
      text: '复选框2',
      ...MOCK_DATA,
      disabled: true,
    },
    {
      text: '复选框3',
      ...MOCK_DATA,
    },
  ],
  items3: ['测试1','测试2','测试3','测试4','测试5'],
},
handleChange(e) {
  console.log(e.detail.checked)
  this.setData({ items1Str: JSON.stringify(e.detail.checked) });
},
```

### API

#### 属性

| 属性      |            说明            |  类型   | 默认值 |
| --------- | :------------------------: | :-----: | -----: |
| color     |            颜色            | string  |      - |
| disabled  |            禁用            | boolean |  false |
| title     |            标题            | string  |      - |
| direction | 方向，可选值有[left/right] | string  |      - |
| options   |                            |  array  |     [] |

#### 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| onChange | 勾选点击改变值时触发 | e.detail.value |


#### slot

| 名称 | 说明 |
| ---- | ---- |


#### 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
