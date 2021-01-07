// 通信中のリクエストの確認

let requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

let inProgress;

inProgress = requests.some(request => {
   return request.status === 'pending';
});
