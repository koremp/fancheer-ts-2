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
  link: [
    'https://www.instagram.com/rihey__/',
    'https://twitter.com/Rihey__',
  ],
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
  link: [
    'https://www.instagram.com/_gagaloca/',
    'https://mobile.twitter.com/_gagaloca',
  ],
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
  link: [
    'https://www.instagram.com/justasbicki',
    'https://twitter.com/justasbicki',
  ],
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
  link: [
    'https://www.instagram.com/zsunbless',
    'https://mobile.twitter.com/zsunbless',
    'https://www.youtube.com/channel/UCaAwiz2aP0JqDJ_izMXL7_w',
  ],
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
  link: [
    'https://www.instagram.com/jillin.ee/',
    'https://mobile.twitter.com/jillin_ee',
    'https://www.youtube.com/channel/UC1voe3dddNahNGdPUUU4W_g',
  ],
}

const COCANBUTTER: Crew = {
  name: {
    kor: '코카엔버터',
    eng: 'CocaNButter',
  },
  image: '',
  description: '',
  finalRank: 4,
  key: '',
  dancers: [
    Rihey,
    Gaga,
    Bicki,
    ZSun,
    Jillin,
  ],
}

COCANBUTTER.key = COCANBUTTER.dancers[0].name.eng;

export const CocaNButterMembers = {
  Rihey,
  Gaga,
  Bicki,
  ZSun,
  Jillin,
}

export default COCANBUTTER