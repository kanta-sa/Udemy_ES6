// generator同士のデリゲーション(委譲)

const testingTeam = {
  lead: '典子',
  testor: '隆'
}

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: '開発部',
  lead: '太郎',
  manager: '花子',
  engineer: '次郎'
}

// generator
function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator; // 委譲
}
// yield*の後はgenerator
// yield* は次のgeneratorにyieldがあるかもよということを表している

// generator
function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.testor;
}

const names = [];
for(let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}
names;
