import { createRequire } from 'module';
import path from 'path';

const rootDir = path.resolve(__dirname, '../..');
const rootRequire = createRequire(path.join(rootDir, 'package.json'));

describe('minimatch dependency compatibility', () => {
  it.each(['jest-config', 'jest-runtime', '@jest/reporters'])(
    'should preserve glob matching for %s with patched minimatch',
    (packageName) => {
      const packageRequire = createRequire(rootRequire.resolve(packageName));
      const globRequire = createRequire(packageRequire.resolve('glob'));
      const { glob } = packageRequire('glob');

      expect(globRequire('minimatch/package.json').version).toBe('11.0.1');
      expect(glob.sync('src/data-structures/linked-list/LinkedList.*', {
        cwd: rootDir,
        windowsPathsNoEscape: true,
      })).toEqual(['src/data-structures/linked-list/LinkedList.js']);
    },
  );

  it('should preserve TypeScript ESLint default-project matching', () => {
    const parserRequire = createRequire(rootRequire.resolve('@typescript-eslint/typescript-estree'));
    const { minimatch } = parserRequire('minimatch');

    expect(parserRequire('minimatch/package.json').version).toBe('11.0.1');
    expect(minimatch('.config.js', '*.js', { dot: true })).toBe(true);
    expect(minimatch('.config.ts', '*.js', { dot: true })).toBe(false);
  });
});
