import { useSelector, useDispatch } from 'react-redux'
import { Descriptions, Layout, Menu } from 'antd'
import Image from 'next/image'
import moment from 'moment'

import { 
  chooseCrew,
  chooseDancer,
}
from 'features/dancerCrew/dancerCrewSlice'
import { 
  crew, 
  crewNames,
  dancer,
  dancerNames,
} from 'features/dancerCrew/dancerCrewSlice'

const { Header, Content, Sider } = Layout

const Main = () => {
  const crewName = useSelector(crewNames)
  const choosenCrew = useSelector(crew)
  const dancerName = useSelector(dancerNames)
  const choosenDancer = useSelector(dancer)

  const dispatch = useDispatch();

  const onClickCrew = (e) => {
    dispatch(chooseCrew(e.key))
  }

  const onClickDancer = (e) => {
    dispatch(chooseDancer(e.key))
  }
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" onClick={onClickCrew} selectedKeys={[crew.name.eng]}>
          {
            crewName.map(({name}) => (
              <Menu.Item key={name.eng}>{name.eng}</Menu.Item>
            ))
          }
        </Menu>
      </Header>
      <Layout hasSider>
        <Sider style={{ background: "#fff" }}>
          <Menu mode="inline" onClick={onClickDancer} selectedKeys={[choosenDancer.name.eng]}>
            {
              dancerName.map(({name}) => (
                <Menu.Item key={name.eng}>{name.eng}</Menu.Item>
              ))
            }
          </Menu>
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Layout style={{ display: 'flex', flexDirection: 'column', padding: '24px', margin: 0, background: "#fff" }}>
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
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Main