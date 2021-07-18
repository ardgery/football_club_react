import LeaguesContextProvider from 'contexts/LeaguesContext';
import Layout from 'components/Layout';
import 'styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <LeaguesContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LeaguesContextProvider>
  )
}

export default MyApp
