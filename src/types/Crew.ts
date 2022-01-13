import Dancer from 'types/Dancer'
import Name from 'types/Name'

interface Crew {
  name: Name
  image: string
  description?: any
  finalRank: number
  index: number
  dancers: Dancer[]
}

export default Crew