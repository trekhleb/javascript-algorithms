import { encodeRailFenceCipher, decodeRailFenceCipher } from '../railFenceCipher';

describe('railFenceCipher', () => {
  it('encodes a string correctly for base=3', () => {
    expect(encodeRailFenceCipher('', 3)).toBe('');
    expect(encodeRailFenceCipher('12345', 3)).toBe(
      '15243',
    );
    expect(encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 3)).toBe(
      'WECRLTEERDSOEEFEAOCAIVDEN',
    );
    expect(encodeRailFenceCipher('Hello, World!', 3)).toBe(
      'Hoo!el,Wrdl l',
    );
  });

  it('decodes a string correctly for base=3', () => {
    expect(decodeRailFenceCipher('', 3)).toBe('');
    expect(decodeRailFenceCipher('WECRLTEERDSOEEFEAOCAIVDEN', 3)).toBe(
      'WEAREDISCOVEREDFLEEATONCE',
    );
    expect(decodeRailFenceCipher('Hoo!el,Wrdl l', 3)).toBe(
      'Hello, World!',
    );
    expect(decodeRailFenceCipher('15243', 3)).toBe(
      '12345',
    );
  });

  it('encodes a string correctly for base=4', () => {
    expect(encodeRailFenceCipher('', 4)).toBe('');
    expect(encodeRailFenceCipher('THEYAREATTACKINGFROMTHENORTH', 4)).toBe(
      'TEKOOHRACIRMNREATANFTETYTGHH',
    );
  });

  it('decodes a string correctly for base=4', () => {
    expect(decodeRailFenceCipher('', 4)).toBe('');
    expect(decodeRailFenceCipher('TEKOOHRACIRMNREATANFTETYTGHH', 4)).toBe(
      'THEYAREATTACKINGFROMTHENORTH',
    );
  });
});
