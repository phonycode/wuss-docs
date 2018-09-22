## Alert 弹出框

弹出提示

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
   "w-alert":"path/to/w-alert/index",
    "w-button":"path/to/w-button/index",
    "w-pane":"path/to/w-pane/index"
}
```

### 代码演示

```html
<w-pane title="Alert" desc="弹出框" />

<w-pane desc="Default" />
<w-button bind:click="handleClick" type="info">Default</w-button>

<w-pane desc="ButtonColor" />
<w-button bind:click="handleClick2" type="info">ButtonColor</w-button>

<w-pane desc="MoreText" />
<w-button bind:click="handleClick3" type="info">MoreText</w-button>


<w-alert id="wuss-alert" />
```

### API

#### 属性

| 属性 | 说明 | 类型 | 默认值 |
| ---- | :--: | :--: | -----: |


#### 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
