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
 options="{{ options }}"
 bind:onChange="handleChange"
/>

<w-pane title="DropMenu" desc="下拉菜单" />
```

### API ;.7ftcc

#### 属性

| 属性      | 说明 | 类型  | 默认值 |
| --------- | :--: | :---: | -----: |
| options |      | array |      - |

#### 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| onChange | 筛选条件选中或改变时的回调     | event |      - |


#### slot

| 名称 | 说明 |
| ---- | ---- |
| filter |  当options的item type为filter并且定义了slotName时为对应组件的slot名称    | - |      - |

#### 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
