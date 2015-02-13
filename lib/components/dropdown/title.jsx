var objectToState = require('../../util/objectToState');
var hg = require('mercury');
var h = hg.h;

function Title(state) {
  return objectToState(state);
}

Title.render = function render(state) {
  var test = 'test';
  return h('button.btn', {
    'type': 'button',
    attributes: {
      'data-toggle': 'dropdown',
      'aria-expanded': 'true',
    }
  }, [
    state.title(),
    h('span.caret')
  ]);
};

module.exports = Title;