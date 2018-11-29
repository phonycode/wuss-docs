# Range 进度条

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-range": "path/to/w-range/index",
}
```

### 图片演示

<img style="margin: 20px 0;" height="450px" src="../../resource/range.jpg"/>



### 代码演示

```html
<view class="range">
	<w-range bindonChange="onChange" bindafterChange="afterChange" />
</view>

<w-pane desc="Disabled" />

<view class="range">
	<w-range disabled />
</view>

<w-pane desc="Custom Style" />
<view class="range">
	<w-range
	 bindonChange="onChange"
	 bindafterChange="afterChange"
	 handleStyle="{{['background-color:red;border-color:gray;','background-color:green;border-color:#fe961c;']}}"
	 trackStyle="background-color:pink;"
	 railStyle="background-color:#000;"
	/>
</view>
```

```javascript
onChange(e) {
  console.log('onChange:  ' + e.detail.value);
},
afterChange(e) {
  console.log('afterChange:  ' + e.detail.value);
},
```

```css
.range {
  width: 80%;
  margin: 0 auto 35px;
}
```

### API

#### 属性

| 属性 |    说明    |  类型  | 默认值 |
| ---- | :--------: | :----: | -----: |
| max | 最大值 | number | 100 |
| min | 最小值 | number | 0 |
| step | 一步最低多少 | number | 1 |
| value |  默认的value | array | [25,75] |
| trackStyle | 被选中的范围线条的样式 | string | - |
| railStyle | 未被选中范围线条的样式 | string | - |
| handleStyle | 按钮的样式 | string | ['',''] |
| disabled | 是否禁用 | boolean | false |

#### 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| afterChange | 值改变之前的回调 | e.detail.value |
| onChange | 值改变之后的回调 | e.detail.value |



#### slot

| 名称 | 说明 |
| ---- | ---- |


#### 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
