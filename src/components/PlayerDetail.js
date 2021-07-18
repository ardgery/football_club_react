import styles from 'styles/pages/Playerdetail.module.scss';

export default function PlayerDetail({ data }) {
    return (
        <div className={styles.wrapper}>
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
    )
}