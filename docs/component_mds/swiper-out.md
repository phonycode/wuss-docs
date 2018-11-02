# SwiperOut 侧滑菜单

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-swiper-out": "path/to/w-swiper-out/index",
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/swiper-out.mp4"
/>





### 代码演示

```html
<w-pane title="SwiperOut" desc="侧滑菜单" />

<w-pane desc="Default" />
<w-swiper-out 
  swiperOutBtns="{{ btns1 }}"
  data-itemid="sdadasdas123"
  bind:delete="delete"
  bind:edit="edit"
  bind:added="added"
>
  <view class="example-content" style="" >
     Example Content
  </view>
</w-swiper-out>


<w-pane desc="Multiple" />
<w-swiper-out 
  swiperOutBtns="{{ btns2 }}"
  bind:delete="delete"
  bind:edit="edit"
  bind:added="added"
>
  <view class="example-content" style="" >
     Example Content
  </view>
</w-swiper-out>


<w-pane desc="ButtonWidth = 50" />
<w-swiper-out 
  swiperOutBtns="{{ btns2 }}"
  bind:delete="delete"
  bind:edit="edit"
  bind:added="added"
  buttonWidth="50"
>
  <view class="example-content" style="" >
     Example Content
  </view>
</w-swiper-out>


<w-pane desc="Close = True" />
<w-swiper-out 
  close
  swiperOutBtns="{{ btns1 }}"
  bind:delete="delete"
  bind:edit="edit"
  bind:added="added"
>
  <view class="example-content" style="" >
     Example Content
  </view>
</w-swiper-out>

<w-pane desc="Threshold = 0.7" />
<w-swiper-out 
  swiperOutBtns="{{ btns1 }}"
  bind:delete="delete"
  bind:edit="edit"
  bind:added="added"
  threshold=".7"
>
  <view class="example-content" style="" >
     Example Content
  </view>
</w-swiper-out>


<w-pane desc="AutoClose = False" />
<w-swiper-out 
  autoClose="{{false}}"
  swiperOutBtns="{{ btns2 }}"
  bind:delete="delete"
  bind:edit="edit"
  bind:added="added"
>
  <view class="example-content" style="" >
     Example Content
  </view>
</w-swiper-out>


<w-pane desc="Disabled = True" />
<w-swiper-out 
  disabled
  swiperOutBtns="{{ btns2 }}"
  bind:delete="delete"
  bind:edit="edit"
  bind:added="added"
>
  <view class="example-content" style="" >
     Example Content
  </view>
</w-swiper-out>


<w-pane desc="BackgroundColor = f8f8f8" />
<w-swiper-out 
  backgroundColor="#f8f8f8"
  swiperOutBtns="{{ btns2 }}"
  bind:delete="delete"
  bind:edit="edit"
  bind:added="added"
>
  <view class="example-content" style="" >
     Example Content
  </view>
</w-swiper-out>
```

```javascript
data: {
  btns1: [
    {
      text: '添加',
      color: '#ffffff',
      background: '#28a745',
      disabled: false,
      size: '14px',
      type: 'added',
    },
    {
      text: '删除',
      color: '#ffffff',
      background: '#e42112',
      disabled: false,
      size: '14px',
      type: 'delete',
    },
  ],
  btns2: [
    {
      text: '添加',
      color: '#ffffff',
      background: '#28a745',
      disabled: false,
      size: '14px',
      type: 'added',
    },
    {
      text: '编辑',
      color: '#ffffff',
      background: '#ff8800',
      disabled: false,
      size: '14px',
      type: 'edit',
    },
    {
      text: '删除',
      color: '#ffffff',
      background: '#e42112',
      disabled: false,
      size: '14px',
      type: 'delete',
    },
  ],
},
added() {
  wx.showModal({
    title: '提示',
    content: 'added',
    showCancel: false,
  });
},
delete(e) {
  wx.showModal({
    title: '提示',
    content: 'delete',
    showCancel: false,
  });
},
edit() {
  wx.showModal({
    title: '提示',
    content: 'edit',
    showCancel: false,
  });
},
handleBtnClick(e) {
  const { onPress } = e.detail;
  onPress.call(this);
},
```


```css
.example-content {
  display: flex;
  align-items: center;
  padding: 0 10px;
}
```

### API

#### 属性

| 属性            |                         说明                          |  类型   | 默认值 |
| --------------- | :---------------------------------------------------: | :-----: | -----: |
| swiperOutBtns   | 侧滑菜单按钮列表参数有 text,color,background,disabled |  array  |     [] |
| backgroundColor |                       背景颜色                        | string  |      - |
| buttonWidth     |                      按钮的宽度                       | number  |      - |
| height          |                      容器的高度                       | number  |      - |
| threshold       |                    侧滑触发的阀值                     | number  |      - |
| close           |                       是否展开                        | boolean |  false |
| autoClose       |                   点击按钮自动收起                    | boolean |  false |
| disabled        |                     禁用侧滑菜单                      | boolean |  false |

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
