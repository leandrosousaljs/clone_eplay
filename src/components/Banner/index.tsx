import { useEffect, useState } from 'react'

import { Imagem, Precos, Titulo } from './styles'

import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { formataPreço } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque').then((res) =>
      res.json().then((res) => setGame(res))
    )
  }, [])

  if (!game) {
    return <h3>Carregado...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <s>{formataPreço(game.prices.old)}</s> <br />
            por apenas {formataPreço(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to="/produto"
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
