import { createRequire } from 'module';

const requireFromEslint = createRequire(require.resolve('eslint'));
const minimatch = requireFromEslint('minimatch');

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
