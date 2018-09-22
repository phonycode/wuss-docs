# Badge 徽章

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-badge": "path/to/w-badge/index",
}
```

### 代码演示

```html
<w-pane title="Badge" desc="徽章" />

<view bindtap="a">

	<w-pane desc="显示数量徽章" />
	<view class="wuss-class-round">
		<w-badge catchtap="topR" value="99" ></w-badge>
	</view>

	<w-pane desc="显示数量徽章 max 属性设置最大值" />
	<view class="wuss-class-round">
		<w-badge catchtap="topR" max="99" value="100" ></w-badge>
	</view>

	<w-pane desc="icon数量徽章" />
	<view class="wuss-class-icon">
		<w-icon
			type="home"
			size="36px"
			color="#333333"
		/>
		<w-badge catchtap="topR" type="info" icon="android" value="3" ></w-badge>
	</view>

	<w-pane desc="徽章 自定义类型" />
	<view class="wuss-class-round">
		<w-badge catchtap="topR" styles="line-height:15px;">hot</w-badge>
	</view>

	<w-pane desc="徽章 圆点型" />
	<view class="wuss-class-round">
		<w-badge catchtap="topR" styles="background:red;" type="round"></w-badge>
	</view>

</view>
```

### API

#### 属性

| 属性      |                                   说明                                    |     类型      | 默认值 |
| --------- | :-----------------------------------------------------------------------: | :-----------: | -----: |
| icon      |                               添加按钮图标                                |    string     |      - |
| iconColor |                                                                           |    string     |      - |
| iconSize  |                                                                           |    string     |      - |
| openType  | 设置开放数据,可选值为[contact\|share\|getUserInfo\|openSetting\|feedback] |    string     |      - |
| type      |                         按钮样式类型，可选值为[]                          |    string     |      - |
| bgColor   |                              自定义背景颜色                               |    string     |      - |
| color     |                              自定义按钮颜色                               |    string     |      - |
| styles    |                             按钮的自定义样式                              |    string     |      - |
| inline    |                                                                           |    boolean    |      - |
| max       |                                  最大值                                   | number,string |      - |
| value     |                                                                           | number,string |      - |

#### 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |


#### slot

| 名称 | 说明 |
| ---- | ---- |


#### 自定义类名

| 类名                    | 说明         |
| ----------------------- | ------------ |
| wuss-class              | 根节点样式类 |
| wuss-button-hover-class | 无           |
