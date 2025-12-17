import type { StaticImageData } from "next/image";

import Name from 'types/Name'
import Choreo from 'types/Choreo'
import Link from 'types/Link'

export default interface Dancer {
  name: Name
  image: StaticImageData
  birth: Date
  isLeader?: boolean
  description: string
  choreo: Choreo[]
  link: string[]
}