
 # Badge

 
 ### 使用指南

 在 page.json 中引入组件
 
 ```json
 "usingComponents": {
   "w-badge": "wuss-weapp/w-badge/index",
 }
 ```

 ### 代码演示

 ```html
<text
  size="default" 
  max="{{ max }}" 
  class="wuss-class wuss-badge-warp wuss-badge-{{ type }}"
  style="{{ styles }}"
  hover-stop-propagation="true"
  open-type="{{ openType }}"
>
  <slot wx:if="{{!value && type !== 'round'}}"></slot>
  {{value && type !== 'round' ? value : ''}}
</text>

```

### API

#### Attribute 属性
|属性| 说明 |类型|默认值|
| ------------- |:-------------:|:-----:| -----:|-----:|
|icon|添加按钮图标|string|-|
|iconColor||string|-|
|iconSize||string|-|
|openType|设置开放数据,可选值为[contact\|share\|getUserInfo\|openSetting\|feedback]|string|-|
|type|按钮样式类型，可选值为[]|string|-|
|bgColor|自定义背景颜色|string|-|
|color|自定义按钮颜色|string|-|
|styles|按钮的自定义样式|string|-|
|inline||boolean|-|
|max|最大值|number,string|-|
|value||number,string|-|

#### Event 事件
| 事件名     | 说明                                   | 参数 |
| ---------- | -------------------------------------- | ---- |


#### Slot 插槽
| 名称 | 说明       |
| ---- | ---------- |

#### Class 自定义类名
| 类名                    | 说明                  |
| ----------------------- | --------------------- |
|wuss-class|无|
|wuss-button-hover-class|无|    
    