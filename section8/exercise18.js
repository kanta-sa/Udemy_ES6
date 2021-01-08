// constとletでリファクタリング

const statuses = [
  { code: 'OK', response: '正常に完了しました' },
  { code: 'FAILED', response: 'エラーが発生しました' },
  { code: 'PENDING', response: '処理中です...' }
];
let message = '';
const currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
