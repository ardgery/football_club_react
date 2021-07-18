import styles from 'styles/pages/Teamprofile.module.scss';
import { useEffect } from 'react';
import TeamDetail from './TeamDetail';

export default function TeamProfile({ data }) {
    useEffect(() => {
        console.log("DATABAYOOO = ", data)
    }, [])
    return (
        <div className={styles.wrapper}>
            <div>
                <h1>{data.name}</h1>
                <img src={data.crestUrl} alt="" width="150px" />
                <TeamDetail data={data} />
            </div>
        </div>
    )
}