import { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import produce from 'immer';

import data from 'datas/crews'
import CREW from 'datas/types/Crew'

const { Header, Content, Sider, Footer } = Layout

const Main = () => {
  const [crew, setCrew] = useState<CREW>(data.crews.find((crew) => crew.name.eng === data.key))
  const [crewKey, setCrewKey] = useState<string>(data.key)

  const onClickCrew = (e) => {
    setCrewKey(e.key)
    console.log(crewKey, e.key)
  }
  
  useEffect(() => {
    setCrew(data.crews.find((crew) => crew.name.eng === crewKey))
  }, [crewKey])

  const onClickMember = (e) => {
    // setCrew(produce(crew, draft => {
    //   draft[draft.key].index = e.key
    // }))
  }

  return (
    <Layout >
      <Header>
        <Menu theme="dark" mode="horizontal" onClick={onClickCrew}>
          {
            data.crews.map((crew, index) => (
              <Menu.Item key={crew.name.eng}>{crew.name.eng}</Menu.Item>
            ))
          }
        </Menu>
      </Header>
      <Layout hasSider>
        <Sider>
          <Menu mode="inline" >
            {
              crew.members.map((member) => (
                <Menu.Item key={member.name.eng}>{member.name.eng}</Menu.Item>
              ))
            }
          </Menu>
        </Sider>
        <Layout>
          <Content>
            Content
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