import Crew from 'datas/types/Crew'
import Dancer from 'datas/types/Dancer'

const Aiki: Dancer = {
  name: {
    kor: '아이키',
    eng: 'Aiki',
  },
  image: '',
  birth: new Date(1989, 9, 6),
  isLeader: true,
  description: `World of Dance Contestant, Choreographer of Refund Sisters' "Don't Touch Me", Bibi, and Queen Wassabii.`,
  choreo: [],
  link: [],
}

const Rageon: Dancer = {
  name: {
    kor: '뤠이젼',
    eng: 'Rageon',
  },
  image: '',
  birth: new Date(1999, 5, 21),
  description: `Student at Aiki's Real Beat Studio.`,
  choreo: [],
  link: [],
}

const SeonYoonkyung: Dancer = {
  name: {
    kor: '선윤경',
    eng: 'Seon Yoonkyung',
  },
  image: '',
  birth: new Date(2003, 10, 21),
  description: `Student at Aiki's Real Beat Studio.`,
  choreo: [],
  link: [],
}

const SungJiyeon: Dancer = {
  name: {
    kor: '성지연',
    eng: 'Sung Jiyeon',
  },
  image: '',
  birth: new Date(2003, 1, 26),
  description: `Student at Aiki's Real Beat Studio.`,
  choreo: [],
  link: [],
}

const Born : Dancer = {
  name: {
    kor: '예본',
    eng: 'Born',
  },
  image: '',
  birth: new Date(2000, 2, 23),
  description: `Student at Aiki's Real Beat Studio.`,
  choreo: [],
  link: [],
}

const Odd: Dancer = {
  name: {
    kor: '오드',
    eng: 'Odd',
  },
  image: '',
  birth: new Date(1999, 10, 2),
  description: `Student at Aiki's Real Beat Studio.`,
  choreo: [],
  link: [],
}

const Hyowoo: Dancer = {
  name: {
    kor: '효우',
    eng: 'Hyowoo',
  },
  image: '',
  birth: new Date(2000, 10, 10),
  description: `Student at Aiki's Real Beat Studio.`,
  choreo: [],
  link: [],
}

const HOOK: Crew = {
  name: {
    kor: '훅',
    eng: 'HOOK',
  },
  image: '',
  description: '',
  finalRank: 7,
  key: '',
  dancers: [
    Aiki,
    Rageon,
    SeonYoonkyung,
    SungJiyeon,
    Born,
    Odd,
    Hyowoo,
  ],
}

HOOK.key = HOOK.dancers[0].name.eng;


export const HOOKMembers = {
  Aiki,
  Rageon,
  SeonYoonkyung,
  SungJiyeon,
  Born,
  Odd,
  Hyowoo, 
}

export default HOOK