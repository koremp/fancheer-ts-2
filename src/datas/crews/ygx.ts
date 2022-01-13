import Crew from 'datas/types/Crew'
import Dancer from 'datas/types/Dancer'

import leejungImg from 'assets/crew/ygx/YGX_LEEJUNG_MAIN.jpg'
import yeojinImg from 'assets/crew/ygx/YGX_YEOJIN_MAIN.jpg'
import yellImg from 'assets/crew/ygx/YGX_YELL_MAIN.jpg'
import isakImg from 'assets/crew/ygx/YGX_ISAK_MAIN.jpg'
import jihyoImg from 'assets/crew/ygx/YGX_JIHYO_MAIN.jpg'

import logoImg from 'assets/crew/ygx/YGX.jpg'


const Leejung: Dancer = {
  name: {
    kor: '리정',
    eng: 'Leejung Lee',
  },
  image: leejungImg,
  birth: new Date(1998, 8, 8),
  isLeader: true,
  description: 'Choreographer for TWICE, ITZY, Sunmi, Somi, BLACKPINK, iKON',
  choreo: [
    // TBD
  ],
  link: [
    'https://www.instagram.com/leejung_lee/',
    'https://twitter.com/leejunglovesyou',
    'https://www.tiktok.com/@leejunglovesyou?_d=secCgwIARCbDRjEFSADKAESPgo85E6Bb4MV0HC7F3s17Dcmb0IBfYzycHzLCuj8sEWVGrVx48oXt96n8OEPCyXySMsVU53fwustY4%2B9CRAQGgA%3D&language=ko&sec_uid=MS4wLjABAAAAiavNKHJv-aQiPB6tXuVywiEhnLO0rPmgrA7zFfQwgKer1MNqQeUEUfKrMA9EOJ3l&sec_user_id=MS4wLjABAAAAxc-CzMFhNrg6Bg03aHoNM_LdzQLuLGXjtK1MPDXk-bb0TxIcyYH7tMsy04Mc0SPl&share_app_id=1180&share_author_id=7025973455875933185&share_link_id=23c3b1bd-9607-4ab4-94c3-c41bb2ad77ba&timestamp=1635901264&u_code=d2lf49bda1ki3a&user_id=6616940305474469890&utm_campaign=client_share&utm_medium=android&utm_source=kakaotalk&source=h5_t&_r=1',
  ]
}

const Yeojin: Dancer = {
  name: {
    kor: '여진',
    eng: 'Yeojin',
  },
  image: yeojinImg,
  birth: new Date(1994, 10, 8),
  description: '',
  choreo: [],
  link: [
    'https://www.instagram.com/yeojin1009/',
    'https://www.youtube.com/channel/UCoU7FNPcimmsjDhuFfVakAQ',
  ]
}

const Yell: Dancer = {
  name: {
    kor: '예리',
    eng: 'Yell',
  },
  image: yellImg,
  birth: new Date(2000, 3, 23),
  description: '2018 Summer Youth Olympics B-Girl 1v1 Bronze Medallist',
  choreo: [
    // TBD
  ],
  link: [
    'https://www.youtube.com/channel/UCy8ruIOEo43yAXi61anYC_w',
    'https://www.instagram.com/yell_yeri_kim/',
    'https://www.tiktok.com/@yellyerikim?',
    'https://www.facebook.com/yerikim.aka.yell',
  ]
}

const Isak: Dancer = {
  name: {
    kor: '이삭',
    eng: 'Isak',
  },
  image: isakImg,
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
  image: jihyoImg,
  birth: new Date(1996, 10, 21),
  description: '',
  choreo: [],
  link: [
    'https://www.instagram.com/issa_jihyo/',
    'https://www.youtube.com/channel/UCjRoBs0Yni_KO7emfyerbGQ',
    'https://twitter.com/issa_jihyo',
  ]
}

const YGX: Crew = {
  name: {
    kor: '와이지엑스',
    eng: 'YGX'
  },
  image: logoImg,
  description: '',
  finalRank: 5,
  key: '',
  dancers: [
    Leejung,
    Yeojin,
    Yell,
    Isak,
    Jihyo,
  ],
}

YGX.key = YGX.dancers[0].name.eng;

export const YGXMember = {
  Leejung,
  Yeojin,
  Yell,
  Isak,
  Jihyo,
} 

export default YGX