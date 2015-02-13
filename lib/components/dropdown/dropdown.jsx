var hg = require('mercury');
var h = hg.h;
var objectToState = require('../../util/objectToState');
var DropdownItem = require('./dropdownItem.jsx');
var DropdownTitle = require('./title.jsx');
// {
//     title: 'Dropdown Title',
//     id: "Some id"
//     items: {
//         type: 'item || header || divider'
//         action: '#',
//         text: 'Item Text'
//     }
// }

function Dropdown(state) {
    return objectToState(state);
}

Dropdown.render = function render(state) {
  var dropdownList = state.items().map(function(item) {
    ddItemState = DropdownItem(item);
    return DropdownItem.render(ddItemState);
  });

  return (
    <div className="dropdown">
      {DropdownTitle.render(state)}
      <ul className="dropdown-menu" role="menu" aria-labelledby={state.id()}>
      {dropdownList}
      </ul>
    </div>
  );
};

module.exports = Dropdown;