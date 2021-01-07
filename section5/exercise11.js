// findWhere関数の実装

function findWhere(array, criteria) {
  return array.find(function(a){
      return a.height === criteria['height'];
  });
}

// 使用例
findWhere(ladders, { height: '6m' });
