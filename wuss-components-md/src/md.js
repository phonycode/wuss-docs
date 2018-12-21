module.exports = function MD(json, wxml) {
  const {
    description,
    name,
    properties: props,
    externalClasses: external,
  } = json;
  const md = `
 # ${name}

 
 ### 使用指南

 在 page.json 中引入组件
 
 \`\`\`json
 "usingComponents": {
   "w-${name.toLowerCase()}": "path/to/w-${name.toLowerCase()}/index",
 }
 \`\`\`

 ### 代码演示

 \`\`\`html
${wxml}
\`\`\`

### API

#### Attribute 属性
|属性| 说明 |类型|默认值|
| ------------- |:-------------:|:-----:| -----:|-----:|
${Object.keys(props)
    .map(key => {
      return `|${key}|${props[key].declaration}|${props[
        key
      ].type.toLowerCase()}|${props[key].value}|`;
    })
    .join('\n')}

#### Event 事件
| 事件名     | 说明                                   | 参数 |
| ---------- | -------------------------------------- | ---- |


#### Slot 插槽
| 名称 | 说明       |
| ---- | ---------- |

#### Class 自定义类名
| 类名                    | 说明                  |
| ----------------------- | --------------------- |
${external
    .map(key => {
      return `|${key}|无|`;
    })
    .join('\n')}    
    `;
  return { md, name, description };
};
