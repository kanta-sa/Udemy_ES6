// 全員回答済みかどうか確認する

let users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

let hasSubmitted;

hasSubmitted = users.every(user => {
   return user.hasSubmitted;
});
