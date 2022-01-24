import { defineConfig } from 'vite-plugin-windicss'
import plugin from 'windicss/plugin'

export default defineConfig({
  attributify: true,
  darkMode: 'class',
  plugins: [
    plugin(
      ({ addUtilities, addDynamic }) => {
        addUtilities(
          {
            '.aspect-square': {
              'aspect-ratio': '1 / 1'
            }
          },
          { layer: 'components' }
        )
        addDynamic(
          'aspect',
          ({ Utility, Style }) => {
            // aspect-h/w
            const value = Utility.handler.handleFraction().value
            if (value) {
              return Style.generate(Utility.class, {
                aspectRatio: `${parseFloat(value)} / 100`
              })
            }
          },
          {
            layer: 'components',
            group: 'aspectRatio',
            completions: ['aspect-{fraction}']
          }
        )
      },
      {
        theme: {
          aspectRatio: {}
        },
        variants: {
          aspectRatio: ['responsive']
        }
      }
    )
  ]
})
