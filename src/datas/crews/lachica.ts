import Crew from 'types/Crew'
import Dancer from 'types/Dancer'

import gabeeImg from 'assets/crew/lachica/LACHICA_GABEE_MAIN.jpg'
import rianImg from 'assets/crew/lachica/LACHICA_RIAN_MAIN.jpg'
import simeezImg from 'assets/crew/lachica/LACHICA_SIMEEZ_MAIN.jpg'
import h1Img from 'assets/crew/lachica/LACHICA_H1_MAIN.jpg'
import peanutImg from 'assets/crew/lachica/LACHICA_PEANUT_MAIN.jpg'
import logoImg from 'assets/crew/lachica/LACHICA.jpg'

const Gabee: Dancer = {
  name: {
    kor: '가비',
    eng: 'Gabee',
  },
  image: gabeeImg,
  birth: new Date(1993, 10, 2),
  isLeader: true,
  description: `Choreographer (with Rian and Simeez) for BoA, Yubin, Chungha, CLC, TWICE, Natty.\nFormerly known as "Single Lady" during her underground dance battle days.`,
  choreo: [],
  link: [
    'https://www.instagram.com/gabeegal/',
    'https://twitter.com/gabeegal',
    'https://www.youtube.com/c/DanceJiwon',
  ],
}


const Rian: Dancer = {
  name: {
    kor: '리안',
    eng: 'Rian',
  },
  image: rianImg,
  birth: new Date(1993, 9, 10),
  description: `Choreographer for Chungha, Hyoyeon, Weki Meki`,
  choreo: [],
  link: [
    'https://www.instagram.com/_rianess/',
    'https://twitter.com/rian_eda',
    'https://www.tiktok.com/@dancerian',
    'https://www.youtube.com/channel/UCFH9VTXreljLA4KHejcVmVg',
  ],
}


const Simeez: Dancer = {
  name: {
    kor: '시미즈',
    eng: 'Simeez',
  },
  image: simeezImg,
  birth: new Date(1996, 4, 3),
  description: `Choreographer for KARD, April, Rocket Girls 101`,
  choreo: [],
  link: [
    'https://www.instagram.com/_simeez/',
    'https://twitter.com/__simeez/',
    'https://www.youtube.com/c/Simeezdancer',
    'https://www.facebook.com/simeez'
  ],
}


const H1: Dancer = {
  name: {
    kor: '에이치원',
    eng: 'H_1',
  },
  image: h1Img,
  birth: new Date(1994, 10, 28),
  description: `Choreographer and back-up dancer for Hwasa`,
  choreo: [],
  link: [
    'https://www.instagram.com/h__1won/',
    'https://www.youtube.com/channel/UCQGsGmvT-SPdHZz7_bDef0w',
  ],
}


const Peanut: Dancer = {
  name: {
    kor: '피넛',
    eng: 'Peanut',
  },
  image: peanutImg,
  birth: new Date(1990, 5, 6),
  description: `Professional Waacker`,
  choreo: [],
  link: [
    'https://www.instagram.com/__peanutgirl/',
    'https://twitter.com/__peanutgirl/',
  ],
}

const Lachica: Crew = {
  name: {
    kor: '라치카',
    eng: 'LACHICA',
  },
  image: logoImg,
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