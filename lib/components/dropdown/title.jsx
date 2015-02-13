var objectToState = require('../../util/objectToState');
var hg = require('mercury');
var h = hg.h;

function Title(state) {
  return objectToState(state);
}

Title.render = function render(state) {
  return (
    <button
      className='btn btn-default'
      attributes={{
        'data-toggle': 'dropdown',
        'aria-expanded': 'true'
      }}>{state.title()}
    <span className="caret"></span>
    </button>
  );
};

module.exports = Title;