import type { StorybookConfig } from '@storybook/react-vite'
import { createStorybookConfig } from 'cg-config/src/storybook'
import { mergeConfig } from 'vite'

const config: StorybookConfig = createStorybookConfig({
  viteConfigPath: 'packages/web/ui/.config/vite.ts',
  viteFinal: (config: StorybookConfig): StorybookConfig => {
    return mergeConfig(config, {
      define: {
        'process.env': process.env,
      },
      plugins: [],
    })
  },
})

export default config
