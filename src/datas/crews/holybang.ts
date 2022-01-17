import Crew from 'types/Crew'
import Dancer from 'types/Dancer'

import honeyjImg from 'crew/holybang/HolyBang_HONEYJ_MAIN.jpg'
import loaImg from 'crew/holybang/HolyBang_LOA_MAIN.jpg'
import mullImg from 'crew/holybang/HolyBang_MULL_MAIN.jpg'
import belleImg from 'crew/holybang/HolyBang_BELLE_MAIN.jpg'
import eeveeImg from 'crew/holybang/HolyBang_EEVEE_MAIN.jpg'
import janeImg from 'crew/holybang/HolyBang_JANE_MAIN.jpg'
import taroImg from 'crew/holybang/HolyBang_TARO_MAIN.jpg'
import hertzImg from 'crew/holybang/HolyBang_HERTZ_MAIN.jpg'

import logoImg from 'crew/holybang/HolyBang.jpg'

const HoneyJ: Dancer = {
  name: {
    kor: '허니제이',
    eng: 'Honey J',
  },
  image: honeyjImg,
  birth: new Date(1987, 8, 25),
  isLeader: true,
  description: `Former leader of PURFLOW dance crew alongside current CoCaNButter members Rihey, Gaga, Jillin, ZSun, and Bicki. Long-time choreographer and tour dancer for Jay Park and AOMG.`,
  choreo: [],
  link: [
    'https://www.instagram.com/__honey.j__/',
    'https://www.youtube.com/user/PuplowHn',
    'https://twitter.com/__honey_j__',
    'https://www.tiktok.com/@playwithhoney',
  ],
}

const Loa: Dancer = {
  name: {
    kor: '로아',
    eng: 'Lo-A',
  },
  image: loaImg,
  birth: new Date(1996, 8, 2),
  description: '',
  choreo: [],
  link: [
    'https://www.instagram.com/_lo_aaa_/',
    'https://twitter.com/_lo_aaa_',
  ],
}

const Mull: Dancer = {
  name: {
    kor: '뮬',
    eng: 'Mull',
  },
  image: mullImg,
  birth: new Date(1996, 2, 27),
  description: '',
  choreo: [],
  link: [
    'https://www.instagram.com/mull_holybang/',
    'https://twitter.com/mull_holybang',
  ],
}

const Belle: Dancer = {
  name: {
    kor: '벨',
    eng: 'Belle',
  },
  image: belleImg,
  birth: new Date(1996, 10, 8),
  description: `Missed the remainder of the show effective Episode 5 due to an ACL injury and underwent surgery.`,
  choreo: [],
  link: [
    'https://www.instagram.com/gaeun_belle/',
    'https://twitter.com/gabbung123',
  ],
}

const Eevee: Dancer = {
  name: {
    kor: '이븨',
    eng: 'Eevee',
  },
  image: eeveeImg,
  birth: new Date(1993, 3, 9),
  description: 'Tour dancer for Jay Park and AOMG.',
  choreo: [],
  link: [
    'https://www.instagram.com/ee__vee/',
    'https://twitter.com/EEVEEHOLYBANG',
  ],
}

const Jane: Dancer = {
  name: {
    kor: '제인',
    eng: 'Jane',
  },
  image: janeImg,
  birth: new Date(1995, 1, 4),
  description: 'Tour dancer for Jay Park and AOMG.',
  choreo: [],
  link: [
    'https://www.instagram.com/janefromhb/',
    'https://twitter.com/janefromhb',
  ],
}

const Taro: Dancer = {
  name: {
    kor: '타로',
    eng: 'Taro',
  },
  image: taroImg,
  birth: new Date(1994, 4, 0),
  description: '',
  choreo: [],
  link: [
    'https://www.instagram.com/_t.a.r.o_/',
    'https://twitter.com/taro_holybang',
  ],
}

const Hertz: Dancer = {
  name: {
    kor: '헤르츠',
    eng: 'Hertz',
  },
  image: hertzImg,
  birth: new Date(1992, 10, 19),
  description: '',
  choreo: [],
  link: [
    'https://www.instagram.com/blossomy_hertz/',
    'https://twitter.com/Blossomy_Hertz/',
  ],
}

const HolyBang: Crew = {
  name: {
    kor: '홀리뱅',
    eng: 'HolyBang',
  },
  image: logoImg,
  description: '',
  finalRank: 1,
  key: '',
  dancers: [
    HoneyJ,
    Loa,
    Mull,
    Belle,
    Eevee,
    Jane,
    Taro,
    Hertz,
  ],
}

HolyBang.key = HolyBang.dancers[0].name.eng;

export const HolyBangMembers = {
  HoneyJ,
  Loa,
  Mull,
  Belle,
  Eevee,
  Jane,
  Taro,
  Hertz,
}

export default HolyBang