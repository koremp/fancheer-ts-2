import Dancer from 'datas/types/Dancer'
import Name from 'datas/types/Name'

interface Crew {
  name: Name
  image: string
  description?: any
  finalRank: number
  selectedMember: number
  members: Dancer[]
}

export default Crew