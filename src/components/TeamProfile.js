import styles from 'styles/pages/Teamprofile.module.scss';
import TeamDetail from './TeamDetail';
import BackButton from './BackButton';

export default function TeamProfile({ data }) {
    return (
        <div className={styles.wrapper}>
            <BackButton title="Teams" />
            <div className={styles.teamDetail}>
                <h1 className={styles.headerTeam}>{data.name}</h1>
                <img src={data.crestUrl} alt="" width="120px" />
                <TeamDetail data={data} />
            </div>
        </div>
    )
}