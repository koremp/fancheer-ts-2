import Crew from 'datas/types/Crew'
import Dancer from 'datas/types/Dancer'

const HyojinChoi: Dancer = {
  name: {
    kor: '효진초이',
    eng: 'Hyojin Choi',
  },
  image: '',
  birth: new Date(1992, 1, 19),
  isLeader: true,
  description: 'Choreographer at 1Million Dance Studio',
  choreo: [],
  link: [
    'https://www.instagram.com/hyojin__choi__/',
    'https://www.youtube.com/channel/UCSr3ldPbpz7w2iKctmJ972A',
  ],
}

const Rozalin: Dancer = {
  name: {
    kor: '로잘린',
    eng: 'Rozalin',
  },
  image: '',
  birth: new Date(1997, 9, 14),
  description: 'Choreographer for aespa, Weeekly',
  choreo: [],
  link: [
    'https://www.instagram.com/Rozallllll/',
    'https://twitter.com/Rozalllllll',
    'https://www.youtube.com/channel/UCqUZcFvVwmrzvDTEFCrJ49A',
  ],
}

const Moana: Dancer = {
  name: {
    kor: '모아나',
    eng: 'Moana',
  },
  image: '',
  birth: new Date(1995, 6, 24),
  description: `Choreographer for KARD's "Gunshot" (with Emma)`,
  choreo: [],
  link: [
    'https://www.instagram.com/_k.moana/',
  ],
}

const Emma: Dancer = {
  name: {
    kor: '엠마',
    eng: 'Emma',
  },
  image: '',
  birth: new Date(2000, 4, 25),
  description: `Choreographer for KARD's "Gunshot" (with Moana)`,
  choreo: [],
  link: [
    'https://www.instagram.com/eemmasong/',
    'https://twitter.com/Eemmas0ng',
    'https://www.tiktok.com/@emmasonggg?',
  ],
}

const LeeChaeyeon: Dancer = {
  name: {
    kor: '이채연',
    eng: 'Lee Chaeyeon',
  },
  image: '',
  birth: new Date(2000, 1, 10),
  description: `Former IZ*ONE member and current solo artist under WM Entertainment.\nOlder sister of current ITZY member Chaeryeong.`,
  choreo: [],
  link: [
    'https://www.instagram.com/chaestival_/',
    'https://twitter.com/official_LCY',
  ],
}

const WANT: Crew = {
  name: {
    kor: '원트',
    eng: 'WANT',
  },
  image: '',
  description: '',
  finalRank: 7,
  key: '',
  dancers: [
    HyojinChoi,
    Rozalin,
    Moana,
    Emma,
    LeeChaeyeon,
  ],
}

WANT.key = WANT.dancers[0].name.eng;

export const WantMembers = {
  HyojinChoi,
  Rozalin,
  Moana,
  Emma,
  LeeChaeyeon,
}

export default WANT