var objectToState = require('../../util/objectToState');
var hg = require('mercury');
var h = hg.h;

function DropdownItem(state) {
  return objectToState(state);
}

function renderItem(state) {
  return (
    <li role="presentation">
      <a role="menuitem" tabindex="-1" href={state.action()}>{state.text()}</a>
    </li>
  );
}

function renderHeader(state) {
  return (
    <li role="presentation" className="dropdown-header">{state.text()}</li>
  );
}

function renderDivider(state) {
  return (
    <li role="presentation" className="divider"></li>
  );
}

DropdownItem.render = function render(state) {
  var type = state.type();
  if (type === 'item') {
    return renderItem(state);
  }
  if (type === 'header') {
    return renderHeader(state);
  }
  if (type === 'divider') {
    return renderDivider(state);
  }
  throw "Invalid dropdown item type. Expected item || header || divider. Got " + type;
};

module.exports = DropdownItem;