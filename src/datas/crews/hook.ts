import Crew from 'types/Crew'
import Dancer from 'types/Dancer'

import aikiImg from 'assets/crew/hook/HOOK_AIKI_MAIN.jpg'
import bornImg from 'assets/crew/hook/HOOK_BORN_MAIN.jpg'
import hyowooImg from 'assets/crew/hook/HOOK_HYOWOO_MAIN.jpg'
import oddImg from 'assets/crew/hook/HOOK_ODD_MAIN.jpg'
import rageonImg from 'assets/crew/hook/HOOK_RAGEON_MAIN.jpg'
import sungjiyeonImg from 'assets/crew/hook/HOOK_SUNGJIYEON_MAIN.jpg'
import seonyoonkyungImg from 'assets/crew/hook/HOOK_SEONYOONKYUNG_MAIN.jpg'

import logoImg from 'assets/crew/hook/HOOK.jpg'

const Aiki: Dancer = {
  name: {
    kor: '아이키',
    eng: 'Aiki',
  },
  image: aikiImg,
  birth: new Date(1989, 9, 6),
  isLeader: true,
  description: `World of Dance Contestant, Choreographer of Refund Sisters' "Don't Touch Me", Bibi, and Queen Wassabii.`,
  choreo: [],
  link: [
    'https://www.instagram.com/aiki_kr/',
    'https://www.tiktok.com/@aiki_kr',
    'https://www.youtube.com/c/Aiki%EC%95%84%EC%9D%B4%ED%82%A4%EB%A6%BF',
  ],
}

const Rageon: Dancer = {
  name: {
    kor: '뤠이젼',
    eng: 'Rageon',
  },
  image: rageonImg,
  birth: new Date(1999, 5, 21),
  description: `Student at Aiki's Real Beat Studio.`,
  choreo: [],
  link: [
    'https://www.instagram.com/rageonlegend/',
  ],
}

const SeonYoonkyung: Dancer = {
  name: {
    kor: '선윤경',
    eng: 'Seon Yoonkyung',
  },
  image: seonyoonkyungImg,
  birth: new Date(2003, 10, 21),
  description: `Student at Aiki's Real Beat Studio.`,
  choreo: [],
  link: [
    'https://www.instagram.com/seon.yk_',
    'https://twitter.com/seon_yk_/',
  ],
}

const SungJiyeon: Dancer = {
  name: {
    kor: '성지연',
    eng: 'Sung Jiyeon',
  },
  image: sungjiyeonImg,
  birth: new Date(2003, 1, 26),
  description: `Student at Aiki's Real Beat Studio.`,
  choreo: [],
  link: [
    'https://www.instagram.com/jiyeon127and/',
    'https://twitter.com/jiyeon127and/',
  ],
}

const Born: Dancer = {
  name: {
    kor: '예본',
    eng: 'Born',
  },
  image: bornImg,
  birth: new Date(2000, 2, 23),
  description: `Student at Aiki's Real Beat Studio.`,
  choreo: [],
  link: [
    'https://www.instagram.com/yebonnana/',
  ],
}

const Odd: Dancer = {
  name: {
    kor: '오드',
    eng: 'Odd',
  },
  image: oddImg,
  birth: new Date(1999, 10, 2),
  description: `Student at Aiki's Real Beat Studio.`,
  choreo: [],
  link: [
    'https://instagram.com/moonlight_odd_/',
  ],
}

const Hyowoo: Dancer = {
  name: {
    kor: '효우',
    eng: 'Hyowoo',
  },
  image: hyowooImg,
  birth: new Date(2000, 10, 10),
  description: `Student at Aiki's Real Beat Studio.`,
  choreo: [],
  link: [
    'https://www.instagram.com/hyowoo.__/',
  ],
}

const HOOK: Crew = {
  name: {
    kor: '훅',
    eng: 'HOOK',
  },
  image: logoImg,
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