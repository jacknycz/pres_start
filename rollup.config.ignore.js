import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import typescript from '@rollup/plugin-typescript';

export default [
  // Main bundle
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }),
      commonjs({
        include: /node_modules/,
        extensions: ['.js', '.jsx']
      }),
      // Temporarily disable TypeScript compilation since we're using Babel
      // typescript({ 
      //   tsconfig: './tsconfig.json',
      //   exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.tsx']
      // }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        presets: [
          '@babel/preset-env',
          ['@babel/preset-react', { runtime: 'automatic' }]
        ],
        plugins: [
          ['@babel/plugin-transform-runtime', {
            useESModules: true
          }]
        ]
      }),
      postcss({
        modules: false,
        extract: true,
        minimize: true,
        sourceMap: true,
      }),
      terser(),
    ],
    external: ['react', 'react-dom', 'tailwindcss'],
  },
  // Temporarily disable TypeScript declarations until we have .d.ts files
  // {
  //   input: 'dist/types/index.d.ts',
  //   output: [{ file: 'dist/index.d.ts', format: 'es' }],
  //   plugins: [dts()],
  // },
  // Main bundle
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.esm.js',
        format: 'es',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }),
      commonjs(),
      postcss(),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        presets: [
          '@babel/preset-env',
          ['@babel/preset-react', { runtime: 'automatic' }]
        ],
      }),
      terser(),
    ],
  },
  // Serve configuration for development
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
    },
    plugins: [
      serve({
        open: true,
        contentBase: ['dist'],
        port: 3000,
      }),
      livereload('dist'),
    ],
  },
];
