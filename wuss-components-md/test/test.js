const { json, md } = require('../src/parser');
const fs = require('fs');
const pathUrl = './test/w-badge/';
const source = fs.readFileSync(pathUrl + 'index.js', 'utf8');
const wxml = fs.readFileSync(pathUrl + 'index.wxml', 'utf8');

const name = 'Badge';
const obj = json(source, name);
try {
  fs.writeFileSync(`./test/badge/${name}.md`, md(obj, wxml).md, { flag: 'wx' });
} catch (err) {}
