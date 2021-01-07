// オブジェクトの配列から興味のある値だけを引き抜く

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights;

heights = images.map(function(image) {
   return image.height;
});
