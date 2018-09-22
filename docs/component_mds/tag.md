# Tag 标签

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-tag": "path/to/w-tag/index",
}
```

### 代码演示

```html
<w-pane title="Tag" desc="标签" />
<view class="tag-container">

<w-tag bindclick="tagClick">VIP</w-tag>
<w-tag color="magenta">VIP</w-tag>
<w-tag color="red">VIP</w-tag>
<w-tag color="volcano">VIP</w-tag>
<w-tag color="orange">VIP</w-tag>
<w-tag color="gold">VIP</w-tag>
<w-tag color="lime">VIP</w-tag>
<w-tag color="green">VIP</w-tag>
<w-tag color="cyan">VIP</w-tag>
<w-tag color="blue">VIP</w-tag>
<w-tag color="geekblue">VIP</w-tag>
<w-tag color="purple">VIP</w-tag>
<w-tag closeable bindafterClose="afterClose" bindclose="close" visible="{{ visible }}">点击关闭</w-tag>
<w-tag tagStyle="color:#fff;background-color:green;border-color:green;">琚志强：我绿吗</w-tag>
<w-tag tagStyle="color:pink;border-color:pink;">老蔡:有点绿</w-tag>

<w-button type="info" bindclick="toggleTag">toggleTag</w-button>
</view>
```

### API

#### 属性

| 属性      |     说明     |  类型   | 默认值 |
| --------- | :----------: | :-----: | -----: |
| visible   | 控制是否可见 | boolean |  false |
| closeable | 是否可以关闭 | boolean |  false |
| color     |     颜色     | string  |      - |
| tagStyle  |              | string  |      - |

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
