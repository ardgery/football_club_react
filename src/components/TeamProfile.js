import styles from 'styles/pages/Teamprofile.module.scss';
import Link from 'next/link'
import { useEffect } from 'react';
import Card from './Card';

export default function TeamProfile({ data }) {
    useEffect(() => {
        console.log("DATABAYOOO = ", data)
    }, [])
    return (
        <div className={styles.wrapper}>
            <h1>{data.name}</h1>
            <img src={data.crestUrl} alt="" width="150px" />
            <Card data={data} />
        </div>
    )
}