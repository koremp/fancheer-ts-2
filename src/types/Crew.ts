import Dancer from 'types/Dancer'
import Name from 'types/Name'

export default interface Crew {
  name: Name
  image: StaticImageData
  description?: any
  finalRank: number
  key: string
  dancers: Dancer[]
}