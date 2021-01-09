// 配列の分割代入

const classes = [
  [ '化学', '1時限目', '鈴木先生' ],
  [ '物理', '2時限目', '佐藤先生'],
  [ '数学', '3時限目', '木村先生' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return {
        subject,
        time,
        teacher
    };
});

// const classesAsObject = [{ subject: '化学', time: '1時限目', teacher: '鈴木先生'}]
