import Crew from 'datas/types/Crew'
import Dancer from 'datas/types/Dancer'

const Rihey: Dancer = {
  name: {
    kor: '리헤이',
    eng: 'Rihey',
  },
  image: '',
  birth: new Date(1990, 4, 16),
  isLeader: true,
  description: `Former member of PURPLOW Dance crew which members includes its former leader and now. Holy Bang leader Honey J, and current CocaNButter members Gaga, Bicki, Zsun, and Jillin. Choreographer at Bangall Dance Academy`,
  choreo: [],
  link: [],
}

const Gaga: Dancer = {
  name: {
    kor: '가가',
    eng: 'Gaga',
  },
  image: '',
  birth: new Date(1993, 7, 3),
  description: `Former member of PURPLOW Dance crew. Choreographer at Bangall Dance Academy`,
  choreo: [],
  link: [],
}

const Bicki: Dancer = {
  name: {
    kor: '비키',
    eng: 'Bicki',
  },
  image: '',
  birth: new Date(1994, 3, 19),
  description: `Former member of PURPLOW Dance crew.`,
  choreo: [],
  link: [],
}

const ZSun: Dancer = {
  name: {
    kor: '제트썬',
    eng: 'ZSun',
  },
  image: '',
  birth: new Date(1990, 3, 28),
  description: `Former member of PURPLOW Dance crew.\nChoreographer for KARD. Former Dancehall singer previously signed under Luminant Entertainment.`,
  choreo: [],
  link: [],
}

const Jillin: Dancer = {
  name: {
    kor: '질린',
    eng: 'Jillin',
  },
  image: '',
  birth: new Date(1994, 8, 15),
  description: `Former member of PURPLOW Dance crew.`,
  choreo: [],
  link: [],
}

const COCANBUTTER: Crew = {
  name: {
    kor: '코카엔버터',
    eng: 'CocaNButter',
  },
  image: '',
  description: '',
  finalRank: 4,
  key: members[0].name.eng,
  members: [
    Rihey,
    Gaga,
    Bicki,
    ZSun,
    Jillin,
  ],
}

export const CocaNButterMembers = {
  Rihey,
  Gaga,
  Bicki,
  ZSun,
  Jillin,
}

export default COCANBUTTER