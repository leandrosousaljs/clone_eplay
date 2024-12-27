import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.co/222x250" alt="" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut a optio nisi
      inventore eius quos sint voluptas iure tenetur! Recusandae, dolorem dolore
      doloremque nobis consequatur placeat delectus perspiciatis accusantium
      nihil.
    </Descricao>
  </Card>
)

export default Product
