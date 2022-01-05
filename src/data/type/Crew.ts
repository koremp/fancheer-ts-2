import Dancer from 'data/type/Dancer'
import Name from 'data/type/Name'
interface Crew {
  name: Name
  image: string
  description?: any
  finalRank: number
  members: Dancer[]
}

export default Crew