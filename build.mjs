import * as esbuild from 'esbuild'
import * as tsup from 'tsup'
import { cssPlugin } from './plugin.mjs'

esbuild.build({
  bundle: true,
  entryPoints: ['src/index.ts'],
  external: ['react', 'react-dom'],
  format: 'cjs',
  outdir: 'dist',
  plugins: [cssPlugin],
  sourcemap: true,
})

// NOTE: tsupの型情報生成はユーティリティが高いため利用するが、tsupのビルドは使用されるesbuildが最新ではないため利用しない
// @see: https://github.com/radix-ui/primitives/blob/157415ed1f34c53b5afbf53a047895ed6a7f957f/build.mjs#L30-L36
tsup.build({
  dts: {
    compilerOptions: {
      incremental: false,
    },
    entry: ['src/index.ts'],
    only: true,
  },
  entry: ['src/index.ts'],
})
