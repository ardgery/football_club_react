import { useRouter } from 'next/router'
import TeamProfile from 'components/TeamProfile'
import SWR from 'components/SWR'

const TeamProf = () => {
    const router = useRouter();
    const { id } = router.query;
    const data = SWR(`https://api.football-data.org/v2/teams/${id}`);

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