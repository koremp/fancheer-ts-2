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
        <Menu theme="dark" mode="horizontal" onClick={onClickCrew} selectedKeys={[choosenCrew.name.eng]}>
          {
            crewName.map((crew) => (
              <Menu.Item key={crew.name.eng}>{crew.name.eng}</Menu.Item>
            ))
          }
        </Menu>
      </Header>
      <Layout hasSider>
        <Sider style={{ background: "#fff" }}>
          <Menu mode="inline" onClick={onClickDancer} selectedKeys={[choosenDancer.name.eng]}>
            {
              dancerName.map((dancer) => (
                <Menu.Item key={dancer.name.eng}>{dancer.name.eng}</Menu.Item>
              ))
            }
          </Menu>
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Layout style={{ display: 'flex', flexDirection: 'column', padding: '24px', margin: 0, background: "#fff" }}>
            <Content>
              <Image 
                src={selectedDancer.image} 
                alt={`${selectedDancer.name.eng}'s photo`} 
                width={selectedDancer.image.width / 2}
                height={selectedDancer.image.height / 2} 
              />
              <Descriptions title="Dancer Info" style={{ margin: 'auto 0 0 auto' }} column={1}>
                <Descriptions.Item label="Dancer Name (kor/eng)">{dancer.name.kor} / {dancer.name.eng}</Descriptions.Item>
                <Descriptions.Item label="Leader">{selectedDancer.isLeader ? '리더' : '-'}</Descriptions.Item>
                <Descriptions.Item label="Age">{moment(selectedDancer.birth).format('YYYY-MM-DD')} / {moment().diff(dancer.birth.toString(), 'years')}</Descriptions.Item>
                <Descriptions.Item label="Descriptions">{selectedDancer.description}</Descriptions.Item>
              </Descriptions>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Main