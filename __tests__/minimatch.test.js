import { createRequire } from 'module';

const minimatch = createRequire(require.resolve('eslint/package.json'))('minimatch');

describe('minimatch security regression', () => {
  const pattern = `${Array(13).fill('**/a').join('/')}/b`;
  const path = Array(30).fill('a').join('/');

  it('should reject a path with multiple non-adjacent globstars and a mismatched suffix', () => {
    const start = process.hrtime.bigint();
    const result = minimatch(path, pattern);
    const elapsedMs = Number(process.hrtime.bigint() - start) / 1e6;

    expect(result).toBe(false);
    expect(elapsedMs).toBeLessThan(1000);
  });

  it('should preserve matching with multiple non-adjacent globstars', () => {
    expect(minimatch(`${path}/b`, pattern)).toBe(true);
  });

  it('should preserve default hidden-path exclusion', () => {
    expect(minimatch('x/.hidden/b', '**/b')).toBe(false);
    expect(minimatch('x/.hidden/b', '**/b', { dot: true })).toBe(true);
  });
});

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
