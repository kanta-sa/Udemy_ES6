// オブジェクトリテラルでリファクタリング

const color = 'red';

const Car = {
  color,
  drive() {
    return 'ブーーン!';
  },
  getColor() {
    return this.color;
  }
};
