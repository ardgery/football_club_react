import DataContextProvider from 'contexts/DataContext';
import MenuContextProvider from 'contexts/MenuContext';
import FetcherContextProvider from 'contexts/FetcherContext';
import Layout from 'components/Layout';
import 'styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <FetcherContextProvider>
      <MenuContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MenuContextProvider>
    </FetcherContextProvider>
  )
}

export default MyApp
