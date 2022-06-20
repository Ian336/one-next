import { Breadcrumb, Layout, Menu } from 'antd';
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import {useRouter} from 'next/router'
const { Header, Content, Footer } = Layout;
import 'antd/dist/antd.css'
const App = ({ Component, pageProps }: AppProps) => {
  const router=useRouter()
  const handelSelectMenu=({item,key,keyPath})=>{
    router.push('/content/'+keyPath)
 }
 
  return (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        onSelect={handelSelectMenu}
        defaultSelectedKeys={['2']}
        items={new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
      <Component {...pageProps} />
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
  )}


export default App;