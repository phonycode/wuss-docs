# Input 输入框

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-input": "path/to/w-input/index",
}
```

### 代码演示

```html
<!--pages/w-input/index.wxml-->
<w-pane title="Input" desc="输入框" />
<w-pane desc="textarea" />
<w-cell-group>
	<w-input
	 clear
	 count="100"
	 type="textarea"
	 placeholder="输入"
	/>

</w-cell-group>

<w-pane desc="extra" />
<w-cell-group>
	<w-input
	 extra="￥"
	 bindextraClick="extraClick"
	 placeholder="00"
	 label="金额"
	/>

</w-cell-group>

<w-pane desc="Format" />
<w-cell-group>
	<w-input
	 type="phone"
	 bindblur="iBlur"
	 placeholder="请输入你的手机号"
	 label="手机号"
	/>
	<w-input
	 type="bankCard"
	 label="银行卡"
	 placeholder="请输入银行卡号"
	/>
	<w-input
	 type="password"
	 label="密码"
	 placeholder="请输入你的密码"
	/>
</w-cell-group>
<w-pane desc="受控" />
<w-cell-group>
	<w-input
	 bindchange="iChange"
	 label="标题"
	 placeholder="随意输入"
	/>
</w-cell-group>
<w-pane desc="clear清空" />
<w-cell-group>
	<w-input
	 bindchange="iChange"
	 placeholder="随意输入"
	 label="标题"
	 clear
	>
	</w-input>
</w-cell-group>
<w-pane desc="readOnly and disabled" />
<w-cell-group>
	<w-input
	 disabled
	 readOnly
	 value="我是值只读"
	 placeholder="只读"
	 label="标题"
	/>
	<w-input
	 disabled
	 label="标题"
	 placeholder="我被禁用了"
	/>
</w-cell-group>
<w-pane desc="focus" />
<w-cell-group>
	<w-input
	 type="text"
	 focus="{{ focus }}"
	 bindfocus="iFocus"
	 placeholder="click button below to foucus"
	 label="标题"
	/>

</w-cell-group>

<w-button type="info" bind:click="handleFocus">click to Focus</w-button>
```

### API

#### 属性

| 属性               | 说明 |  类型   | 默认值 |
| ------------------ | :--: | :-----: | -----: |
| value              |      | string  |      - |
| type               |      | string  |      - |
| disabled           |      | boolean |      - |
| maxlength          |      | number  |      - |
| placeholder        |      | string  |      - |
| placeholderStyle   |      | string  |      - |
| placeholderClass   |      | string  |      - |
| cursor             |      | number  |      - |
| cursorSpacing      |      | number  |      - |
| focus              |      | boolean |      - |
| selectionStart     |      | number  |      - |
| selectionEnd       |      | number  |      - |
| adjustPosition     |      | boolean |      - |
| rows               |      | number  |      - |
| autoHeight         |      | boolean |      - |
| fixed              |      | boolean |      - |
| label              |      | string  |      - |
| moneyKeyboardAlign |      | string  |      - |
| labelSpan          |      | number  |      - |
| extra              |      | string  |      - |
| clear              |      | boolean |      - |
| count              |      | number  |      - |
| readOnly           |      | boolean |      - |

#### 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |


#### slot

| 名称 | 说明 |
| ---- | ---- |


#### 自定义类名

| 类名                  | 说明 |
| --------------------- | ---- |
| wuss-class            | 无   |
| wuss-class-label      | 无   |
| wuss-class-input-wrap | 无   |
| wuss-class-input      | 无   |
