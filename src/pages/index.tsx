import { Layout, Menu } from 'antd'

const { Header, Content, Sider, Footer } = Layout

const Main = () => {

  return (
    <Layout >
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
          <Menu.Item>YGX</Menu.Item>
          <Menu.Item>lACHICA</Menu.Item>
          <Menu.Item>WANT</Menu.Item>
          <Menu.Item>WAYB</Menu.Item>
          <Menu.Item>CocaNButter</Menu.Item>
          <Menu.Item>PROWDMON</Menu.Item>
          <Menu.Item>HolyBang</Menu.Item>
          <Menu.Item>Hook</Menu.Item>
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