import React from 'react';
import styles from 'styles/pages/Teamdetail.module.scss';
import Link from 'next/link'

export default function TeamDetail({ data }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.teamFieldWrap}>
                <h2>Team Details</h2>
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

                <div className={styles.teamField}>
                    <p className={styles.fieldTitle}>Email</p>
                    <p>{data.email}</p>
                </div>
            </div>
            <div className={styles.squadWrap}>
                <h2>Squad Details</h2>
                <p className={styles.fieldTitle}>Players</p>
                <div className={styles.squadInside}>
                    {
                        data.squad.length > 0 ?
                            data.squad.map((v, i) => i < 20 ? (
                                <Link href={`/playerdetail/[id]`} as={`/playerdetail/${v.id}`} key={v.id}>{v.name}</Link>
                            ) : null)
                            :
                            <p className={styles.sorrySquad}>Sorry, currently we cannot display this team&apos;s squad. Maybe try to choose another team? :)</p>
                    }
                </div>
                <p className={styles.playerNote}>Note: Click on player name to see the player detail</p>
            </div>
        </div>
    )
}
