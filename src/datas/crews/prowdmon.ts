import Crew from 'types/Crew'
import Dancer from 'types/Dancer'

import monikaImg from 'crew/prowdmon/PROWDMON_MONIKA_MAIN.jpg'
import diaImg from 'crew/prowdmon/PROWDMON_DIA_MAIN.jpg'
import rosyImg from 'crew/prowdmon/PROWDMON_ROSY_MAIN.jpg'
import lipjImg from 'crew/prowdmon/PROWDMON_LIPJ_MAIN.jpg'
import kaydayImg from 'crew/prowdmon/PROWDMON_KAYDAY_MAIN.jpg'
import hamgImg from 'crew/prowdmon/PROWDMON_HAMG_MAIN.jpg'
import hyeilyImg from 'crew/prowdmon/PROWDMON_HYEILY_MAIN.jpg'

import logoImg from 'crew/prowdmon/PROWDMON.jpg'

const Monika: Dancer = {
  name: {
    kor: '모니카',
    eng: 'Monika',
  },
  image: monikaImg,
  birth: new Date(1986, 6, 21),
  isLeader: true,
  description: `Known as the "Teacher of all Dancers" as she was the Dance Professor for most of the contestants during their college years. Choreographer for Amoeba Culture. Member of WooFam. One half of the dance duo MOLIP with fellow PRODWMON member Lip J.`,
  choreo: [],
  link: [
    'https://www.instagram.com/monika_shin/',
    'https://twitter.com/monikaaashin',
    'https://www.facebook.com/Monika.MoLip',
    'https://www.youtube.com/c/OFDStudio',
  ],
}

const DIA: Dancer = {
  name: {
    kor: '다이아',
    eng: 'DIA',
  },
  image: diaImg,
  birth: new Date(1996, 10, 28),
  description: `Choreographer at OFD Studio`,
  choreo: [],
  link: [
    'https://www.instagram.com/_dia_kim_',
    'https://twitter.com/_dia_kim_/',
  ],
}

const Rosy: Dancer = {
  name: {
    kor: '로지',
    eng: 'Rosy',
  },
  image: rosyImg,
  birth: new Date(1999, 8, 12),
  description: `Choreographer at OFD Studio. Former YG Entertainment trainee.`,
  choreo: [],
  link: [
    'https://www.instagram.com/_rosy_life',
    'https://twitter.com/_rosygirl',
  ],
}

const LipJ: Dancer = {
  name: {
    kor: '립제이',
    eng: 'Lip J',
  },
  image: lipjImg,
  birth: new Date(1988, 7, 29),
  description: `World-renowned Waacking dancer. Choreographer for Amoeba Culture, Yubin, and Lee Hi. Member of dance duo MOLIP (with PRODWMON member Monika), ElizaBitch, and Team W.O.W. (World Of Waackers).`,
  choreo: [],
  link: [
    'https://twitter.com/lipj88',
    'https://www.instagram.com/lipjmolip/',
  ],
}

const Kayday: Dancer = {
  name: {
    kor: '케이데이',
    eng: 'Kayday',
  },
  image: kaydayImg,
  birth: new Date(1999, 10, 0),
  description: `Choreographer at OFD Studio.`,
  choreo: [],
  link: [
    'https://www.instagram.com/kayda.y',
    'https://twitter.com/dazyofkayday/',
  ],
}

const HamG: Dancer = {
  name: {
    kor: '함지',
    eng: 'Ham.G',
  },
  image: hamgImg,
  birth: new Date(1995, 12, 4),
  description: `Choreographer at OFD Studio.`,
  choreo: [],
  link: [
    'https://www.instagram.com/ham_ggg',
  ],
}

const Hyeily: Dancer = {
  name: {
    kor: '헤일리',
    eng: 'Hyeily',
  },
  image: hyeilyImg,
  birth: new Date(1999, 5, 4),
  description: `Choreographer at OFD Studio.`,
  choreo: [],
  link: [
    'https://www.instagram.com/hyeily.___',
  ],
}

const PROWDMON: Crew = {
  name: {
    kor: '프라우드먼',
    eng: 'PROWDMON',
  },
  image: logoImg,
  description: '',
  finalRank: 6,
  key: '',
  dancers: [
    Monika,
    DIA,
    Rosy,
    LipJ,
    Kayday,
    HamG,
    Hyeily,
  ],
}

PROWDMON.key = PROWDMON.dancers[0].name.eng;

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