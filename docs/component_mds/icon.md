# Icon 图标

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-icon": "path/to/w-icon/index",
}
```

### 代码演示

```html
<w-pane title="Icon" desc="图标" />

<w-pane desc="Default" />

<scroll-view class="wuss-icon-example" scroll-y="true" >
	<view
	 class="wuss-icon-items"
	 hover-class="none"
  hover-stop-propagation="false"
  catchtap="copyIconName"
  data-name="{{ item.name }}"
	 wx:for="{{ iconData }}"
	 wx:key="index"
	>
		<w-icon
		 type="{{ item.name }}"
   />
   <text class="wuss-icon-text" >{{ item.text }}</text>
	</view>
</scroll-view>
```

### API

#### 属性

| 属性  |   说明   |  类型  | 默认值 |
| ----- | :------: | :----: | -----: |
| type  | 图标类型 | string |      - |
| size  | 图标大小 | string |      - |
| color | 图标颜色 | string |      - |

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
