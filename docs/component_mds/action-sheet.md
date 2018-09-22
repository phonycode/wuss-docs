# ActionSheet 操作菜单

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-pane": "/dist/w-pane/index",
  "w-button": "/dist/w-button/index",
  "w-action-sheet": "/dist/w-action-sheet/index"
}
```

### 代码演示

```html
<w-pane title="ActionSheet" desc="操作菜单" />

<w-pane desc="Default" />
<w-button type="info" data-key="1" bind:click="handleShow">{{ visible1 ? 'show' : 'hide' }}</w-button>
<w-action-sheet data-key="1" visible="{{ visible1 }}" items="{{ items1 }}" bind:click="handleClick" bind:close="handleClose" />


<w-pane desc="Icon" />
<w-button type="info" data-key="2" bind:click="handleShow">{{ visible2 ? 'show' : 'hide' }}</w-button>
<w-action-sheet data-key="2" visible="{{ visible2 }}" items="{{ items2 }}" bind:click="handleClick" bind:close="handleClose" />


<w-pane desc="MaskCancel = False" />
<w-button type="info" data-key="3" bind:click="handleShow">{{ visible3 ? 'show' : 'hide' }}</w-button>
<w-action-sheet maskCancel="{{ false }}" data-key="3" visible="{{ visible3 }}" items="{{ items3 }}" bind:click="handleClick" bind:close="handleClose" />


<w-pane desc="ShowCancel = False" />
<w-button type="info" data-key="4" bind:click="handleShow">{{ visible4 ? 'show' : 'hide' }}</w-button>
<w-action-sheet showCancel="{{ false }}" data-key="4" visible="{{ visible4 }}" items="{{ items4 }}" bind:click="handleClick" bind:close="handleClose" />


<w-pane desc="CancelText = 退出" />
<w-button type="info" data-key="5" bind:click="handleShow">{{ visible5 ? 'show' : 'hide' }}</w-button>
<w-action-sheet cancelText="退出" data-key="5" visible="{{ visible5 }}" items="{{ items5 }}" bind:click="handleClick" bind:close="handleClose" />

<w-pane desc="Loading" />
<w-button type="info" data-key="6" bind:click="handleShow">{{ visible6 ? 'show' : 'hide' }}</w-button>
<w-action-sheet cancelText="退出" data-key="6" visible="{{ visible6 }}" items="{{ items6 }}" bind:click="handleClick" bind:close="handleClose" />
```

### API

#### 属性

| 属性       |        说明        |  类型   | 默认值 |
| ---------- | :----------------: | :-----: | -----: |
| visible    |      是否可见      | boolean |  false |
| items      | 当前传出的菜单列表 |  array  |     [] |
| maskCancel | 点击遮罩是否可关闭 | boolean |  false |
| showCancel |  是否展示取消按钮  | boolean |  false |
| cancelText |    取消按钮文字    | string  |   取消 |

#### 事件

| 事件名 | 说明           | 参数 |
| ------ | -------------- | ---- |
| close  | 取消回调       |
| click  | 菜单被点击回调 |

#### slot

| 名称   | 说明     |
| ------ | -------- |
| header | 头部插槽 |

#### 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
