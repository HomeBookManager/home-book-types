import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

// utils
import { getFiles } from './scripts/buildUtils';

const extensions = ['.ts'];
const excludeExtensions = [];

export default {
  input: [
    './src/index.ts',
    ...getFiles('./src/types', extensions, excludeExtensions),
  ],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    typescript({
      declaration: true,
      declarationDir: 'dist',
      tsconfig: './tsconfig.json',
    }),
    terser(),
    resolve(),
    commonjs(),
  ],
};
