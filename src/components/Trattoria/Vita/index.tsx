import image from '../../../assets/images/fundodolce.png'
import { Restbar } from './styles'

const Vita = () => (
  <Restbar style={{ backgroundImage: `url(${image})` }}>
    <div>
      <h3>Italiana</h3>
    </div>
    <div>
      <h2>La Dolce Vita Trattoria</h2>
    </div>
  </Restbar>
)

export default Vita
