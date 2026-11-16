import deepmerge from 'deepmerge';

describe('deepmerge prototype-poisoning mitigation', () => {
  const source = JSON.parse('{"__proto__":{"isAdmin":true}}');

  it('should reject poisoning a null-prototype target', () => {
    expect(() => deepmerge(Object.create(null), source)).toThrow(
      expect.objectContaining({ code: 'ERR_PROTO_ACCESS' }),
    );
  });

  it('should reject poisoning a nested null placeholder', () => {
    expect(() => deepmerge({ session: null }, { session: source })).toThrow(
      expect.objectContaining({ code: 'ERR_PROTO_ACCESS' }),
    );
  });

  it('should reject poisoning through an own target key', () => {
    expect(() => deepmerge(source, {})).toThrow(
      expect.objectContaining({ code: 'ERR_PROTO_ACCESS' }),
    );
  });

  it('should preserve ordinary nested object and array merging', () => {
    expect(deepmerge(
      { session: { enabled: true }, values: [1] },
      { session: { name: 'example' }, values: [2] },
    )).toEqual({
      session: { enabled: true, name: 'example' },
      values: [1, 2],
    });
  });
});
