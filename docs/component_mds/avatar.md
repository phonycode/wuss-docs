## Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-avatar": "wuss-weapp/w-avatar/index",
}
```


### 图片演示


<img style="margin: 20px 0;" height="450px" src="../../resource/avatar.jpg"/>


### 代码演示

```html
<w-pane title="Avatar" desc="头像" />

<w-pane desc="Default" />
<view class="pd" >
	<w-avatar size="small">W</w-avatar>
	<w-avatar>W</w-avatar>
	<w-avatar size="large">W</w-avatar>
</view>

<w-pane desc="Use src" />
<view class="pd" >
	<w-avatar size="small" src="/pages/assets/logo.png" />
	<w-avatar src="/pages/assets/logo.png" />
	<w-avatar size="large" src="/pages/assets/logo.png" />
</view>

<w-pane desc="Shape is square" />
<view class="pd" >
	<w-avatar size="small" scale shape="square">W</w-avatar>
	<w-avatar shape="square">W</w-avatar>
	<w-avatar shape="square" size="large">W</w-avatar>
</view>

<w-pane desc="Custom Style" />
<view class="pd" >
	<w-avatar size="small" wuss-class="custom1">W</w-avatar>
	<w-avatar wuss-class="custom2">W</w-avatar>
	<w-avatar wuss-class="custom3" size="large">W</w-avatar>
</view>
```

### API

#### Attribute 属性

| 属性  | 说明                                           | 类型   | 默认值  |
| ----- | ---------------------------------------------- | ------ | ------- |
| size  | 设置头像的大小，可选值为 small、default、large | string | default |
| shape | 指定头像的形状，可选值为 circle、square        | string | circle  |
| src   | 图片类头像的 src 地址                          | string | -       |

#### Event 事件

| 事件名     | 说明         | 参数 |
| ---------- | ------------ | ---- |
| bind:click | 点击头像触发 | -    |

#### Slot 插槽

| 名称 | 说明                 |
| ---- | -------------------- |
| -    | 文本类头像自定义内容 |

#### Class 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
