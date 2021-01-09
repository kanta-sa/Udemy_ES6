// 分割代入と再帰処理

const numbers = [1,2,3];

function double([ head, ...rest ]) {
  if (!head) { return []; }

  return [ 2 * head, ...double(rest) ];
}
