import HolyBang from 'datas/crews/holybang'
import HOOK from 'datas/crews/hook'
import LACHICA from 'datas/crews/lachica'
import COCANBUTTER from 'datas/crews/cocanbutter'
import YGX from 'datas/crews/ygx'
import PROWDMON from 'datas/crews/prowdmon'
import WANT from 'datas/crews/want'
import WAYB from 'datas/crews/wayb'

import CREW from 'types/Crew'

const data: {
  crews: CREW[],
  key: string,
} = {
  crews: [
    HolyBang,
    HOOK,
    LACHICA,
    COCANBUTTER,
    YGX,
    PROWDMON,
    WANT,
    WAYB,
  ],
  key: '',
}

data.key = data.crews[0].name.eng

export default data