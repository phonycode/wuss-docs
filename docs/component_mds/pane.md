# Pane 窗格

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-pane": "wuss-weapp/w-pane/index",
}
```

### 图片演示

<img style="margin: 20px 0;" height="450px" src="../../resource/pane.jpg"/>



### 代码演示

```html
<w-pane title="Pane" desc="窗格" />
<view style="margin: 10px 0;text-align:center;">
	demo demo
</view>
<w-pane title="Title" desc="description" />
<view style="margin: 10px 0;text-align:center;">
	demo demo
</view>
<w-pane desc="description" />
```

```javascript
-
```

```css
-
```

### API

#### Attribute 属性

| 属性 |    说明    |  类型  | 默认值 |
| ---- | :--------: | :----: | -----: |
| title | 标题 | string | - |
| desc | 描述 | string | - |
| tsize | 标题文字大小 | number | 18 |
| dsize | 描述文字大小 | number | 14 |

#### Event 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |



#### Slot 插槽

| 名称 | 说明 |
| ---- | ---- |


#### Class 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
