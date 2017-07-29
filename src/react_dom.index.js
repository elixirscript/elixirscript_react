import React from 'react';
import ReactDOM from 'react-dom';

function render(element, container_query) {
  const container = document.querySelector(container_query);
  return ReactDOM.render(element, container);
}

export default {
  render
};
