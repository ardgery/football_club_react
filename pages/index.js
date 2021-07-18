import { useEffect, useContext } from 'react';
import { FetcherContext } from 'contexts/FetcherContext';
import GridTemplate from 'components/GridTemplate';



export default function Home(props) {
  const { competitions } = useContext(FetcherContext);
  useEffect(() => {
    if (competitions) {
      console.log("competitions = ", competitions)
    } else {
      console.log("loadinggg")
    }
  }, [competitions])
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
