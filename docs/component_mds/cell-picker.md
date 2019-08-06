# CellPicker 选择器

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-cell-picker": "wuss-weapp/w-cell-picker/index",
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/cell-picker.mp4"
/>


### 代码演示

```html
<w-cell-group>
	<w-cell-picker
	 label="多选联动模式"
	 options="{{ options1 }}"
	 title="请选择地区"
	 defaultValue="{{ ['440000', '440100', '440105'] }}"
   bind:onSelect="handleSelect"
	/>
  <w-cell-picker
	 label="单选模式"
	 title="请选择性别"
	 options="{{ options2 }}"
	 defaultValue="女"
   shouldValueUpdate="{{ shouldValueUpdate }}"
   bind:onSelect="handleSelect"
	/>
  <w-cell-picker
	 label="单选模式2"
	 title="请选择续费时间"
	 options="{{ options4 }}"
   defaultValue="60"
   bind:onSelect="handleSelect"
	/>
  <w-cell-picker
	 label="多选联动模式"
   placeholder="请选择语言"
	 options="{{ options3 }}"
   defaultValue="{{ ['1', '4'] }}"
   currentValue="{{ currentValue }}"
	 title="请选择语言"
   bind:onSelect="handleSelect"
  />
</w-cell-group>
```

```javascript
data: {
  options2: ['男', '女'],
  options4: [{ key: '30天', value: 30 },{ key: '60天', value: 60 },{ key: '90天', value: 90 },{ key: '1年', value: 365 },{ key: '10年', value: 3650 },],
  options3: [
    [{
        key: '前端',
        value: '0'
      },
      {
        key: '后端',
        value: '1'
      },
    ],
    [{
        key: 'Javascript',
        value: '2',
        parent: '0'
      },
      {
        key: 'css3',
        value: '3',
        parent: '0'
      },
      {
        key: 'html5',
        value: '4',
        parent: '0'
      },
      {
        key: 'Java',
        value: '5',
        parent: '1'
      },
      {
        key: 'PHP',
        value: '6',
        parent: '1'
      },
      {
        key: 'Python',
        value: '7',
        parent: '1'
      },
    ],
  ],
},
```

### API

#### Attribute 属性

| 属性         | 说明 |  类型   | 默认值 |
| ------------ | :--: | :-----: | -----: |
| options      |  传入的选项值,当值为[[],[],[]]格式时为联动模式,传入格式为[{},{},{}]为单例模式  | Array | [] |
| options.key   |  options里的对象属性key表示键值,显示在picker上的值  | String | - |
| options.value |  options里的对象属性value表示值,会返回给最终结果  | String | - |
| defaultValue      |  设置picker的默认值 可以支持 key value格式（注意：defaultValue只能用来设置第一次的初始化值，后续的改变请使用currentValue设置）  | Array | [] |
| currentValue      |  动态设置picker的值.    | any | - |
| cancelTextColor      |  取消文本颜色    | String | - |
| cancelText      |  取消文本文字    | String | '取消' |
| title      |  标题    | String | [] |
| confirmTextColor      |  确认文本颜色    | String | - |
| confirmText      |  确认文本文字    | String | '确认' |
| showValue      |  是否用value而不是key展示    | Boolean | false |
| defaultKey      |  onChange和onSelect事件返回的值是何种格式 [value,value...] [key,key,...]    | String | 'value' |

#### Event 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| onChange      |   picker值改变时触发   | e.detail.value |
| onSelect      |  点击确认时触发    | e.detail.value |
| onOpen      |  popup弹出时触发    | - |
| onCancel      |  popup收起时触发    | - |


#### Slot 插槽

| 名称 | 说明 |
| ---- | ---- |


#### Class 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
