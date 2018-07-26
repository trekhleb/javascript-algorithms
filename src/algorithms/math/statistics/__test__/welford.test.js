import RunningStatistics from '../welford';

describe('Welford Running Statistics', () => {
  it('should initialize properly', () => {
    const stats = new RunningStatistics();
    expect(stats.size).toBe(0);
    expect(stats.mean).toBe(0);
    expect(stats.variance()).toBe(0);
    expect(stats.sampleVariance()).toBe(0);
  });

  it('should not overflow', () => {
    const len = 1000;
    const dat = new Array(len).fill(Number.MAX_VALUE);

    const stats = new RunningStatistics();
    dat.forEach(val => stats.append(val));

    expect(stats.size).toBe(len);
    expect(stats.mean).toBe(Number.MAX_VALUE);
    expect(stats.variance()).toBe(0);
    expect(stats.sampleVariance()).toBe(0);
  });

  it('should not underflow', () => {
    const len = 1000;
    const dat = new Array(len).fill(-Number.MAX_VALUE);

    const stats = new RunningStatistics();
    dat.forEach(val => stats.append(val));

    expect(stats.size).toBe(len);
    expect(stats.mean).toBe(-Number.MAX_VALUE);
    expect(stats.variance()).toBe(0);
    expect(stats.variance()).toBe(0);
  });

  it('should correctly calculate values', () => {
    const len = 1000;
    const max = 1000;
    const dat = new Array(len).fill().map(() => Math.floor(Math.random() * max) - (max / 2));

    const stats = new RunningStatistics();
    dat.forEach(val => stats.append(val));

    const mean = dat.reduce((a, b) => (a + b), 0) / len;
    const ssum = dat.map(val => ((val - mean) ** 2)).reduce((a, b) => (a + b), 0);

    expect(stats.size).toBe(len);
    expect(stats.mean).toBeCloseTo(mean);
    expect(stats.variance()).toBeCloseTo(ssum / len);
    expect(stats.sampleVariance()).toBeCloseTo(ssum / (len - 1));
  });
});
