// 続・関数のデフォルト引数を使ってみよう

function addOffset(style = {}) {

  style.offset = '10px';

  return style;
}
