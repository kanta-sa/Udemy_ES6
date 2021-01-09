// 分割代入する

const profile = {
  title: 'エンジニア',
  department: '開発部'
};

function isEngineer(profile) {
  const { title, department } = profile;
  return title === 'エンジニア' && department === '開発部';
}
