// 残高から預金口座のアカウントを探そう

let accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

let account;

account = accounts.find(function(account){
    return account.balance === 12;
});
