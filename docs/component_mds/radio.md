# Radio 单选框

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-radio": "path/to/w-radio/index",
}
```

### 代码演示

```html
<w-pane title="Radio" desc="单选框" />


<w-pane desc="Default" />

<w-cell-group>
 <w-radio options="{{ dataItems }}" bindonChange="handleonChange" />
</w-cell-group>



<w-pane desc="DefaultValue" />

<w-cell-group>
 <w-radio defaultValue="huawei" options="{{ dataItems }}" bindonChange="handleonChange" />
</w-cell-group>


<w-pane desc="W-Model" />

<w-cell-group>
 <w-radio w-model="{{ radioModel }}" options="{{ dataItems }}" bindonChange="handleonChange" />
</w-cell-group>

<w-button type="info" data-value="iphone" bind:click="handleChange">change 苹果</w-button>
<w-button type="info" data-value="sanxing" bind:click="handleChange">change 三星</w-button>
<w-button type="info" data-value="huawei" bind:click="handleChange">change 华为</w-button>
<w-button type="info" data-value="oppo" bind:click="handleChange">change oppo音乐手机</w-button>
```

### API

#### 属性

| 属性         |          说明           |  类型  | 默认值 |
| ------------ | :---------------------: | :----: | -----: |
| options      | 选项组{keyvalue...item} | array  |      - |
| defaultValue |       默认选中项        | string |      - |
| label        |       选项组标题        | string |      - |
| wModel       |                         | string |      - |
| color        |          颜色           | string |      - |

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
