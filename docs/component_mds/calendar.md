# Calendar 预定日历选择器

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-calendar": "path/to/w-calendar/index",
}
```

### 代码演示

```html
<w-pane title="Calendar" desc="预定日历选择器" />

<w-pane desc="Default" />

<w-button
 type="info"
 bind:click="handleClick1"
>
 {{ visible1 ? 'show' : 'hide' }}
</w-button>
<w-calendar
 visible="{{visible1}}"
 bind:onSelect="handleSelected"
 bind:cancel="handleCancel"
/>

<w-pane desc="Specified Date" />

<w-button
 type="info"
 bind:click="handleClick2"
>
 {{ visible2 ? 'show' : 'hide' }}
</w-button>
<w-calendar
 visible="{{visible2}}"
 checkInDate="2018-09-15"
 checkOutDate="2018-10-15"
 bind:onSelect="handleSelected"
 bind:cancel="handleCancel"
/>

<w-pane desc="Maximum Render Month" />

<w-button
 type="info"
 bind:click="handleClick3"
>
 {{ visible3 ? 'show' : 'hide' }}
</w-button>
<w-calendar
 visible="{{visible3}}"
 maxMonth="12"
 bind:onSelect="handleSelected"
 bind:cancel="handleCancel"
/>
```

### API

#### 属性

| 属性         | 说明 |  类型   | 默认值 |
| ------------ | :--: | :-----: | -----: |
| visible      |      | boolean |  false |
| checkInDate  |      |  date   |      - |
| checkOutDate |      |  date   |      - |
| maxMonth     |      | number  |      - |

#### 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |


#### slot

| 名称 | 说明 |
| ---- | ---- |


#### 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
