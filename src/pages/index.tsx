import { useState, useEffect } from 'react'
import { Descriptions, Layout, Menu } from 'antd'
import Image from 'next/image'
import produce from 'immer'
import moment from 'moment'

import data from 'datas/crews'
import Crew from 'datas/types/Crew'
import Dancer from 'datas/types/Dancer'

const { Header, Content, Sider, Footer } = Layout

const Main = () => {
  const [crew, setCrew] = useState<Crew>(data.crews.find((crew) => crew.name.eng === data.key))
  const [crewKey, setCrewKey] = useState<string>(data.key)

  const [dancer, setDancer] = useState<Dancer>(crew.dancers.find((dancer) => dancer.name.eng === crew.key))

  const onClickCrew = (e) => {
    setCrewKey(e.key)
    console.log(crewKey, e.key)
  }

  const onClickDancer = (e) => {
    setCrew(produce(crew, draft => {
      draft.key = e.key
    }))
  }

  useEffect(() => {
    setCrew(data.crews.find((crew) => crew.name.eng === crewKey))
  }, [crewKey])

  useEffect(() => {
    setDancer(crew.dancers.find((dancer) => dancer.name.eng === crew.key))
  }, [crew.key])

  return (
    <Layout >
      <Header>
        <Menu theme="dark" mode="horizontal" onClick={onClickCrew} selectedKeys={[crewKey]}>
          {
            data.crews.map((crew) => (
              <Menu.Item key={crew.name.eng}>{crew.name.eng}</Menu.Item>
            ))
          }
        </Menu>
      </Header>
      <Layout hasSider>
        <Sider style={{ background: "#fff" }}>
          <Menu mode="inline" onClick={onClickDancer} selectedKeys={[crew.key]}>
            {
              crew.dancers.map((dancer) => (
                <Menu.Item key={dancer.name.eng}>{dancer.name.eng}</Menu.Item>
              ))
            }
          </Menu>
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Content style={{ display: 'flex', flexDirection: 'column', padding: 24, margin: 0, background: "#fff" }}>
            <div>
              <Image src={dancer.image} alt={`${dancer.name.eng}'s photo`} width={dancer.image.width / 3} height={dancer.image.height / 3} />
            </div>
            <Descriptions title="Dancer Info" style={{ margin: 'auto 0 0 0' }} column={1}>
              <Descriptions.Item label="Dancer Name (kor/eng)">{dancer.name.kor} / {dancer.name.eng}</Descriptions.Item>
              <Descriptions.Item label="Leader">{dancer.isLeader ? '리더' : '-'}</Descriptions.Item>
              <Descriptions.Item label="Age">{moment(dancer.birth).format('YYYY-MM-DD')} / {moment().diff(dancer.birth.toString(), 'years')}</Descriptions.Item>
              <Descriptions.Item label="Descriptions">{dancer.description}</Descriptions.Item>
            </Descriptions>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Main