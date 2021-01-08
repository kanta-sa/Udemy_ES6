// reduceでプロパティを集約

let desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

let deskTypes = desks.reduce(function(previous, desk) {
    if (desk.type === 'sitting') {
        previous.sitting++;
        return previous;
    }
    if (desk.type === 'standing') {
        previous.standing++;
        return previous;
    }
}, { sitting: 0, standing: 0 });

deskTypes;
