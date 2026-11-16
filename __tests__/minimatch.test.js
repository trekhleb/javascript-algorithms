import { createRequire } from 'module';

const minimatch = createRequire(require.resolve('eslint/package.json'))('minimatch');

describe('minimatch dependency', () => {
  it('preserves ordinary glob matching', () => {
    expect(minimatch('src/example.js', '**/*.js')).toBe(true);
    expect(minimatch('src/example.txt', '**/*.js')).toBe(false);
  });

  it('bounds backtracking for non-adjacent globstars (GHSA-7r86-cg39-jmmj)', () => {
    const pattern = Array(11).fill('**/a').join('/').concat('/b');
    const path = Array(30).fill('a').join('/');
    const start = Date.now();

    expect(minimatch(path, pattern)).toBe(false);
    expect(Date.now() - start).toBeLessThan(1000);
  });
});
