import Crew from 'data/type/Crew'
import Dancer from 'data/type/Dancer'

const Yell: Dancer = {
  name: {
    kor: '예리',
    eng: 'Yell',
  },
  image: '',
  birth: new Date(2000, 3, 23),
  description: '2018 Summer Youth Olympics B-Girl 1v1 Bronze Medallist',
  choreo: [
    // TBD
  ],
  link: [
    // TBD
  ]
}

const Leejung: Dancer = {
  name: {
    kor: '리정',
    eng: 'Leejung Lee',
  },
  image: 'Choreographer for TWICE, ITZY, Sunmi, Somi, BLACKPINK, iKON',
  birth: new Date(1998, 8, 8),
  isLeader: true,
  description: '',
  choreo: [
    // TBD
  ],
  link: [
    // TBD
  ]
}

const Yeojin: Dancer = {
  name: {
    kor: '여진',
    eng: 'Yeojin',
  },
  image: '',
  birth: new Date(1994, 10, 8),
  description: '',
  choreo: [],
  link: []
}

const Isak: Dancer = {
  name: {
    kor: '이삭',
    eng: 'Isak',
  },
  image: '',
  birth: new Date(1997, 3, 1),
  description: '',
  choreo: [],
  link: []
}

const Jihyo: Dancer = {
  name: {
    kor: '지효',
    eng: 'Jihyo',
  },
  image: '',
  birth: new Date(1996, 10, 21),
  description: '',
  choreo: [],
  link: []
}

const YGX: Crew = {
  name: {
    kor: '와이지엑스',
    eng: 'YGX'
  },
  image: '',
  description: '',
  finalRank: 5,
  members: [
    Leejung,
    Yeojin,
    Yell,
    Isak,
    Jihyo,
  ],
}

export const YGXMember = {
  Leejung,
  Yeojin,
  Yell,
  Isak,
  Jihyo,
} 

export default YGX