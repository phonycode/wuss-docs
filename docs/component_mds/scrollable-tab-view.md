# Scrollable Tab View 可滚动视图

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-scrollable-tab-view": "path/to/w-scrollable-tab-view/index",
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/scrollable-tab-view.mp4"
/>



### 代码演示

```html
<view
 class="w-scrollable-tab-view-bar"
 hover-class="none"
 hover-stop-propagation="false"
>
	<w-segmented-control
	 currentIndex="{{ currentIndex }}"
   bind:onChange="handleChange"
   color="#448ef6"
	 styles="font-size: 14px;"
	 options="{{ options1 }}"
	/>
</view>

<w-scrollable-tab-view
 bind:onChange="handleScrollableChange"
 height="{{ pageHeight }}"
 currentIndex="{{ currentIndex }}"
 options="{{ options }}"
>
	<scroll-view  
	 scroll-y
	 class="w-scrollable-tab-view-container"
	 slot="关注"
	 hover-class="none"
	 hover-stop-propagation="false"
	>
		<w-cell-group>
			<w-cell
			 wx:for="{{ 30 }}"
			 wx:key="index"
			 highlight
			 label="列表 {{ index+1 }}"
			 content="你好，我是关注页面"
			/>
		</w-cell-group>
	</scroll-view>
	<scroll-view
	 scroll-y
	 class="w-scrollable-tab-view-container"
	 slot="推荐"
	 hover-class="none"
	 hover-stop-propagation="false"
	>
		<w-cell-group>
			<w-cell
			 wx:for="{{ 30 }}"
			 wx:key="index"
			 highlight
			 label="列表 {{ index+1 }}"
			 content="你好，我是推荐页面"
			/>
		</w-cell-group>
	</scroll-view>
	<scroll-view
	 scroll-y
	 class="w-scrollable-tab-view-container"
	 slot="热榜"
	 hover-class="none"
	 hover-stop-propagation="false"
	>
		<w-cell-group>
			<w-cell
			 wx:for="{{ 30 }}"
			 wx:key="index"
			 highlight
			 label="列表 {{ index+1 }}"
			 content="你好，我是热榜页面"
			/>
		</w-cell-group>
		</scroll-view>
		<scroll-view
		 scroll-y
		 class="w-scrollable-tab-view-container"
		 slot="视频"
		 hover-class="none"
		 hover-stop-propagation="false"
		>
			<w-cell-group>
				<w-cell
				 wx:for="{{ 20 }}"
				 wx:key="index"
				 highlight
				 label="列表 {{ index+1 }}"
				 content="你好，我是视频页面"
				/>
			</w-cell-group>
	</scroll-view>
</w-scrollable-tab-view>
```

```javascript
data: {
  currentIndex: 0,
  options1: ['关注','推荐','热榜','视频'],
  options: [
    {
      containerName: '关注',
    },
    {
      containerName: '推荐',
    },
    {
      containerName: '热榜',
    },
    {
      containerName: '视频',
    },
  ],
  pageHeight: 0,
},
handleScrollableChange(e) {
  this.setData({
    currentIndex: e.detail.value,
  })
},
handleChange(e) {
  this.setData({
    currentIndex: e.detail.value,
  })
},
onReady: function () {
  wx.createSelectorQuery()
  .select('.w-scrollable-tab-view-bar')
  .boundingClientRect()
  .exec(([node]) => {
    this.setData({
      pageHeight: wx.getSystemInfoSync().windowHeight - node.height,
    })
  })
},
```

```css
.w-scrollable-tab-view-container {
  width: 100%;
  height: 100%;
  /* padding: 10px 0; */
  overflow: auto;
}

.w-scrollable-tab-view-bar {
  display: block;
  overflow: hidden;
}

page {
  padding: 0;
  margin: 0;
}
```

### API

#### 属性

| 属性 |    说明    |  类型  | 默认值 |
| ---- | :--------: | :----: | -----: |
| options | 传入的选项组： { containerName, containerHeight } | array |     []] |
| height | 固定每个容器的高度 | number |      - |
| width | 固定每个容器的高度 | number |      - |
| currentIndex | 设置当前激活的索引 | number |      - |
| defaultIndex | 设置初始化索引 | number |     0 |

#### 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| onChange | 视图容器切换时触发的回调 | - |
| onAnimationFinish | 视图容器切换待动画完成时触发的回调 | - |

#### slot

| 名称 | 说明 |
| ---- | ---- |
| slot | 设置为options对应字段containerName的slot名字 |


#### 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
