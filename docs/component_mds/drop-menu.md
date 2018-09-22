# DropMenu 下拉菜单

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-drop-menu": "path/to/w-drop-menu/index",
}
```

### 代码演示

```html
<w-drop-menu
 dataItems="{{ dataItems }}"
 bind:selected="handleSelected"
 bind:sortChange="handleSelectedSort"
/>

<w-pane title="DropMenu" desc="下拉菜单" />
```

### API

#### 属性

| 属性      | 说明 | 类型  | 默认值 |
| --------- | :--: | :---: | -----: |
| dataItems |      | array |      - |

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
