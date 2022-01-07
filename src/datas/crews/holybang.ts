import Crew from 'data/type/Crew'
import Dancer from 'data/type/Dancer'

const HoneyJ: Dancer = {
  name: {
    kor: '허니제이',
    eng: 'Honey J',
  },
  image: '',
  birth: new Date(1987, 8, 25),
  isLeader: true,
  description: `Former leader of PURFLOW dance crew alongside current CoCaNButter members Rihey, Gaga, Jillin, ZSun, and Bicki. Long-time choreographer and tour dancer for Jay Park and AOMG.`,
  choreo: [],
  link: [],
}

const Loa: Dancer = {
  name: {
    kor: '로아',
    eng: 'Lo-A',
  },
  image: '',
  birth: new Date(1996, 8, 2),
  description: '',
  choreo: [],
  link: [],
}

const Mull: Dancer = {
  name: {
    kor: '뮬',
    eng: 'Mull',
  },
  image: '',
  birth: new Date(1996, 2, 27),
  description: '',
  choreo: [],
  link: [],
}

const Belle: Dancer = {
  name: {
    kor: '벨',
    eng: 'Belle',
  },
  image: '',
  birth: new Date(1996, 10, 8),
  description: `Missed the remainder of the show effective Episode 5 due to an ACL injury and underwent surgery.`,
  choreo: [],
  link: [],
}

const Eevee: Dancer = {
  name: {
    kor: '이븨',
    eng: 'Eevee',
  },
  image: '',
  birth: new Date(1993, 3, 9),
  description: 'Tour dancer for Jay Park and AOMG.',
  choreo: [],
  link: [],
}

const Jane: Dancer = {
  name: {
    kor: '제인',
    eng: 'Jane',
  },
  image: '',
  birth: new Date(1995, 1, 4),
  description: 'Tour dancer for Jay Park and AOMG.',
  choreo: [],
  link: [],
}

const Taro: Dancer = {
  name: {
    kor: '타로',
    eng: 'Taro',
  },
  image: '',
  birth: new Date(1994, 4, 0),
  description: '',
  choreo: [],
  link: [],
}

const Hertz: Dancer = {
  name: {
    kor: '헤르츠',
    eng: 'Hertz',
  },
  image: '',
  birth: new Date(1992, 10, 19),
  description: '',
  choreo: [],
  link: [],
}

const HolyBang: Crew = {
  name: {
    kor: '홀리뱅',
    eng: 'HolyBang',
  },
  image: '',
  description: '',
  finalRank: 1,
  members: [
    HoneyJ,
    Loa,
    Mull,
    Belle,
    Eevee,
    Jane,
    Taro,
    Hertz,
  ],
}

export const HolyBangMembers = {
  HoneyJ,
  Loa,
  Mull,
  Belle,
  Eevee,
  Jane,
  Taro,
  Hertz,
}

export default HolyBang