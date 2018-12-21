# Address Picker 地区联动选择器

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-address-picker": "wuss-weapp/w-address-picker/index",
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/address.mp4"
/>



### 代码演示

```html
<w-pane title="AddressPicker" desc="地区选择器" />

<w-pane desc="当前选择: {{ address }}" />

<w-cell-group>
  <w-address-picker
    label="正常使用"
    bind:onChange="handleChange"
  />
  <w-address-picker
    label="设置默认地址"
    bind:onChange="handleChange"
    defaultValue="{{ ['广东省','广州市','天河区'] }}"
  />
  <w-address-picker
    showCode
    label="传入地区Code值"
    label-span="5"
    bind:onChange="handleChange"
    defaultValue="{{ ['310000', '310100', '310115'] }}"
  />
</w-cell-group>
```

```javascript
data: {
  address: '',
},
handleChange(e) {
  console.log(e)
  this.setData({ address: e.detail.value.join(' ','') })
},
```

```css
```

### API

#### Attribute 属性

| 属性 |    说明    |  类型  | 默认值 |
| ---- | :--------: | :----: | -----: |
| label | 标签 | string | 请选择地址 |
| labelSpan | 标签所占宽度 | number | 3 |
| defaultValue | 初始化的默认值 | array | [] |
| currentValue | 设置当前激活的值 | array | [] |
| showCode | 返回的值是否是地址的code码 | boolean | false |
| disabled | 禁用 | boolean | false |
| customItem | 可为每一列的顶部添加一个自定义的项 | string | - |

#### Event 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| onChange | 改变值后的回调 | e.detail.value |
| onCancel | 取消按钮的回调 | - |



#### Slot 插槽

| 名称 | 说明 |
| ---- | ---- |


#### Class 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
