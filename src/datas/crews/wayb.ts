import Crew from 'datas/types/Crew'
import Dancer from 'datas/types/Dancer'

const Noze: Dancer = {
  name: {
    kor: '노제',
    eng: 'Noze',
  },
  image: '',
  birth: new Date(1996, 2, 11),
  isLeader: true,
  description: `Dancer for Kai's "Mmmh", Taemin's "Advice"`,
  choreo: [],
  link: [],
}

const GyuriAn: Dancer = {
  name: {
    kor: '규리안',
    eng: 'Gyuri An',
  },
  image: '',
  birth: new Date(2002, 1, 5),
  description: '',
  choreo: [],
  link: [],
}

const Dolla: Dancer = {
  name: {
    kor: '돌라',
    eng: 'Dolla',
  },
  image: '',
  birth: new Date(1996, 1, 14),
  description: '',
  choreo: [],
  link: [],
}

const LeeSu: Dancer = {
  name: {
    kor: '리수',
    eng: 'Lee Su',
  },
  image: '',
  birth: new Date(2000, 7, 0),
  description: `Dancer for Kai's "Mmmh" (with Noze), and The Boyz`,
  choreo: [],
  link: [],
}

const Ansso: Dancer = {
  name: {
    kor: '안쏘',
    eng: 'Ansso',
  },
  image: '',
  birth: new Date(1997, 8, 0),
  description: '',
  choreo: [],
  link: [],
}

const WAYB: Crew = {
  name: {
    kor: '웨이비',
    eng: 'WAYB',
  },
  image: '',
  description: '',
  finalRank: 8,
  key: members[0].name.eng,
  members: [
    Noze,
    GyuriAn,
    Dolla,
    LeeSu,
    Ansso,
  ],
}

export const WaybMembers = {
  Noze,
  GyuriAn,
  Dolla,
  LeeSu,
  Ansso,
}

export default WAYB