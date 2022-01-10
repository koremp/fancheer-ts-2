import Crew from 'datas/types/Crew'
import Dancer from 'datas/types/Dancer'

const Monika: Dancer = {
  name: {
    kor: '모니카',
    eng: 'Monika',
  },
  image: '',
  birth: new Date(1986, 6, 21),
  isLeader: true,
  description: `Known as the "Teacher of all Dancers" as she was the Dance Professor for most of the contestants during their college years. Choreographer for Amoeba Culture. Member of WooFam. One half of the dance duo MOLIP with fellow PRODWMON member Lip J.`,
  choreo: [],
  link: [],
}

const DIA: Dancer = {
  name: {
    kor: '다이아',
    eng: 'DIA',
  },
  image: '',
  birth: new Date(1996, 10, 28),
  description: `Choreographer at OFD Studio`,
  choreo: [],
  link: [],
}

const Rosy: Dancer = {
  name: {
    kor: '로지',
    eng: 'Rosy',
  },
  image: '',
  birth: new Date(1999, 8, 12),
  description: `Choreographer at OFD Studio. Former YG Entertainment trainee.`,
  choreo: [],
  link: [],
}

const LipJ: Dancer = {
  name: {
    kor: '립제이',
    eng: 'Lip J',
  },
  image: '',
  birth: new Date(1988, 7, 29),
  description: `World-renowned Waacking dancer. Choreographer for Amoeba Culture, Yubin, and Lee Hi. Member of dance duo MOLIP (with PRODWMON member Monika), ElizaBitch, and Team W.O.W. (World Of Waackers).`,
  choreo: [],
  link: [],
}

const Kayday: Dancer = {
  name: {
    kor: '케이데이',
    eng: 'Kayday',
  },
  image: '',
  birth: new Date(1999, 10, 0),
  description: `Choreographer at OFD Studio.`,
  choreo: [],
  link: [],
}

const HamG: Dancer = {
  name: {
    kor: '함지',
    eng: 'Ham.G',
  },
  image: '',
  birth: new Date(1995, 12, 4),
  description: `Choreographer at OFD Studio.`,
  choreo: [],
  link: [],
}

const Hyeily: Dancer = {
  name: {
    kor: '헤일리',
    eng: 'Hyeily',
  },
  image: '',
  birth: new Date(1999, 5, 4),
  description: `Choreographer at OFD Studio.`,
  choreo: [],
  link: [],
}

const PROWDMON: Crew = {
  name: {
    kor: '프라우드먼',
    eng: 'PROWDMON',
  },
  image: '',
  description: '',
  finalRank: 6,
  key: '',
  members: [
    Monika,
    DIA,
    Rosy,
    LipJ,
    Kayday,
    HamG,
    Hyeily,
  ],
}

PROWDMON.key = PROWDMON.members[0].name.eng;

export const ProwdmonMembers = {
  Monika,
  DIA,
  Rosy,
  LipJ,
  Kayday,
  HamG,
  Hyeily,
}

export default PROWDMON