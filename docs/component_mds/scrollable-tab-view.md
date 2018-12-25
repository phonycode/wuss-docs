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



### 代码演示 Demo1 配合w-tabs使用

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
			 wx:for="{{ 20 }}"
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









### 代码演示 Demo2 配合w-segmented-control使用

```html
<w-scrollable-tab-view
 bind:onChange="handleScrollableChange"
 render-tab-bar="segmented-control"
 options="{{ options }}"
>
	<scroll-view
	 scroll-y
	 wx:for="{{ options }}"
	 wx:key="{{ index }}"
	 class="w-scrollable-tab-view-container"
	 slot="{{ item }}"
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
},
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
| options | 传入的选项组,支持array-keys模式 [a,b,c,d,e] or [{ name icon iconSize iconColor height width }] | Array |  [] |
| height | 全局pageview高度 | Number |  100% |
| width | 全局pageview宽度 | Number |  100% |
| renderTabBar | 渲染何种tabBar: [tabs/segmented-control] | String |  tabs |
| currentIndex | 当前激活的索引 | Number |  0 |
| defaultIndex | 默认值 | Number |  0 |
| tabsTransition | tab是否开启过渡动画 | Boolean |  true |
| tabsLine | 是否开启bar线条 | Boolean |  true |
| tabsLineSize | 线条长度，范围[0-1] | Number |  0.5 |
| tabsBorder | 开启bar的border | Boolean | true |
| tabsBorderColor | bar的border颜色 | String |  #eeeeee |
| tabsBorderSize | bar的border大小 | String |  2 |
| tabsDuration | bar的过渡动画时间 | Number |  0.2 |
| tabsActiveColor | 激活颜色 | String |  rgb(69, 143, 246) |
| tabsTextStyles | bar文本的额外的样式 | String |  [style] |
| tabsFixed | bar定位 | Boolean |  false |
| tabsItemThreshold | 当tab页面个数大于几个时开启左右滚动 | Number |  4 |
| tabsDisabled | 禁用bar | Boolean |  false |
| tabsDefaultIndex | bar的默认索引 | Number |  0 |
| tabsStyles | bar额外的样式 | String |  [style] |

#### Event 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| onChange | 视图容器切换时触发的回调 | - |
| onAnimationFinish | 视图容器切换待动画完成时触发的回调 | - |

#### Slot 插槽

| 名称 | 说明 |
| ---- | ---- |
| slot | 设置为options对应字段name的slot名字 |


#### Class 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
