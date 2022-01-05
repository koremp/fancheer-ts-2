import Name from 'data/type/Name'
import Choreo from 'data/type/Choreo'
interface Dancer {
  name: Name
  image: string
  birth: Date
  isLeader?: boolean
  description?: string
  choreo: Choreo[]
}

export default Dancer