var hg = require('mercury');
module.exports = function objectToState(state) {
    for (var prop in state) {
        if (state.hasOwnProperty(prop)) {
            state[prop] = hg.value(state[prop]);
        }
    }
    return state;
};