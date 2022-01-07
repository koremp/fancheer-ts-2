import { useState } from 'react'
import { Layout, Menu } from 'antd'
import { crewData } from 'data/crew'

const { Header, Content, Sider, Footer } = Layout

const Main = () => {
  const [selectedCrew, setSelectedCrew] = useState(crewData[0])

  return (
    <Layout >
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[selectedCrew.name.eng]}>
          {
            crewData.map((crew) => (
              <Menu.Item key={crew.name.eng}>{crew.name.kor}</Menu.Item>
            ))
          }
          {/* <Menu.Item>YGX</Menu.Item>
          <Menu.Item>LACHICA</Menu.Item>
          <Menu.Item>WANT</Menu.Item>
          <Menu.Item>WAYB</Menu.Item>
          <Menu.Item>CocaNButter</Menu.Item>
          <Menu.Item>PROWDMON</Menu.Item>
          <Menu.Item>HolyBang</Menu.Item>
          <Menu.Item>Hook</Menu.Item> */}
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