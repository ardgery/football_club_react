import { useContext } from 'react';
import { LeaguesContext } from 'contexts/FetcherContext';
import GridTemplate from 'components/GridTemplate';

export default function Home() {
  const { competitions } = useContext(LeaguesContext);
  return (
    <>
      {
        !competitions && (
          <div className="loadingWrapper">
            <div className="loading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>
        )
      }
      {competitions && <GridTemplate title="Leagues" data={competitions} />}
    </>

  )
}
