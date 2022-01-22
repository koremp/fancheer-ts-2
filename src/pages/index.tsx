import { Layout } from 'antd'

import CrewMenu from 'components/crewMenu'
import DancerMenu from 'components/dancerMenu'
import DancerContent from 'components/dancerContent'

const { Header, Sider } = Layout

const Main = () => {
  return (
    <Layout>
      <Header>
        <CrewMenu/>
      </Header>
      <Layout hasSider>
        <Sider style={{ background: "#fff" }}>
          <DancerMenu/>
        </Sider>
        <Layout style={{ padding: '24px' }}>
          <Layout style={{ display: 'flex', flexDirection: 'column', padding: '24px', margin: 0, background: "#fff" }}>
            <DancerContent />
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Main