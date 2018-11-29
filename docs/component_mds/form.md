# Form 表单

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
"w-cell-group": "path/to/w-cell-group/index",
"w-cell": "path/to/w-cell/index",
"w-input": "path/to/w-input/index",
"w-checkbox": "path/to/w-checkbox/index",
"w-button": "path/to/w-button/index",
"w-form": "path/to/w-form/index",
"w-switch": "path/to/w-switch/index",
"w-radio": "path/to/w-radio/index",
"w-validate": "path/to/w-validate/index",
"w-pane": "path/to/w-pane/index"
}
```

### 表单域
只要表单组件包裹在w-form表单里，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。
```html
<w-form 
  bind:onSubmit="通过onSubmit事件采集form表单域中的表单数据" 
  bind:onReset="重置表单域中的所有数据" 
>
  里面可以放各种表单组件
  需要收集的表单组件一定要加name属性，不然form不会收集没有name字段的数据
  <w-input name="input" />
  <w-checkbox name="input"/>
  表单按钮可以指定属性[form-type]来触发w-form表单的submit事件进行采集数据
  <w-button formType="submit"/>
  <w-button formType="reset"/>

  w-validate是表单的校验组件，在需要校验组件的外边加上w-validate组件可以对该组件进行校验，
  w-validate内置了常用的校验规则，用户也可自定义规则
  <w-validate rules="{{ { required: { value: true, message: '必填'} } }">
    <w-input name="validateInput" />
  </w-validate>
  <w-switch />
  <w-radio />
</w-form>
```

### 代码演示

```html
<w-pane title="Form" desc="表单" />
<w-form bind:onSubmit="wussFormSubmit" bind:onReset="wussFormReset" isValidateBtn>
  <w-cell-group>

    <w-validate rules="{{ userNameRules }}">
      <w-input name="userName" placeholder="请输入你的姓名" clear label="姓名" />
    </w-validate>

    <w-validate rules="{{ { mode:['mobile'] } }}">
      <w-input type="mobile" name="mobile" clear placeholder="请输入你的手机号" label="手机号" />
    </w-validate>

    <w-validate rules="{{ isRequired }}">
      <w-cell-picker label="性别" title="请选择性别" placeholder="请选择性别" options="{{ [['男','女']] }}" name="sex" />
    </w-validate>

    <w-validate rules="{{ isRequired }}">
      <w-address-picker label="选择地区" name="region" />
    </w-validate>

    <w-validate rules="{{ isRequired }}">
      <w-input clear type="textarea" label="地址" name="address" placeholder="请输入详细地址..." />
    </w-validate>

    <w-cell label="同意用户协议信息">
      <w-switch name="isVip" slot="content" />
    </w-cell>

    <w-radio label="请选择手机" name="radio" defaultValue="huawei" options="{{ options1 }}" />

    <w-checkbox name="checkbox" options="{{ items1 }}" />

    <w-cell>
      <w-button inline type="info" formType="submit">
        提交
      </w-button>
      <w-button inline type="warn" formType="reset">
        重置
      </w-button>
    </w-cell>
  </w-cell-group>
</w-form>
```

```javascript
const MOCK_DATA = {
  productName: 'iphone X max',
  total: 1,
  num: 642135,
  id: 2143324234,
  price: 12700.0,
  desc: 'iphone is good',
};
data: {
  userNameRules: {
    maxLength: {
      value: 6,
      message: '姓名最多6个字',
    },
    minLength: {
      value: 3,
      message: '姓名最少三个字',
    },
  },
  isRequired: {
    required: {
      value: true,
      message: '必填',
    },
  },
  options1: [
    {
      key: '苹果',
      value: 'iphone',
    },
    {
      key: '华为',
      value: 'huawei',
    },
    {
      key: 'oppo音乐手机',
      value: 'oppo',
    },
  ],
  items1: [
    {
      text: '复选框1',
      ...MOCK_DATA,
      checked: true,
    },
    {
      text: '复选框2',
      ...MOCK_DATA,
      checked: true,
      disabled: true,
    },
    {
      text: '复选框3',
      ...MOCK_DATA,
    },
  ],
},
wussFormSubmit(e) {
  console.log('提交了:', e.detail);
},
wussFormReset(e) {
  console.log('重置了:', e.detail);
},
```


### API Form

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| ------------- | ----------------------------- | :-----: | :----: |
| isValidateBtn | 设置提交按钮跟随验证 disabled | boolean | false |

#### 事件

| 事件名 | 说明 | 参数 |
| ------ | ------------ | ---- |
| submit | 表单提交事件 | e.detail |
| reset | 表单重置事件 | e.detail |

#### slot

| 名称 | 说明 |
| ---- | -------- |
| slot | 表单组件 |

#### 自定义类名

| 类名 | 说明 |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |




#### w-validate  表单域校验组件
用于表单组件的数据校验，内置了常用规则。 用户也可自定义规则进行校验。
##### 属性

| 属性 | 说明 | 类型 | 默认值 |
| ------------- | ----------------------------- | :-----: | ----------------------------- |
| rules | 校验规则对象 | object | { required: { value: true, message: '必填' } }   |
| rules.required.value | 校验规则的值 | any | - |
| rules.required.message | 当前校验不通过时的错误提示 | String | - |


##### rules 常用校验规则 

| 参数 | 说明 | 类型 | 默认值 |
| ------------- | ---------------------------------------- | :-----: | :----: |
| mode | 常用校验模式有  [mobile / email / url / idcard] | Array | - |
| required | 是否必填 | Boolean | - |
| equalLength | 等于字符长度 | Number | - |
| maxLength | 最大字符长度 | Number | - |
| minLength | 最小字符长度 | Number | - |
| rangelength | 限制字符长度的范围 | Array | - |
| equal | 等于某值 | Number | - |
| max | 最大值 | Number | - |
| min | 最小值 | Number | - |
| range | 值的范围 | Number | - |
| regexp | 自定义校验规则正则 | Regexp | - |


#### 使用方法
```html
<w-form>
  使用mode 为mobile时，为校验手机号码
  <w-validate rules="{{ { mode: ['mobile'] } }}">
    ...
  </w-validate>

  required 必填
  <w-validate rules="{{ { required: true } }}">
    ...
  </w-validate>


  regexp 自定义校验规则
  <w-validate rules="{{ { regexp: /^1[34578]\d{9}$/ } }}">
    ...
  </w-validate>
</w-form>
```