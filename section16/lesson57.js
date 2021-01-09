// generatorとSymbol.iterator

const testingTeam = {
  lead: '典子',
  testor: '隆',
  [Symbol.iterator]: function* () {
    yield this.lead; // thisはオブジェクトの中のkeyを利用することを明示している
    yield this.testor;
  }
}
// [Symbol.iterator]
// ES6の動的プロパティ

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: '開発部',
  lead: '太郎',
  manager: '花子',
  engineer: '次郎',
  [Symbol.iterator]: function* (){
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
}
// yield* 次のiteratorに仕事を託す
// yieldがあれば行う

const names = [];
for(let name of engineeringTeam) {
  names.push(name);
}
// for...ofは'Symbol.iterator'があるかどうかを探しにいく

names;
