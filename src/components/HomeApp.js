import Card from './Card'
import CardData from '../data/CardData'
import '../index.css'

import MarqueeText from './MarqueeText'

function HomeApp() {
  const cards = CardData.map((item) => <Card key={item.id} item={item} />)

  return (
    <section>
      <div>
        <h3 className="dezlisante">←←Dezliza para ver Galeria→→</h3>
      </div>
      <div className="scroll-container">
        <div className="scroll-item">
          <section className="cards-list">{cards}</section>
        </div>
      </div>
     
      <MarqueeText/>
    </section>
  )
}

export default HomeApp
