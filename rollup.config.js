import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

// utils
import { getFiles } from './scripts/buildUtils';

const extensions = ['.ts'];
const excludeExtensions = [];

export default {
  input: [
    './src/index.ts',
    ...getFiles('./src/constants', extensions, excludeExtensions),
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
