import Dancer from 'data/type/Dancer'

interface Crew {
  name: {
    kor: string
    eng: string
  }
  image: string
  description?: any
  finalRank: number
  members: Dancer[]
}

export default Crew