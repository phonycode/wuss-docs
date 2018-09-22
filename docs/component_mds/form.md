# Form 表单

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-form": "path/to/w-form/index",
}
```

### 代码演示

```html
<w-pane title="Form" desc="表单" />
<w-form
bindsubmit="wussFormSubmit"
bindreset="wussFormReset"
isValidateBtn
>
	<w-cell-group>
		<w-validate rules="{{ { mode:['mobile'] } }}">
			<w-input
			 type="mobile"
			 name="mobile"
			 value="1311111111"
			 clear
			 placeholder="请输入你的手机号"
			 label="手机号"
			/>
		</w-validate>
		<w-validate rules="{{ userNameRules }}">
			<w-input
			 name="userName"
			 placeholder="请输入你的姓名"
			 label="姓名"
			/>
		</w-validate>
		<w-input
		 name="userName"
		 placeholder="随以输入"
		 label="test"
		/>

		<w-cell label="开启VIP模式">
			<w-switch name="isVip" slot="content" />
		</w-cell>

		<w-radio
		 label="请选择手机"
		 name="radio"
		 options="{{ options1 }}"
		/>

		<w-checkbox name="checkbox" options="{{ items1 }}" />

		<w-cell>
			<w-button
			 inline
			 type="info"
			 formType="submit"
			>
				提交
			</w-button>
			<w-button
			 inline
			 type="warn"
			 formType="reset"
			>
				重置
			</w-button>
		</w-cell>
	</w-cell-group>
</w-form>
```

### API

#### 属性

| 属性          | 说明 |  类型   | 默认值 |
| ------------- | :--: | :-----: | -----: |
| isValidateBtn |      | boolean |      - |

#### 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |


#### slot

| 名称 | 说明 |
| ---- | ---- |


#### 自定义类名

| 类名       | 说明 |
| ---------- | ---- |
| wuss-class | 无   |
