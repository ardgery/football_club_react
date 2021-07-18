import { useRouter } from 'next/router'
import useSWR from 'swr'
import axios from 'axios'
import GridTemplate from 'components/GridTemplate';

const Teams = () => {
    const router = useRouter();
    let token = "ac85731748e04303bc9842c0f6cea8fb";
    const { id } = router.query;
    const fetcher = (url) =>
        axios
            .get(url, { headers: { 'X-Auth-Token': token } })
            .then((res) => {
                return res.data;
            })
        ;

    const { data } = useSWR(
        [`http://api.football-data.org/v2/competitions/${id}/teams`, token],
        fetcher
    );

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