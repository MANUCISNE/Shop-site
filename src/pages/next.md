OBJETIVO DO NEXT: o usuário entra com contato primeiro com o servidor e depois com o front propriamente dito

## Para criar o projeto em next usa-se no terminal:

npx create-next-app@latest

## Biblioteca alternativa para o styled-components:

- @stitches/react

1. npm install @stitches/react
2. criar uma pasta styles com um arquivo index.ts
3. dentro do index.ts:
    ```tsx
    
    import { createStitches } from '@stitches/react'

    export const {
      config,
      styled,
      css,
      globalCss,
      keyframes,
      getCssText,
      theme,
      createTheme
    } = createStitches({
        theme: {
        colors: {
        rocketseat: '#8257e6'
        }
      }
    })
    
    ```
4. 

