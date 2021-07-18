import styles from 'styles/pages/Playerdetail.module.scss';
import BackButton from './BackButton';

export default function PlayerDetail({ data }) {
    return (
        <div className={styles.wrapper}>
            <BackButton title="Team Profile" />
            <div className={styles.card}>
                <h2>Player Details</h2>
                <div className={styles.playerField}>
                    <p className={styles.fieldTitle}>Name</p>
                    <p>{data.name}</p>
                </div>

                <div className={styles.playerField}>
                    <p className={styles.fieldTitle}>Nationality</p>
                    <p>{data.nationality}</p>
                </div>

                <div className={styles.playerField}>
                    <p className={styles.fieldTitle}>Position</p>
                    <p>{data.position}</p>
                </div>

                <div className={styles.playerField}>
                    <p className={styles.fieldTitle}>Date of Birth</p>
                    <p>{data.dateOfBirth}</p>
                </div>
            </div>

        </div>
    )
}