# Tabs 导航切换栏

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-tabs": "path/to/w-tabs/index",
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/tabs.mp4"
/>

### 代码演示

```html
<w-pane title="Tabs" desc="导航切换栏" />

<w-pane desc="Default" />
<w-tabs bind:onChange="handleChange" options="{{ tabs1 }}" />

<w-pane desc="Initial Index = 2" />
<w-button type="info" bind:onClick="handleSelected">selected tab2</w-button>
<w-tabs
 bind:onChange="handleChange"
 options="{{ tabs4 }}"
 currentIndex="{{ index }}"
/>

<w-pane desc="Line Size = 1" />
<w-tabs lineSize="1" options="{{ tabs1 }}" />

<w-pane desc="Active Color" />
<w-tabs
 lineSize="1"
 activeColor="#ff8800"
 options="{{ tabs3 }}"
/>

<w-pane desc="Icon" />
<w-tabs
 textStyles="font-size: 14px;"
 options="{{ tabs2 }}"
 activeColor="#ef473a"
/>

<w-pane desc="Disabled Transition and DisabledItem" />
<w-tabs
 transition="{{ false }}"
 options="{{ tabs4 }}"
 bind:disabled="onDisabled"
/>

<w-pane desc="Scroll" />
<w-tabs bind:onClick="handleClick" options="{{ tabs5 }}" />

<w-pane desc="Disabled Line" />
<w-tabs
 transition="{{ false }}"
 line="{{ false }}"
 options="{{ tabs4 }}"
/>

<w-pane desc="Disabled Border" />
<w-tabs
 transition="{{ false }}"
 line="{{ false }}"
 border="{{ false }}"
 options="{{ tabs4 }}"
/>
```

```javascript
data: {
  index: 2,
  tabs1: [
    {
      text: '电器',
    },
    {
      text: '数码',
    },
    {
      text: '食品',
    },
    {
      text: '手机',
    },
  ],
  tabs2: [
    {
      text: '微博',
      icon: 'weibo',
      iconSize: '32rpx',
      iconColor: '#ef473a',
    },
    {
      text: '脸书',
      icon: 'facebook',
      iconSize: '32rpx',
      iconColor: '#ef473a',
    },
    {
      text: '苹果',
      icon: 'apple',
      iconSize: '32rpx',
      iconColor: '#ef473a',
    },
    {
      text: '安卓',
      icon: 'android',
      iconSize: '32rpx',
      iconColor: '#ef473a',
    },
  ],
  tabs3: [
    {
      text: '英雄联盟',
    },
    {
      text: '绝地求生',
    },
    {
      text: 'DNF',
    },
    {
      text: '炉石传说',
    },
  ],
  tabs4: [
    {
      text: 'tab1',
    },
    {
      text: 'tab2',
    },
    {
      text: 'tab3',
    },
    {
      text: 'tab4',
    },
  ],
  tabs5: [
    {
      text: 'tab1',
    },
    {
      text: 'tab2',
    },
    {
      text: 'tab3',
    },
    {
      text: 'tab4',
    },
    {
      text: 'tab5',
    },
    {
      text: 'tab6',
    },
    {
      text: 'tab7',
    },
    {
      text: 'tab8',
    },
    {
      text: 'tab9',
    },
    {
      text: 'tab10',
    },
  ],
  tabs5: [
    {
      text: 'tab1',
    },
    {
      text: 'tab2',
    },
    {
      text: 'tab3',
    },
    {
      text: 'tab4',
    },
    {
      text: 'tab5',
    },
    {
      text: 'tab6',
    },
    {
      text: 'tab7',
    },
    {
      text: 'tab8',
    },
    {
      text: 'tab9',
    },
  ],
},
handleChange(e) {
  const index = e.detail.index;
  console.log(e);
},
handleSelected() {
  this.setData({
    index: 2,
  });
},
handleClick(e) {
  const { index, title } = e.detail;
  console.log('点击了tab:' + index, title);
},
onDisabled(e) {
  const { index, title } = e.detail;
  console.log('点击了禁用的:' + index, title);
},
```

```css
.scroll-view_H {
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  height: 200px;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
}
.scroll-view-item_H {
  width: 50%;
  height: 100%;
}

.bc_green {
  background-color: green;
}
.bc_red {
  background-color: red;
}
.bc_yellow {
  background-color: yellow;
}
.bc_blue {
  background-color: blue;
}
.content {
  padding: 20rpx 40rpx;
}
```

### API

#### 属性

| 属性         |                         说明                         |  类型   |            默认值 |
| ------------ | :--------------------------------------------------: | :-----: | ----------------: |
| options      | tab 列表的数据源 参数有 text,icon,iconColor,iconSize |  array  |                [] |
| currentIndex |                  初始化或者控制索引                  | number  |                 0 |
| transition   |                   是否开启过渡动画                   | boolean |             false |
| line         |                     是否开启线条                     | boolean |              true |
| duration     |                 设置动画时长 单位 s                  | number  |               0.2 |
| lineSize     |                  线条长度大小 0 - 1                  | number  |               0.5 |
| border       |                       开启线条                       | string  |              true |
| borderSize   |                   线条粗细 单位 px                   | string  |                 2 |
| borderColor  |                       线条颜色                       | string  |           #eeeeee |
| activeColor  |                         颜色                         | string  | rgb(69, 143, 246) |
| textStyles   |                       文本样式                       | string  |                 - |
| fixed        |                     是否开启定位                     | boolean |             false |

#### 事件

| 事件名   | 说明               | 参数     |
| -------- | ------------------ | -------- |
| onChange | tab 变化的时候触发 | e.detail |
| disabled | 禁用的被点击时     | e.detail |

#### slot

| 名称 | 说明 |
| ---- | ---- |


#### 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
| wuss-class | 根节点样式类 |
