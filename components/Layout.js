import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import {Header} from './ComponentLib'
import APP_CONFIG from '../constants'

const layoutStyle = {
  maxWidth: 992,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 10
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Head>
      <title>{`${APP_CONFIG.APP_TITLE} ${APP_CONFIG.APP_CITY}`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header {...props} />
    {props.children}
  </div>
)

export default Layout