[button官方]: https://developers.weixin.qq.com/miniprogram/dev/component/button.html

## Button 按钮

点击后会触发一个操作。

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-button": "path/to/w-button/index",
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/button.mp4"
/>


### 代码演示

按钮类型

支持 `default`、`info`、`warn`、`danger` 四种类型，默认为 `default`

```html
<w-pane title="Button" desc="按钮" />

<w-pane desc="ButtonType" />

<w-button type="default">Default</w-button>
<w-button type="primary">Primary</w-button>
<w-button type="info">Info</w-button>
<w-button type="warn">Warn</w-button>
<w-button type="danger">Danger</w-button>
<w-button
 type="custom"
 styles="border-color: #b643cd!important;"
 bgColor="#b643cd"
 color="#ffffff"
>
	Custom
	Button
</w-button>

<w-pane desc="Disabled" />

<w-button disabled type="default">Default</w-button>
<w-button disabled type="info">Info</w-button>
<w-button disabled type="warn">Warn</w-button>
<w-button disabled type="danger">Danger</w-button>

<w-pane desc="Loading" />

<w-button loading="{{true}}" type="default">Default</w-button>
<w-button loading="{{true}}" type="info">Info</w-button>
<w-button loading="{{true}}" type="warn">Warn</w-button>
<w-button loading="{{true}}" type="danger">Danger</w-button>

<w-pane desc="Ghost" />

<w-button ghost type="default">Default</w-button>
<w-button ghost type="info">Info</w-button>
<w-button ghost type="warn">Warn</w-button>
<w-button ghost type="danger">Danger</w-button>

<w-pane desc="Dashed" />

<w-button
 ghost
 dashed
 type="default"
>
	Default
</w-button>
<w-button
 ghost
 dashed
 type="info"
>
	Info
</w-button>
<w-button
 ghost
 dashed
 type="warn"
>
	Warn
</w-button>
<w-button
 ghost
 dashed
 type="danger"
>
	Danger
</w-button>

<w-pane desc="Icon" />

<w-button
 icon="android"
 styles="border-color: #99ddcc!important;"
 iconColor="#ffffff"
 bgColor="#99ddcc"
 color="#ffffff"
>
	Android
</w-button>
<w-button
 icon="edit"
 iconColor="#ffffff"
 type="info"
>
	Edit
</w-button>
<w-button
 icon="refresh"
 iconColor="#ffffff"
 type="warn"
>
	Reload
</w-button>
<w-button
 icon="apple"
 iconColor="#ffffff"
 type="danger"
>
	Apple
</w-button>

<w-pane desc="Flat" />

<w-button type="warn">NO Flat</w-button>
<w-button flat type="info">Flat</w-button>

<w-pane desc="Full" />

<w-button type="warn">NO Full</w-button>
<w-button full type="info">Full</w-button>

<w-pane desc="Display" />

<w-button type="warn">Block</w-button>
<w-button inline type="info">Inline</w-button>

<w-pane desc="In Cell Circle" />

<w-cell-group>
	<w-cell
	 direction="flex-start"
	 is-link
	 highlight
	>
		<w-button
     circle
		 inline
		 slot="content"
		 type="warn"
		>
			btn1
		</w-button>

		<w-button
     circle
		 inline
		 slot="content"
		 type="warn"
		>
			btn2
		</w-button>
		<w-button
     circle
		 inline
		 slot="content"
		 type="warn"
		>
			btn3
		</w-button>
		<w-button
     circle
		 inline
		 slot="content"
		 type="warn"
		>
			btn4
		</w-button>
	</w-cell>
</w-cell-group>


<w-pane desc="OpenType" />
<w-button circle type="info" open-type="getUserInfo" bindgetuserinfo="change">getUserInfo</w-button>
<w-button circle type="info" open-type="getPhoneNumber" bindgetPhoneNumber="change">getPhoneNumber</w-button>
```

```css
.w-button-hover-class {
 background-color: #a93cbe!important;
}
```

### API

#### 属性


| 属性 |    说明    |  类型  | 默认值 |
| ---- | :--------: | :----: | -----: |
| disabled | 禁用按钮 | boolean | false |
| loading | 设置loading状态 | boolean | false |
| formType | 处理表单类型，可选值为 [submit|reset] | string | - |
| ghost | 幽灵按钮 | boolean | false |
| dashed | 虚线 | boolean | false |
| icon | 添加按钮图标 | string | - |
| iconColor | 按钮图标颜色 | string | #333333 |
| iconSize | 按钮图标大小 | number | - |
| openType | 设置开放数据, 可选值为 [contact|share|getUserInfo|openSetting|feedback] | string | - |
| appParameter | 打开 APP 时，向 APP 传递的参数 | string | - |
| type | 按钮样式类型，可选值为 [default,primary,info,warn,danger,custom] | string | default |
| styles | 按钮的自定义样式 | string | - |
| color | 自定义按钮颜色 | string | - |
| bgColor | 自定义背景颜色 | string | - |
| flat | 开启按钮扁平化 | boolean | false |
| full | 撑满容器 | boolean | false |
| inline | 行内块按钮 | boolean | false |
| circle | 按钮显示为椭圆形 | boolean | false |

#### 事件

| 事件名     | 说明                                   | 参数 |
| ---------- | -------------------------------------- | ---- |
| onClick | 点击按钮且按钮状态不为加载或禁用时触发 | -    |
| onError | 点击操作失败时触发,例如openType为getUserInfo时若授权失败则进入回调 | -    |


#### slot

| 名称 | 说明       |
| ---- | ---------- |
| slot    | 自定义内容 |

#### 自定义类名

| 类名                    | 说明                  |
| ----------------------- | --------------------- |
| wuss-class              | 根节点样式类          |
| wuss-button-hover-class | button 的 hover-class |
