import Crew from 'datas/types/Crew'
import Dancer from 'datas/types/Dancer'

const Gabee: Dancer = {
  name: {
    kor: '가비',
    eng: 'Gabee',
  },
  image: '',
  birth: new Date(1993, 10, 2),
  isLeader: true,
  description: `Choreographer (with Rian and Simeez) for BoA, Yubin, Chungha, CLC, TWICE, Natty.\nFormerly known as "Single Lady" during her underground dance battle days.`,
  choreo: [],
  link: [],
}


const Rian: Dancer = {
  name: {
    kor: '리안',
    eng: 'Rian',
  },
  image: '',
  birth: new Date(1993, 9, 10),
  description: `Choreographer for Chungha, Hyoyeon, Weki Meki`,
  choreo: [],
  link: [],
}


const Simeez: Dancer = {
  name: {
    kor: '시미즈',
    eng: 'Simeez',
  },
  image: '',
  birth: new Date(1996, 4, 3),
  description: `Choreographer for KARD, April, Rocket Girls 101`,
  choreo: [],
  link: [],
}


const H1: Dancer = {
  name: {
    kor: '에이치원',
    eng: 'H_1',
  },
  image: '',
  birth: new Date(1994, 10, 28),
  description: `Choreographer and back-up dancer for Hwasa`,
  choreo: [],
  link: [],
}


const Peanut: Dancer = {
  name: {
    kor: '피넛',
    eng: 'Peanut',
  },
  image: '',
  birth: new Date(1990, 5, 6),
  description: `Professional Waacker`,
  choreo: [],
  link: [],
}

const Lachica: Crew = {
  name: {
    kor: '라치카',
    eng: 'LACHICA',
  },
  image: '',
  description: '',
  finalRank: 3,
  key: '',
  dancers: [
    Gabee,
    Rian,
    Simeez,
    H1,
    Peanut,
  ],
}

Lachica.key = Lachica.dancers[0].name.eng;

export const LachciaMembers = {
  Gabee,
  Rian,
  Simeez,
  H1,
  Peanut,
}

export default Lachica