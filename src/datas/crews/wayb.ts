import Crew from 'types/Crew'
import Dancer from 'types/Dancer'

import nozeImg from 'assets/crew/wayb/WAYB_NOZE_MAIN.jpg'
import gyurianImg from 'assets/crew/wayb/WAYB_GYURIAN_MAIN.jpg'
import dollaImg from 'assets/crew/wayb/WAYB_DOLLA_MAIN.jpg'
import leesuImg from 'assets/crew/wayb/WAYB_LEESU_MAIN.jpg'
import anssoImg from 'assets/crew/wayb/WAYB_ANSSO_MAIN.jpg'

import logoImg from 'assets/crew/wayb/WAYB.jpg'

const Noze: Dancer = {
  name: {
    kor: '노제',
    eng: 'Noze',
  },
  image: nozeImg,
  birth: new Date(1996, 2, 11),
  isLeader: true,
  description: `Dancer for Kai's "Mmmh", Taemin's "Advice"`,
  choreo: [],
  link: [
    'https://www.instagram.com/nozeworld/',
    'https://twitter.com/noze_world',
    'https://gall.dcinside.com/mgallery/board/lists?id=noze',
  ],
}

const GyuriAn: Dancer = {
  name: {
    kor: '규리안',
    eng: 'Gyuri An',
  },
  image: gyurianImg,
  birth: new Date(2002, 1, 5),
  description: '',
  choreo: [],
  link: [
    'https://www.instagram.com/gyuriannn/',
    'https://twitter.com/gyuriannn/',
  ],
}

const Dolla: Dancer = {
  name: {
    kor: '돌라',
    eng: 'Dolla',
  },
  image: dollaImg,
  birth: new Date(1996, 1, 14),
  description: '',
  choreo: [],
  link: [
    'https://www.instagram.com/dolla_WayB/',
  ],
}

const LeeSu: Dancer = {
  name: {
    kor: '리수',
    eng: 'Lee Su',
  },
  image: leesuImg,
  birth: new Date(2000, 7, 0),
  description: `Dancer for Kai's "Mmmh" (with Noze), and The Boyz`,
  choreo: [],
  link: [
    'https://www.instagram.com/withleesu/',
  ],
}

const Ansso: Dancer = {
  name: {
    kor: '안쏘',
    eng: 'Ansso',
  },
  image: anssoImg,
  birth: new Date(1997, 8, 0),
  description: '',
  choreo: [],
  link: [
    'https://www.instagram.com/ansso_wayb/',
  ],
}

const WAYB: Crew = {
  name: {
    kor: '웨이비',
    eng: 'WAYB',
  },
  image: logoImg,
  description: '',
  finalRank: 8,
  key: '',
  dancers: [
    Noze,
    GyuriAn,
    Dolla,
    LeeSu,
    Ansso,
  ],
}

WAYB.key = WAYB.dancers[0].name.eng;

export const WaybMembers = {
  Noze,
  GyuriAn,
  Dolla,
  LeeSu,
  Ansso,
}

export default WAYB