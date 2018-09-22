# ActivityIndicator 活动指示器

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-activity-indicator": "path/to/w-activity-indicator/index",
}
```

### 代码演示

```html
<w-pane title="ActivityIndicator" desc="活动指示器" />

<w-pane desc="Type" />


<view class="cell" >
 <w-indicator show type="snake" />
 <w-indicator show type="diffusion" />
 <w-indicator show type="ball" />
 <w-indicator show type="catapult" />
</view>


<w-pane desc="Color" />

<view class="cell" >
 <w-indicator show color="#448ef6" type="snake" />
 <w-indicator show color="#75c2f6" type="diffusion" />
 <w-indicator show color="#ffe981" type="ball" />
 <w-indicator show color="#ff5da2" type="catapult" />
</view>


<w-pane desc="Size" />

<view class="cell" >
 <w-indicator show color="#35013f" size="small" type="snake" />
 <w-indicator show color="#b643cd" size="default" type="diffusion" />
 <w-indicator show color="#99ddcc" size="larger" type="ball" />
</view>

<w-pane desc="LoadingText" />

<view class="cell" >
 <w-indicator show text="Loading..." size="small" type="snake" />
 <w-indicator show text="Loading..." size="small" type="diffusion" />
 <w-indicator show text="Loading..." size="small" type="ball" />
</view>
```

### API

#### 属性

| 属性       |                        说明                         |  类型   | 默认值 |
| ---------- | :-------------------------------------------------: | :-----: | -----: |
| show       |                 控制动画的显示隐藏                  | boolean |      - |
| size       |      指示器的大小,分别为[small/default/larger]      | string  |      - |
| color      |                     动画的颜色                      | string  |      - |
| type       | 动画类型，可选参数为[snake/diffusion/ball/catapult] | string  |      - |
| text       |                   附加的文本内容                    | string  |      - |
| textStyles |                 附加的文本内容样式                  | string  |      - |

#### 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |


#### slot

| 名称 | 说明 |
| ---- | ---- |


#### 自定义类名

| 类名                    | 说明 |
| ----------------------- | ---- |
| wuss-class              | 无   |
| wuss-activity-indicator | 无   |
