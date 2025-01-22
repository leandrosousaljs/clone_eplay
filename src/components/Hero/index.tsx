import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

import { Game } from '../../pages/Home'
import { formataPreço } from '../ProductsList'

import Button from '../Button'
import Tag from '../Tag'

import { Banner, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <>
                <s>De {formataPreço(game.prices.old)}</s> <br />
              </>
            )}
            {game.prices.current && (
              <>Por {formataPreço(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              variant="primary"
              type={'button'}
              title={'Clique aqui para adicionar esse jogo ao carrinho'}
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
