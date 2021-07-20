import { useRouter } from 'next/router'
import GridTemplate from 'components/GridTemplate';
import SWR from 'components/SWR'

const Teams = () => {
    const router = useRouter();
    const { id } = router.query;
    const data = SWR(`https://api.football-data.org/v2/competitions/${id}/teams`);

    return (
        <>
            {
                !data && (
                    <div className="loadingWrapper">
                        <div className="loading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                )
            }
            {data && <GridTemplate title="Teams" data={data.teams} />}
        </>
    )
}

export default Teams