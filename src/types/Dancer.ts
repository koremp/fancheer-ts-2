import Name from 'datas/types/Name'
import Choreo from 'datas/types/Choreo'
import Link from 'datas/types/Link'

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