import LeaguesContextProvider from 'contexts/FetcherContext';
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
