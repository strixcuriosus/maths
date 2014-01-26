function mult35(num) {
    function sum(array){
        var ans = 0;
        for (var i = 0, len = array.length; i < len; i++){
            ans += array[i];
        }

        return ans;
    }

    var multiples =[];
    for (var j = 1; j < num; j++){
        if ((j % 3 == 0) || (j % 5 == 0)){
            multiples.push(j);
        }
    }

    return sum(multiples);

}

console.log(mult35(10));
console.log(mult35(100));
console.log(mult35(1000));
