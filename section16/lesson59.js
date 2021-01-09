// generatorと再帰処理
// 木構造

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  // クラス内でのSymbol.iteratorの定義の仕方
  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child; // childがあれば
    }
  }
}

const children = [
  new Comment('賛成！！', []),
  new Comment('反対！！', []),
  new Comment('うーん。。。', [])
];

const tree = new Comment('非常に良い記事です！', children);

const values = [];
for (let value of tree) {
  values.push(value);
}
values;
