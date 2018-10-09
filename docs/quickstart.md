## 快速上手

在开始使用 Wuss Weapp 之前，你需要先阅读 [微信小程序自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/) 的相关文档。

### 如何使用

#### 方法一 [推荐] (通过npm安装依赖并在小程序构建npm模块)

1. 通过使用shell命令或git定位到当前小程序开发目录，然后使用npm或者yarn安装依赖。

```shell
npm install --production wuss-weapp
```

或者

```shell
yarn add --production wuss-weapp
```

2. 当依赖安装完成后即可在微信小程序开发者工具里点击 [工具] => [构建npm]，此时若出现弹窗则记得吧 “使用npm模块” 勾上，若无弹窗则待构建完成后在详情里面手动勾上 “使用npm模块”。


3. 构建完成后即可添加需要的组件。在页面的 json 中配置：

```json
"usingComponents": {
  "w-button": "wuss-weapp/w-button/index"
}
```

4. 在 wxml 中使用组件：

```html
<w-button type="info" bind:click="buttonClick">这是一个按钮</w-button>
```

5. 在JavaScript中使用:

```javascript
import { Alert, Toast } from 'wuss-weapp';

Alert({
  title: '提示',
  content: 'wuss weapp is good',
});

Toast.show({
  message: 'wuss小程序UI库',
});

```

#### 方法二(通过clone当前项目的dist拷贝到自己项目中使用)

1. 到 [GitHub](https://github.com/phonycode/wuss-weapp) 下载 Wuss Weapp 的代码，将 `dist` 目录拷贝到自己的项目中。然后按照如下的方式使用组件，以 Button 为例，其它组件在对应的文档页查看：

3. 添加需要的组件。在页面的 json 中配置（路径根据自己项目位置配置）：

```json
"usingComponents": {
  "w-button": "/dist/w-button/index"
}
```

2. 在 wxml 中使用组件：

```html
<w-button type="info" bind:click="buttonClick">这是一个按钮</w-button>
```

### 预览所有组件

我们内置了所有组件的示例，您可以扫描下方的的小程序码体验

<img width="200" src="./.vuepress/qrcode.jpg">

或按以下方式在微信开发者工具中查看：

```shell
git clone https://github.com/phonycode/wuss-weapp.git
```

然后，直接将项目在微信开发者工具中打开即可。
