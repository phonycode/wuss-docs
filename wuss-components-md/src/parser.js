const traverse = require('@babel/traverse').default;
const { parse } = require('./util');

String.prototype.replaceAll = function(s1, s2) {
  return this.replace(new RegExp(s1, 'gm'), s2);
};

exports.json = function(src, name) {
  function ensure(obj, key) {
    if (obj[key] === void 666) {
      obj[key] = {};
    }
  }

  const classDoc = {
    description: '',
    name,
  };

  function searchDeclaration(declarations, name) {
    for (let i = 0, l = declarations.length; i < l; i++) {
      if (declarations[i].search(name) == 0) {
        return declarations[i].slice(name.length);
      }
    }
    return '';
  }
  function valueNotString(value) {
    if (!value.name && value.elements) {
      return value.elements.map(e => e.name).join(',');
    }
    return value.name;
  }
  const visior = {
    ObjectProperty: function({ node }) {
      const Nname = node.key.name;
      if (Nname === 'properties') {
        classDoc[Nname] = {};
        const declarations = (node.leadingComments &&
          node.leadingComments[0].value
            .replaceAll('\r\n', '')
            .replaceAll(' ', '')
            .replace(/{[a-z]*}/g, '')
            .replace(/\*/g, '')
            .replace(/\|/g, '\\|')
            .split('@param')) || [''];
        classDoc.description = declarations[0];
        node.value.properties.forEach(prop => {
          const key = prop.key.name;
          ensure(classDoc[Nname], key);
          try {
            if (typeof prop.value.name === 'string') {
              classDoc[Nname][key].type = prop.value.name;
              classDoc[Nname][key].value = '-';
            } else {
              classDoc[Nname][key].type = valueNotString(
                prop.value.properties[0].value
              );
              classDoc[Nname][key].value =
                (prop.value.properties[1] &&
                  prop.value.properties[1].value.name) ||
                '-';
            }
          } catch (err) {}
          classDoc[Nname][key].declaration = searchDeclaration(
            declarations,
            key
          );
          return;
        });
      } else if (Nname === 'externalClasses') {
        classDoc[Nname] = node.value.elements.map(e => e.value);
      }
    },
  };

  const ast = parse(src);
  traverse(ast, visior);
  return classDoc;
};

const md = require('./md');

exports.md = md;
