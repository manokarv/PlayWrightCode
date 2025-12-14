function Search(num, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            return true;
        }
    }
    return false;
}
var word = [10, 20, 30, 40, 50];
console.log(Search(20, word));
