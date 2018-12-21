# Scrollable Tab View 可滚动视图

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-scrollable-tab-view": "wuss-weapp/w-scrollable-tab-view/index",
  "w-cell": "wuss-weapp/w-cell/index",
  "w-cell-group": "wuss-weapp/w-cell-group/index",
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/scrollable-tab-view.mp4"
/>



### 代码演示

```html
<w-scrollable-tab-view
 bind:onChange="handleScrollableChange"
 options="{{ options }}"
 tabsLineSize="1"
 tabsActiveColor="#ff9900"
>
	<scroll-view
	 scroll-y
	 wx:for="{{ options }}"
	 wx:key="{{ index }}"
	 slot="{{ item }}"
	 class="w-scrollable-tab-view-container"
	>
		<w-cell-group>
			<w-cell
			 highlight
			 wx:for="{{ 30 }}"
			 wx:key="child"
			 wx:for-index="child"
			 wx:for-item="childItem"
			 label="列表 {{ child+1 }}"
			 content="你好，我是{{ item }}页面"
			/>
		</w-cell-group>
	</scroll-view>
</w-scrollable-tab-view>
```

```javascript
data: {
  options: ['关注','推荐','热榜','视频'],
}
```

```css
page {
  padding: 0;
  margin: 0;
}
.w-scrollable-tab-view-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}
```

### API

#### Attribute 属性

| 属性 |    说明    |  类型  | 默认值 |
| ---- | :--------: | :----: | -----: |
| options | 传入的选项组： { containerName, containerHeight }  支持array-keys形式传参 | array |     []] |
| height | 固定每个容器的高度 | number |      - |
| width | 固定每个容器的高度 | number |      - |
| currentIndex | 设置当前激活的索引 | number |      - |
| defaultIndex | 设置初始化索引 | number |     0 |

#### Event 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| onChange | 视图容器切换时触发的回调 | - |
| onAnimationFinish | 视图容器切换待动画完成时触发的回调 | - |

#### Slot 插槽

| 名称 | 说明 |
| ---- | ---- |
| slot | 设置为options对应字段containerName的slot名字 |


#### Class 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
