// unique関数の実装

function unique(array) {
  return array.reduce(function(previous, t){
      let s = previous.find(p => {
          return p === t;
      });
      if (!s) {
          previous.push(t);
      }
      return previous;
  }, []);
}

// 使用例
let numbers = [1,1,2,3,4,4];
unique(numbers); // [1,2,3,4]
