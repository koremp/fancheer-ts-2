import { useSelector } from 'react-redux'
import { Layout, Descriptions } from 'antd'
import Image from 'next/image'
import moment from 'moment'

import { dancer } from 'features/dancerCrew/dancerCrewSlice'

const { Content } = Layout

const DancerContent = () => {
  const choosenDancer = useSelector(dancer)

  return (
    <Content>
      <Image 
        src={choosenDancer.image} 
        alt={`${choosenDancer.name.eng}'s photo`} 
        width={choosenDancer.image.width / 2}
        height={choosenDancer.image.height / 2} 
      />
      <Descriptions title="Dancer Info" style={{ margin: 'auto 0 0 auto' }} column={1}>
        <Descriptions.Item label="Dancer Name (kor/eng)">{choosenDancer.name.kor} / {choosenDancer.name.eng}</Descriptions.Item>
        <Descriptions.Item label="Leader">{choosenDancer.isLeader ? '리더' : '-'}</Descriptions.Item>
        <Descriptions.Item label="Age">{moment(choosenDancer.birth).format('YYYY-MM-DD')} / {moment().diff(choosenDancer.birth.toString(), 'years')}</Descriptions.Item>
        <Descriptions.Item label="Descriptions">{choosenDancer.description}</Descriptions.Item>
      </Descriptions>
    </Content>
  )
}

export default DancerContent
