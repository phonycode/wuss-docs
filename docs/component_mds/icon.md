# Icon 图标

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-icon": "path/to/w-icon/index",
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/icon.mp4"
/>


### 代码演示

```html
<w-pane title="Icon" desc="图标" />

<w-pane desc="Default" />

<scroll-view class="wuss-icon-example" scroll-y="true" >
	<view
	 class="wuss-icon-items"
	 hover-class="none"
  hover-stop-propagation="false"
  catchtap="copyIconName"
  data-name="{{ item.name }}"
	 wx:for="{{ iconData }}"
	 wx:key="index"
	>
		<w-icon
		 type="{{ item.name }}"
   />
   <text class="wuss-icon-text" >{{ item.text }}</text>
	</view>
</scroll-view>
```


```javascript
data: {
  iconData: [
    { text: 'checked', name: 'checked' },
    { text: 'close', name: 'close' },
    { text: 'location', name: 'location' },
    { text: 'location-o', name: 'location-o' },
    { text: 'success', name: 'success' },
    { text: 'success-o', name: 'success-o' },
    { text: 'arrow-down', name: 'arrow-down' },
    { text: 'camera', name: 'camera' },
    { text: 'camera-o', name: 'camera-o' },
    { text: 'comment', name: 'comment' },
    { text: 'comment-o', name: 'comment-o' },
    { text: 'voice', name: 'voice' },
    { text: 'voice-o', name: 'voice-o' },
    { text: 'order', name: 'order' },
    { text: 'question', name: 'question' },
    { text: 'question-o', name: 'question-o' },
    { text: 'filter', name: 'filter' },
    { text: 'top', name: 'top' },
    { text: 'add', name: 'add' },
    { text: 'arrow-top', name: 'arrow-top' },
    { text: 'info', name: 'info' },
    { text: 'info2-o', name: 'info2-o' },
    { text: 'forward', name: 'forward' },
    { text: 'forward-o', name: 'forward-o' },
    { text: 'record-o', name: 'record-o' },
    { text: 'record', name: 'record' },
    { text: 'wifi', name: 'wifi' },
    { text: 'share', name: 'share' },
    { text: 'wechat-zone', name: 'wechat-zone' },
    { text: 'wechat', name: 'wechat' },
    { text: 'female', name: 'female' },
    { text: 'male', name: 'male' },
    { text: 'system-o', name: 'system-o' },
    { text: 'cart', name: 'cart' },
    { text: 'delete', name: 'delete' },
    { text: 'edit', name: 'edit' },
    { text: 'form', name: 'form' },
    { text: 'pic', name: 'pic' },
    { text: 'refresh', name: 'refresh' },
    { text: 'search', name: 'search' },
    { text: 'repeal', name: 'repeal' },
    { text: 'calendar', name: 'calendar' },
    { text: 'user', name: 'user' },
    { text: 'user-o', name: 'user-o' },
    { text: 'scanning', name: 'scanning' },
    { text: 'pin', name: 'pin' },
    { text: 'weibo', name: 'weibo' },
    { text: 'bell', name: 'bell' },
    { text: 'twitter', name: 'twitter' },
    { text: 'bar-chart', name: 'bar-chart' },
    { text: 'signal', name: 'signal' },
    { text: 'good2-o', name: 'good2-o' },
    { text: 'android', name: 'android' },
    { text: 'apple', name: 'apple' },
    { text: 'phone-o', name: 'phone-o' },
    { text: 'like-o', name: 'like-o' },
    { text: 'star-o', name: 'star-o' },
    { text: 'menu', name: 'menu' },
    { text: 'star', name: 'star' },
    { text: 'home', name: 'home' },
    { text: 'home-o', name: 'home-o' },
    { text: 'like', name: 'like' },
    { text: 'chart', name: 'chart' },
    { text: 'facebook', name: 'facebook' },
    { text: 'attention-forbid-o', name: 'attention-forbid-o' },
    { text: 'attention-forbid', name: 'attention-forbid' },
    { text: 'bluetooth2', name: 'bluetooth2' },
    { text: 'bell-o', name: 'bell-o' },
    { text: 'address-card', name: 'address-card' },
    { text: 'bluetooth1', name: 'bluetooth1' },
    { text: 'google', name: 'google' },
    { text: 'bar-code', name: 'bar-code' },
    { text: 'popular', name: 'popular' },
    { text: 'more-dot', name: 'more-dot' },
    { text: 'down', name: 'down' },
    { text: 'address-card-o', name: 'address-card-o' },
    { text: 'battery', name: 'battery' },
    { text: 'good2', name: 'good2' },
    { text: 'mobile', name: 'mobile' },
    { text: 'add-user', name: 'add-user' },
    { text: 'delete-team', name: 'delete-team' },
    { text: 'api', name: 'api' },
    { text: 'disconnect', name: 'disconnect' },
    { text: 'shrink', name: 'shrink' },
    { text: 'fullscreen', name: 'fullscreen' },
    { text: 'doubleleft', name: 'doubleleft' },
    { text: 'double-arrow-right', name: 'double-arrow-right' },
    { text: 'stop', name: 'stop' },
    { text: 'github', name: 'github' },
    { text: 'decrement', name: 'decrement' },
    { text: 'added', name: 'added' },
    { text: 'arrow-left', name: 'arrow-left' },
    { text: 'arrow-right', name: 'arrow-right' },
    { text: 'arrow-left-l', name: 'arrow-left-l' },
    { text: 'arrow-right-l', name: 'arrow-right-l' },
    { text: 'zoomout', name: 'zoomout' },
    { text: 'zoomin', name: 'zoomin' },
    { text: 'position', name: 'position' },
    { text: 'checkbox', name: 'checkbox' },
    { text: 'checkbox-o', name: 'checkbox-o' },
  ],
},
copyIconName(e) {
  const { name } = e.currentTarget.dataset;
  wx.setClipboardData({
    data: String(name),
  });
},
```


```css
page {
  width: 100%;
  height: 100%;
}

.wuss-icon-example {
  width: 100%;
  height: 80%;
}

.wuss-icon-example {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}

.wuss-icon-items {
  display: inline-flex;
  width: 33.33%;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 50rpx;
  flex-wrap: wrap;
}

.wuss-icon-text {
  margin-top: 10px;
  font-size: 14px;
  color: #999999;
}
```

### API

#### 属性

| 属性  |   说明   |  类型  | 默认值 |
| ----- | :------: | :----: | -----: |
| type  | 图标类型 | string |      - |
| size  | 图标大小 | number |      - |
| color | 图标颜色 | string |      - |

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
