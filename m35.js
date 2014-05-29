var mult3and5sum = function (num) {
    var sum = function (arr, condition){
        var ans = 0;
        for (var i = 0, len = arr.length; i < len; i++){
            if (condition(arr[i])) {
                ans += arr[i];                
            }
        }
        return ans;
    }

    var checkDivisibility = function (numToCheck, factor) {
        return numToCheck % factor === 0;
    }

    var checkDiv3or5 = function (numToCheck) {
        return checkDivisibility(numToCheck, 3) || checkDivisibility(numToCheck, 5);
    }

    var range = function (num) {
        var result = [];
        for (var i = 0; i < num; i++) {
            result.push(i);
        }
        return result;
    }

    return sum(range(num), checkDiv3or5);

}

// console.log(mult35(1000));
