// find the largest prime factor of num
function lpf(num) { 
  var composites = {};
  for(var i = 2; i <= num; i++) {
    for(var j = 2; i*j <= num; j++) {
        composites[i*j] = true;
    }
  }
  var primes = {1: true, 2: true};
  for (var k = 3; k <= num; k++) {
    if (!(composites[k])){
        primes[k] = true;
    }
  }

  for (var l = 1; l <= num; l++){
    if(primes[num/l]){
        return (num/l);
    }
  }
}

console.log(lpf(13195));