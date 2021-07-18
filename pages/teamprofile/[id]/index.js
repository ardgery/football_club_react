import { useRouter } from 'next/router'
import useSWR from 'swr'
import axios from 'axios'
import TeamProfile from 'components/TeamProfile';



const TeamProf = () => {
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

    const { data, error } = useSWR(
        [`http://api.football-data.org/v2/teams/${id}`, token], //get competitions based on area
        fetcher
    );

    if (error) console.log("An error has occurred.")
    if (!data) console.log("Loading....")
    if (data) console.log("Dataaaaaaaaa = ", data)


    return (
        <>
            {
                !data && (
                    <div className="loadingWrapper">
                        <div className="loading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                )
            }
            {data && <TeamProfile data={data} />}
        </>
    )
}

export default TeamProf