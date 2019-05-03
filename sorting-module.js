var numbers = [];

function sort() {
  numbers.sort((a, b) => (a > b));
  return numbers;
}

module.exports = {
  addToArray: function(num) {
    numbers.push(num);
  },
  sorted: function(){
    return sort();
  }
};