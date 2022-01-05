import Name from 'data/type/Name'

interface Dancer {
  name: Name
  image: string
  birth: Date
  isLeader: boolean
  description?: string
  choreography?: any
}

export default Dancer