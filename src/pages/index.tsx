import { styled } from "../styles"

// na lib stitches o styled será uma função, onde o primeiro parametro será a tag html e o segundo parametro será um objeto JS com estilização
const Button = styled('button', {
  backgroundColor: "$rocketseat",
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <Button>
      <span>Teste</span>
      Enviar
    </Button>
  )
}
