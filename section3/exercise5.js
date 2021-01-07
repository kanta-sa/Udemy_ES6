// pluck関数の実装

function pluck(array, property) {
    // pluck関数の中身を実装してください
    var t = array.map(function(s) {
       return s[property];
    });
    return t;
}

var colorObjects = [{ color: '赤' }, { color: '青' }, { color: '黄色' }];

var colorNames = pluck(colorObjects, 'color');
