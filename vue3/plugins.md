### unplugin-auto-import[https://github.com/antfu/unplugin-auto-import]
自动引入api

```javascript
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vue',]
    }),
  ]
})
```

### unplugin-vue-components[https://github.com/antfu/unplugin-vue-components]
自动导入组件

```javascript
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components(),
  ]
})
```
