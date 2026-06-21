import luhnAlgorithm from '../luhnAlgorithm';

describe('luhnAlgorithm', () => {
  it('it works for single digit numbers', () => {
    expect(luhnAlgorithm(0)).toBe(true);
    expect(luhnAlgorithm(1)).toBe(false);
    expect(luhnAlgorithm(2)).toBe(false);
    expect(luhnAlgorithm(3)).toBe(false);
    expect(luhnAlgorithm(4)).toBe(false);
    expect(luhnAlgorithm(5)).toBe(false);
    expect(luhnAlgorithm(6)).toBe(false);
    expect(luhnAlgorithm(7)).toBe(false);
    expect(luhnAlgorithm(8)).toBe(false);
    expect(luhnAlgorithm(9)).toBe(false);
  });

  it('it works for double digit numbers', () => {
    expect(luhnAlgorithm(40)).toBe(false);
    expect(luhnAlgorithm(41)).toBe(false);
    expect(luhnAlgorithm(42)).toBe(true);
    expect(luhnAlgorithm(43)).toBe(false);
    expect(luhnAlgorithm(44)).toBe(false);
    expect(luhnAlgorithm(45)).toBe(false);
    expect(luhnAlgorithm(46)).toBe(false);
    expect(luhnAlgorithm(47)).toBe(false);
    expect(luhnAlgorithm(48)).toBe(false);
    expect(luhnAlgorithm(49)).toBe(false);
  });

  it('it works for longer odd numbers', () => {
    expect(luhnAlgorithm(49927398710)).toBe(false);
    expect(luhnAlgorithm(49927398711)).toBe(false);
    expect(luhnAlgorithm(49927398712)).toBe(false);
    expect(luhnAlgorithm(49927398713)).toBe(false);
    expect(luhnAlgorithm(49927398714)).toBe(false);
    expect(luhnAlgorithm(49927398715)).toBe(false);
    expect(luhnAlgorithm(49927398716)).toBe(true);
    expect(luhnAlgorithm(49927398717)).toBe(false);
    expect(luhnAlgorithm(49927398718)).toBe(false);
    expect(luhnAlgorithm(49927398719)).toBe(false);
  });

  it('it works for longer even numbers', () => {
    expect(luhnAlgorithm(1234567812345670)).toBe(true);
    expect(luhnAlgorithm(12345678123456701)).toBe(false);
    expect(luhnAlgorithm(12345678123456702)).toBe(false);
    expect(luhnAlgorithm(12345678123456703)).toBe(false);
    expect(luhnAlgorithm(12345678123456704)).toBe(false);
    expect(luhnAlgorithm(12345678123456705)).toBe(false);
    expect(luhnAlgorithm(12345678123456706)).toBe(false);
    expect(luhnAlgorithm(12345678123456707)).toBe(false);
    expect(luhnAlgorithm(12345678123456708)).toBe(false);
    expect(luhnAlgorithm(12345678123456709)).toBe(false);
  });
});

describe('luhnAlgorithm', () => {
  it('it works for strings', () => {
    expect(luhnAlgorithm('0')).toBe(true);
    expect(luhnAlgorithm('1')).toBe(false);
    expect(luhnAlgorithm('2')).toBe(false);
    expect(luhnAlgorithm('3')).toBe(false);
    expect(luhnAlgorithm('4')).toBe(false);
    expect(luhnAlgorithm('5')).toBe(false);
    expect(luhnAlgorithm('6')).toBe(false);
    expect(luhnAlgorithm('7')).toBe(false);
    expect(luhnAlgorithm('8')).toBe(false);
    expect(luhnAlgorithm('9')).toBe(false);

    expect(luhnAlgorithm('40')).toBe(false);
    expect(luhnAlgorithm('41')).toBe(false);
    expect(luhnAlgorithm('42')).toBe(true);
    expect(luhnAlgorithm('43')).toBe(false);
    expect(luhnAlgorithm('44')).toBe(false);
    expect(luhnAlgorithm('45')).toBe(false);
    expect(luhnAlgorithm('46')).toBe(false);
    expect(luhnAlgorithm('47')).toBe(false);
    expect(luhnAlgorithm('48')).toBe(false);
    expect(luhnAlgorithm('49')).toBe(false);

    expect(luhnAlgorithm('49927398710')).toBe(false);
    expect(luhnAlgorithm('49927398711')).toBe(false);
    expect(luhnAlgorithm('49927398712')).toBe(false);
    expect(luhnAlgorithm('49927398713')).toBe(false);
    expect(luhnAlgorithm('49927398714')).toBe(false);
    expect(luhnAlgorithm('49927398715')).toBe(false);
    expect(luhnAlgorithm('49927398716')).toBe(true);
    expect(luhnAlgorithm('49927398717')).toBe(false);
    expect(luhnAlgorithm('49927398718')).toBe(false);
    expect(luhnAlgorithm('49927398719')).toBe(false);

    expect(luhnAlgorithm('1234567812345670')).toBe(true);
    expect(luhnAlgorithm('12345678123456701')).toBe(false);
    expect(luhnAlgorithm('12345678123456702')).toBe(false);
    expect(luhnAlgorithm('12345678123456703')).toBe(false);
    expect(luhnAlgorithm('12345678123456704')).toBe(false);
    expect(luhnAlgorithm('12345678123456705')).toBe(false);
    expect(luhnAlgorithm('12345678123456706')).toBe(false);
    expect(luhnAlgorithm('12345678123456707')).toBe(false);
    expect(luhnAlgorithm('12345678123456708')).toBe(false);
    expect(luhnAlgorithm('12345678123456709')).toBe(false);
  });
});
