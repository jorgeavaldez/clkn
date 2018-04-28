const main = require('../src/time');

describe('index.test.js', async () => {
  describe('parseTime', async () => {
    it('should accept a time and return a moment time', async () => {
      const testTime = '330pm';

      const result = main.parseTime(testTime);
      expect(result.format()).toMatchSnapshot();
    });
  });

  describe('timeDiff', async () => {
    it('should accept two times and return the difference', async () => {
      let startTime = '330pm';
      let endTime = '430pm';

      expect(main.timeDiff(startTime, endTime)).toEqual(1);

      endTime = '630pm';
      expect(main.timeDiff(startTime, endTime)).toEqual(3);

      endTime = '230pm';
      expect(main.timeDiff(startTime, endTime)).toEqual(-1);

      endTime = '200pm';
      expect(main.timeDiff(startTime, endTime)).toEqual(-1.5);
    });
  });
});
