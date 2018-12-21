# Tag 标签

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-tag": "wuss-weapp/w-tag/index",
}
```

### 图片演示

<img style="margin: 20px 0;" height="450px" src="../../resource/tag.jpg"/>



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
<w-tag tagStyle="color:#fff;background-color:green;border-color:green;">green</w-tag>
<w-tag tagStyle="color:pink;border-color:pink;">pink</w-tag>

<w-button type="info" bindclick="toggleTag">toggleTag</w-button>
</view>
```

### API

#### Attribute 属性

| 属性      |       说明        |  类型   | 默认值 |
| --------- | :---------------: | :-----: | -----: |
| visible   |   控制是否可见    | boolean |  false |
| closeable |   是否可以关闭    | boolean |  false |
| color     |     字体颜色      | string  |      - |
| tagStyle  | tag 的 style 样式 | string  |      - |

#### Event 事件

| 事件名     | 说明                                    | 参数 |
| ---------- | --------------------------------------- | ---- |
| close      | closeable 为 true 时 关闭触发           | ---- |
| afterClose | closeable 为 true 时 关闭动画完成后触发 | ---- |

#### Slot 插槽

| 名称 | 说明           |
| ---- | -------------- |
| -    | 自定义文本内容 |

#### Class 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
