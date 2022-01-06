import Name from 'data/type/Name'
import Choreo from 'data/type/Choreo'
import Link from 'data/type/Link'
interface Dancer {
  name: Name
  image: string
  birth: Date
  isLeader?: boolean
  description?: string
  choreo: Choreo[]
  link?: Link[] 
}

export default Dancer