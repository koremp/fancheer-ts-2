import Name from 'types/Name'
import Choreo from 'types/Choreo'
import Link from 'types/Link'

interface Dancer {
  name: Name
  image: string | string[]
  birth: Date
  isLeader?: boolean
  description: string
  choreo: Choreo[]
  link: string[]
}

export default Dancer