// generator アスタリスクをつける
function* shopping() {
  // 歩道

  // 歩道を歩いてお店にいく

  //　お店に到着したのでお金を持ってお店に入る
  const stuffFromStore = yield 'お金';

  // コインランドリに到着したので、服を持って入る
  const cleanClothes = yield '汚れた服';

  // 家に歩いて帰る
  return [stuffFromStore, cleanClothes];
}

// お店関連の世界
const gen = shopping();
gen.next(); // 家から歩道に出る
gen.next('日用品'); // お店で買い物をして日用品を持って歩道に戻る

gen.next('綺麗な服');

// yieldは複数回呼び出せる
