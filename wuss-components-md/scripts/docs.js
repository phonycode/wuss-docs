const { json, md } = require('../src/parser');
const fs = require('fs');
const distPath = '../../wuss/dist';
const docsPath = '../docs/component_mds';
const pagePath = '../../wuss/pages';
const dist = fs.readdirSync(pagePath);

dist.forEach(dir => {
  if (dir === 'index' || dir === 'assets') return;
  writeMd(dir);
});
function writeMd(name) {
  const source = fs.readFileSync(distPath + '/' + name + '/index.js', 'utf8');
  const wxml = fs.readFileSync(pagePath + '/' + name + '/index.wxml', 'utf8');
  const obj = json(source, name.replace('w-', ''));
  try {
    fs.writeFileSync(
      `${docsPath}/${name.replace('w-', '')}.md`,
      md(obj, wxml).md,
      {
        flag: 'wx',
      }
    );
  } catch (err) {
    console.log('error  : ' + name);
  }
}
