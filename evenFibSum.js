//calculate the sum of all even fibonacci terms whose values are less than a given cap

var evenFibSum = function( cap ) {
  var total, currentTerm, prevTerm;

  cap = cap || 4000000; // default cap is 4 million
  prevTerm = 0;
  currentTerm = 1;
  total = 0;

  var getNextFibTerm = function (current, previous) {
    var nextval = current + previous;
    previous = current;
    current = nextval;
    if (current < cap) {
      if (current % 2 === 0 ) {
        total += current;
      }
      getNextFibTerm(current, previous);
    } else {
      return;
    }
  }
  getNextFibTerm(currentTerm, prevTerm);
  return total;
}