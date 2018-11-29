# VCode 验证码

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-vcode": "path/to/w-vcode/index",
}
```


### 图片演示

<img style="margin: 20px 0;" height="450px" src="../../resource/vcode.jpg"/>


### 代码演示

```html
w-cell-group>
<w-cell-group>
  <w-vcode
    label="验证码"
    placeholder="验证码..."
    vcodeSrc="{{ src }}"
    bind:onChangeVCode="handleChange"
  />
</w-cell-group>
```

```javascript
data: {
  src: 'https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg',
  flag: false,
},
handleChange() {
  this.setData({
    src: this.data.flag ? 'http://img5.imgtn.bdimg.com/it/u=3224070611,1493841838&fm=26&gp=0.jpg' : 'https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg',
    flag: !this.data.flag,
  })
},
```

### API

#### 属性

| 属性         | 说明 |  类型   | 默认值 |
| ------------ | :--: | :-----: | -----: |
| options             |   标签   | String  |   -  |
| defaultValue        |   值   | String  |   -  |
| cancelTextColor     |   占位符   | String |   -    |
| cancelText          |   禁用   | Boolean |  false  |
| title               |   验证码图片地址   | String |  -    |
| confirmTextColor    |   最大长度   | Number |   -    |

#### 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| onChange      |   值改变时触发   | e.detail.value |
| onChangeVCode |  验证码图片被点击时触发    | - |


#### slot

| 名称 | 说明 |
| ---- | ---- |
| slot      |   指定的图片验证码   |


#### 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
| wuss-placeholder-class | 验证码输入框的placeholder样式 |