// 管理者権限を持ったユーザーを探そう

let users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

let admin;

admin = users.find(function(user) {
   return user.admin;
});
