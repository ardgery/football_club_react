import { useRouter } from 'next/router';
import PlayerDetail from 'components/PlayerDetail';
import SWR from 'components/SWR';

const Players = () => {
    const router = useRouter();
    const { id } = router.query;
    const data = SWR(`https://api.football-data.org/v2/players/${id}`);

    return (
        <>
            {
                !data && (
                    <div className="loadingWrapper">
                        <div className="loading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                )
            }
            {data && (<PlayerDetail data={data} />)}
        </>
    )
}

export default Players