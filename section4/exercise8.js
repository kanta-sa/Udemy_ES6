// reject関数の実装

function reject(array, iteratorFunction) {
 return array.filter(function(t) {
     return !iteratorFunction(t)
 });
}

// 使用例
let numbers = [10, 20, 30];
let lessThanFifteen = reject(numbers, function(number){
  return number > 15;
});

lessThanFifteen; // [10]
