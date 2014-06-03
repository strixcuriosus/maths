var checkpal = function ( num ) {
    var numString = (num).toString();
    var revString = (num).toString().split('').reverse('').join('');
    if ((numString === revString)) {
      return true;
    } else {
      return false;
    }
};


var findProd = function () {
  var pal = 1;
  var prod;
  for (var f2 = 999; f2 > 99; f2--) {
    for (var f1 = 999; f1 > 99; f1--) {
      prod = +f1 * +f2;
      if (checkpal(prod) && pal < prod){
          pal = prod;  
      }
    }    
  }
  return pal;
};

console.log(findProd());


