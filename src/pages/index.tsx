import { useState } from 'react'
import { Layout, Menu } from 'antd'
import crewData from 'datas/crews'
import CREW from 'datas/types/Crew'

const { Header, Content, Sider, Footer } = Layout

const Main = () => {
  const [selectedCrew, setSelectedCrew] = useState<CREW>(crewData[0])

  return (
    <Layout >
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[selectedCrew.name.eng]}>
          {
            crewData.map((crew) => (
              <Menu.Item key={crew.name.eng}>{crew.name.eng}</Menu.Item>
            ))
          }
        </Menu>
      </Header>
      <Layout hasSider>
        <Sider>
          Sider
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