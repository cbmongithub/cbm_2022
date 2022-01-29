import Intro from './Intro'
import PlayGame from './PlayGame'

import './style.css'

const Game = () => (
  <section className='game'>
    <Intro>
      <PlayGame />
    </Intro>
  </section>
)

export default Game
