import * as fs from 'node:fs'
import * as path from 'node:path'

export const cssPlugin = {
  name: 'css',
  setup(build) {
    build.onEnd(async (result) => {
      if (result.errors.length > 0) {
        return
      }

      const oldPath = path.join(process.cwd(), 'dist', 'index.css')
      const newPath = path.join(process.cwd(), 'style.css')

      try {
        await fs.promises.access(oldPath)
        // dist/index.cssが存在すれば、style.cssへ移動
        await fs.promises.rename(oldPath, newPath)
        console.log('CSS moved from dist/index.css to style.css')
      } catch (err) {
        // dist/index.cssが存在しない場合はエラーを無視
        console.log('No dist/index.css found, skipped moving.')
      }
    })
  },
}
