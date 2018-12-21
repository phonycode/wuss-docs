# CellPicker 选择器

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-cell-picker": "wuss-weapp/w-cell-picker/index",
}
```

### 代码演示

```html
w-cell-group>
<w-cell-pickers
  label="选择地区"
  options="{{ options }}"
  title="请选择地区"
  defaultValue="{{[1,1,5]}}"
/>
</w-cell-group>
```

```javascript
data: {
  options: [
    [
      {
        key: '北京市',
        value: '110000',
      },
      {
        key: '广东省',
        value: '440000',
      },
    ],
    [
      {
        key: '市辖区',
        value: '110100',
        parent: '110000',
      },
      {
        key: '广州市',
        value: '440100',
        parent: '440000',
      },
      {
        key: '韶关市',
        value: '440200',
        parent: '440000',
      },
    ],
    [
      {
        key: '东城区',
        value: '110101',
        parent: '110100',
      },
      {
        key: '西城区',
        value: '110102',
        parent: '110100',
      },
      {
        key: '朝阳区',
        value: '110105',
        parent: '110100',
      },
      {
        key: '丰台区',
        value: '110106',
        parent: '110100',
      },
      {
        key: '石景山区',
        value: '110107',
        parent: '110100',
      },
      {
        key: '海淀区',
        value: '110108',
        parent: '110100',
      },
      {
        key: '门头沟区',
        value: '110109',
        parent: '110100',
      },
      {
        key: '房山区',
        value: '110111',
        parent: '110100',
      },
      {
        key: '通州区',
        value: '110112',
        parent: '110100',
      },
      {
        key: '顺义区',
        value: '110113',
        parent: '110100',
      },
      {
        key: '昌平区',
        value: '110114',
        parent: '110100',
      },
      {
        key: '大兴区',
        value: '110115',
        parent: '110100',
      },
      {
        key: '怀柔区',
        value: '110116',
        parent: '110100',
      },
      {
        key: '平谷区',
        value: '110117',
        parent: '110100',
      },
      {
        key: '密云区',
        value: '110118',
        parent: '110100',
      },
      {
        key: '延庆区',
        value: '110119',
        parent: '110100',
      },
      {
        key: '荔湾区',
        value: '440103',
        parent: '440100',
      },
      {
        key: '越秀区',
        value: '440104',
        parent: '440100',
      },
      {
        key: '海珠区',
        value: '440105',
        parent: '440100',
      },
      {
        key: '天河区',
        value: '440106',
        parent: '440100',
      },
      {
        key: '白云区',
        value: '440111',
        parent: '440100',
      },
      {
        key: '黄埔区',
        value: '440112',
        parent: '440100',
      },
      {
        key: '番禺区',
        value: '440113',
        parent: '440100',
      },
      {
        key: '花都区',
        value: '440114',
        parent: '440100',
      },
      {
        key: '南沙区',
        value: '440115',
        parent: '440100',
      },
      {
        key: '从化区',
        value: '440117',
        parent: '440100',
      },
      {
        key: '增城区',
        value: '440118',
        parent: '440100',
      },
      {
        key: '武江区',
        value: '440203',
        parent: '440200',
      },
      {
        key: '浈江区',
        value: '440204',
        parent: '440200',
      },
      {
        key: '曲江区',
        value: '440205',
        parent: '440200',
      },
      {
        key: '始兴县',
        value: '440222',
        parent: '440200',
      },
      {
        key: '仁化县',
        value: '440224',
        parent: '440200',
      },
      {
        key: '翁源县',
        value: '440229',
        parent: '440200',
      },
      {
        key: '乳源瑶族自治县',
        value: '440232',
        parent: '440200',
      },
      {
        key: '新丰县',
        value: '440233',
        parent: '440200',
      },
      {
        key: '乐昌市',
        value: '440281',
        parent: '440200',
      },
      {
        key: '南雄市',
        value: '440282',
        parent: '440200',
      },
    ],
  ],
}
```

### API

#### Attribute 属性

| 属性         | 说明 |  类型   | 默认值 |
| ------------ | :--: | :-----: | -----: |
| options      |  传入的选项组[ [], [], [] ]    | Array | [] |
| defaultValue      |  默认值 可以支持 key value  | Array | [] |
| cancelTextColor      |  取消文本颜色    | String | - |
| cancelText      |  取消文本文字    | String | '取消' |
| title      |  标题    | String | [] |
| confirmTextColor      |  确认文本颜色    | String | - |
| confirmText      |  确认文本文字    | String | '确认' |
| showValue      |  是否用value而不是key展示    | Boolean | false |
| defaultKey      |  onChange和onSelect事件返回的值是何种格式 [value,value...] [key,key,...]    | String | 'value' |

#### Event 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| onChange      |   picker值改变时触发   | e.detail.value |
| onSelect      |  点击确认时触发    | e.detail.value |


#### Slot 插槽

| 名称 | 说明 |
| ---- | ---- |


#### Class 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
