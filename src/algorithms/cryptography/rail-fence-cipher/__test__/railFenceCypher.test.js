import encodeRailFenceCipher from '../encodeRailFence';
import decodeRailFenceCipher from '../decodeRailFence';

describe('rail fence cipher', () => {
  it('encodes a string correctly for base=3', () => {
    expect(encodeRailFenceCipher('', 3)).toBe('');
    expect(encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 3)).toBe('WECRLTEERDSOEEFEAOCAIVDEN');
    expect(encodeRailFenceCipher('Hello, World!', 3)).toBe('Hoo!el,Wrdl l');
  });

  it('decodes a string correctly for base=3', () => {
    expect(decodeRailFenceCipher('', 3)).toBe('');
    expect(decodeRailFenceCipher('WECRLTEERDSOEEFEAOCAIVDEN', 3)).toBe('WEAREDISCOVEREDFLEEATONCE');
    expect(decodeRailFenceCipher('Hoo!el,Wrdl l', 3)).toBe('Hello, World!');
  });

  it('encodes a string correctly for base=4', () => {
    expect(encodeRailFenceCipher('', 4)).toBe('');
    expect(encodeRailFenceCipher('THEYAREATTACKINGFROMTHENORTH', 4)).toBe('TEKOOHRACIRMNREATANFTETYTGHH');
  });

  it('decodes a string correctly for base=4', () => {
    expect(decodeRailFenceCipher('', 4)).toBe('');
    expect(decodeRailFenceCipher('TEKOOHRACIRMNREATANFTETYTGHH', 4)).toBe('THEYAREATTACKINGFROMTHENORTH');
  });
});
