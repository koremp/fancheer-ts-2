import { useSelector } from 'react-redux'
import { Layout, Descriptions } from 'antd'
import Image from 'next/image'
import moment from 'moment'

import { dancer } from 'features/dancerCrew/dancerCrewSlice'

const { Content } = Layout

const DancerContent = () => {
  const choosenDancer = useSelector(dancer)

  return (
    <Layout style={{display: 'flex', flexDirection: 'row' }}>
      <Content style={{ flexBasis: '40%', padding: '10px' }}>
        <Image 
          src={choosenDancer.image} 
          alt={`${choosenDancer.name.eng}'s photo`}
        />
      </Content>
      <Content style={{ flexBasis: '40%' }}>
        <Descriptions 
          title="Dancer Info" 
          column={1}
        >
          <Descriptions.Item label="Dancer Name (kor/eng)">{choosenDancer.name.kor} / {choosenDancer.name.eng}</Descriptions.Item>
          {
            choosenDancer.isLeader &&
              <Descriptions.Item label="Leader">리더</Descriptions.Item>
          }
          <Descriptions.Item label="Age">{moment(choosenDancer.birth).format('YYYY-MM-DD')} / {moment().diff(choosenDancer.birth.toString(), 'years')}</Descriptions.Item>
          <Descriptions.Item label="Descriptions">{choosenDancer.description}</Descriptions.Item>
        </Descriptions>
      </Content>
    </Layout>
  )
}

export default DancerContent
