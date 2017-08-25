import React from 'react';

function mapToObject(map) {
  const object = {};

  for (const [key, value] of map.entries()) {
    if (value instanceof Map) {
      object[key] = mapToObject(value);
    } else {
      object[key] = value;
    }
  }

  return object;
}

function createElement(tag, attributes, elements) {
  const props = mapToObject(attributes);
  return React.createElement(tag, props, ...elements);
}

export default {
  createElement
};
