import React from 'react';
import styles from 'styles/pages/Card.module.scss';

export default function Card({ data }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.teamField}>
                <p className={styles.fieldTitle}>Venue</p>
                <p>{data.venue}</p>
            </div>

            <div className={styles.teamField}>
                <p className={styles.fieldTitle}>Club Colors</p>
                <p>{data.clubColors}</p>
            </div>

            <div className={styles.teamField}>
                <p className={styles.fieldTitle}>Address</p>
                <p>{data.address}</p>
            </div>

            <div className={styles.teamField}>
                <p className={styles.fieldTitle}>Website</p>
                <p>{data.website}</p>
            </div>
        </div>
    )
}
