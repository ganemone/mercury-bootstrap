var hg = require('mercury');
var h = hg.h;
var Dropdown = require('../lib/components/dropdown/dropdown.jsx');

function App() {
    return hg.state({});
}

var items = [
  {
    type: 'item',
    text: 'First Item',
    action: '#'
  },
  {
    type: 'item',
    text: 'Second Item',
    action: '#'
  }
];

App.render = function render(state) {
    var ddState = Dropdown({
      'id': 'dropdown',
      'title': 'Dropdown',
      'items': items
    });
    return (
        <div>
          {Dropdown.render(ddState)}
        </div>
    );
};

hg.app(document.body, App(), App.render);