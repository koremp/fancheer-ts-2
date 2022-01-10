import { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import produce from 'immer';

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
        <Menu theme="dark" mode="horizontal" onClick={onClickCrew}>
          {
            data.crews.map((crew) => (
              <Menu.Item key={crew.name.eng}>{crew.name.eng}</Menu.Item>
            ))
          }
        </Menu>
      </Header>
      <Layout hasSider>
        <Sider>
          <Menu mode="inline" onClick={onClickDancer} selectedKeys={[crew.key]}>
            {
              crew.dancers.map((dancer) => (
                <Menu.Item key={dancer.name.eng}>{dancer.name.eng}</Menu.Item>
              ))
            }
          </Menu>
        </Sider>
        <Layout>
          <Content>
            {dancer.name.eng}
            {dancer.name.kor}
          </Content>
          <Footer>
            Footer
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Main