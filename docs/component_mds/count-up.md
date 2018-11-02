# Count Up 指数

### 使用指南

在 page.json 中引入组件

```json
"usingComponents": {
  "w-count-up": "path/to/w-count-up/index",
}
```

### 视频演示

<video style="margin: 20px 0;" height="450px" autoplay="true" loop="true" controls x5-playsinline="true" playsinline="true" webkit-playsinline="true" src="../../resource/count-up.mp4"
/>




### 代码演示

```html
<w-pane title="CountUp" desc="指数" />

<w-pane desc="Default" />

<view
 style="color: #ff9900;padding: 15px 0;text-align: center;font-size: 40px;"
 hover-class="none"
 hover-stop-propagation="false"
>
	{{ count }}
</view>


<view
 style="color: #ff9900;padding: 15px 0;text-align: center;font-size: 40px;"
 hover-class="none"
 hover-stop-propagation="false"
>
	{{ count2 }}
</view>

<view
 style="color: #ff9900;padding: 15px 0;text-align: center;font-size: 40px;"
 hover-class="none"
 hover-stop-propagation="false"
>
	{{ count3 }}
</view>

<w-form
 bind:submit="handleSubmit"
>
	<w-cell-group>
		<w-input
		 label="初始数字"
		 name="startVal"
		 value="0"
		/>
		<w-input
		 label="结束数字"
		 name="endVal"
		 value="3000"
		/>
		<w-input
		 label="保留小数点位数"
		 name="decimals"
		 value="2"
		/>
		<w-input
		 label="过渡时间"
		 name="duration"
		 value="3"
		/>
		<w-button formType="submit" type="primary">
			开始
		</w-button>
	</w-cell-group>
</w-form>
```

```javascript
import {
  CountUp
} from 'path/to/dist/index';
data: {
  count: 0,
  count2: 0,
  count3: 0,
},
handleSubmit(e) {
  const { startVal = 0 , endVal = 3000, decimals = 0, duration = 3000 } = e.detail;
  this.setData({
    count: 0
  } , () => {
    new CountUp(startVal, endVal, decimals, duration, count => this.setData({
      count
    })).start()
  })
},
onShow: function () {
  new CountUp(0, 3000, 0, 3, count => this.setData({
    count
  })).start();
  new CountUp(1000, 2333.33, 2, 5, count2 => this.setData({
    count2
  })).start();
  new CountUp(666, 66666.6666, 4, 6, count3 => this.setData({
    count3
  })).start();
},
```

```css
```

### API

#### 属性

| 属性 |    说明    |  类型  | 默认值 |
| ---- | :--------: | :----: | -----: |
| startVal | 开始值 | number | 0 |
| endVal | 结束值 | number | 0 |
| decimals | 小数点位数 | number | 0 |
| duration | 过渡时间 | number | - |
| callback | 回调 | function | - |
| options | 其他配置 | object | - |

, , , , , 


#### 事件

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |



#### slot

| 名称 | 说明 |
| ---- | ---- |


#### 自定义类名

| 类名       | 说明         |
| ---------- | ------------ |
