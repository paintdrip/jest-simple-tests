const reverseString = require('./tasks/task_01');

// test(
//     'Проверка на реверс заданной строки',
//     () => {
//         expect(reverseString('chelik')).toBe('kilehc');
//     }
// );

describe('Три способа проверки', () => {
  const testCases = [
    {
      inString: 'hi',
      expected: 'ih',
    },
    {
      inString: 'flex',
      expected: 'xelf',
    },
    {
      inString: '12345',
      expected: '54321',
    },
  ];
  testCases.forEach((test) => {
    it(`Получили : ${test.inString} ожидается: ${test.expected}`, () => {
      const res = reverseString(test.inString);
      expect(res).toBe(test.expected);
    });
  });
});
