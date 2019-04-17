# DropMenu 下拉菜单

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-drop-menu": "wuss-weapp/w-drop-menu/index",
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/drop-menu.mp4"
/>



### 代码演示

```html
<w-drop-menu options="{{  options  }}" bind:onChange="handleChange">
	<w-cell-group slot="filter">
		<w-radio color="#ff9900" options="{{  radioOptions  }}" />
		<w-checkbox icon-type="box" options="{{ checkboxOptions }}" />
		<w-cell label="我已阅读条款">
			<w-switch color="#ff9900" slot="content" />
		</w-cell>
		<w-button
		 flat
		 full
		 type="warn"
		>确定
		</w-button>
	</w-cell-group>
</w-drop-menu>
```

```javascript
data: {
  options: [{
      text: '最高评分',
      type: 'sort',
    },
    {
      text: '风格',
      type: 'radio',
      options: [{
          text: '全部',
        },
        {
          text: '原创',
        },
        {
          text: '漫改',
        },
        {
          text: '轻改',
        },
        {
          text: '游戏改',
        },
        {
          text: '动态漫',
        },
        {
          text: '布袋戏',
        },
        {
          text: '热血',
        },
        {
          text: '奇幻',
        },
        {
          text: '战斗',
        },
        {
          text: '搞笑',
        },
        {
          text: '日常',
        },
        {
          text: '科幻',
        },
        {
          text: '萌系',
        },
        {
          text: '治愈',
        },
        {
          text: '校园',
        },
      ],
    },
    {
      text: '类型',
      type: 'checkbox',
      options: [{
          text: '国产',
        },
        {
          text: '正片',
        },
        {
          text: '剧场版',
        },
        {
          text: '日本动漫',
        },
        {
          text: '其他',
        },
      ],
    },
    {
      text: '筛选',
      type: 'filter',
      slotName: 'filter',
    },
  ],
  radioOptions: ["全部", "正片", "剧场版", "其他"],
  checkboxOptions: ["免费","付费","大会员"],
},
handleChange(e) {
  console.log(e);
},
```

### API 

#### Attribute 属性

| 属性      | 说明 | 类型  | 默认值 |
| --------- | :--: | :---: | -----: |
| options |  父组件传递过来的菜单数组对象, 参数有: text,show,highlight,options  | array |  - |
| options.type |  筛选栏类型[radio/checkbox/filter/sort/custom]  | string |  - |
| defaultColor |  默认颜色  | string |  999999 |
| activeColor |  激活颜色  | string | ff8800 |
| height |  bar的高度  | string, number |  88rpx |
| border |  显示底部线条  | boolean |  true |
| popupStyles |  弹出层的样式  | string |  - |

#### Event 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| onChange | 筛选条件选中或改变时的回调     | event |    e.detail  |


#### Slot 插槽

| 名称 | 说明 |
| ---- | ---- |
| filter |  当options的item type为filter并且定义了slotName时为对应组件的slot名称    | - |      - |

#### Class 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
