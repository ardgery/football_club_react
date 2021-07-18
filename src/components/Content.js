import styles from 'styles/pages/Content.module.scss';
import { useEffect, useState, useContext } from 'react';
import { DataContext } from 'contexts/DataContext';
import { MenuContext } from 'contexts/MenuContext';
import GridTemplate from 'components/GridTemplate';
import useSWR from 'swr'
import axios from 'axios'
import { FetcherContext } from 'contexts/FetcherContext';

function dynamicRender(par, data) {
    switch (par) {
        case 'areas':
            par = <GridTemplate data={data} />
            break;
        case 'competitions':
            par = <GridTemplate data={data} />
            break;
        case 'teams':
            par = <GridTemplate data={data} />
            break;
        default:
            par = <GridTemplate data={data} />
    }
    return par;
}

export default function Content() {
    // const { datas, setDatas } = useContext(FetcherContext);
    // useEffect(() => {
    //     if (datas.competitionIds) {
    //         console.log("datassssssss = ", datas)
    //     } else {
    //         console.log("loadinggg")
    //     }
    // }, [datas])
    // const { data, error, datas, setDatas } = useContext(FetcherContext);

    // useEffect(() => {
    //     setDatas({ ...datas, section: props.title })
    // }, [])


    // if (error) console.log(error);
    // if (data) console.log("DATAAA FROM CONTEENTTT = ", data);

    return (
        <>
            {
                // data && dynamicRender(props.title, data)
            }
            <div className={styles.gridTemplate}>
                {
                    datas.competitionIds && datas.competitionIds.map(v => (
                        <Link key={v.id} href="/teams/[id]" as={`/teams/${v.id}`}>{v.name}</Link>
                    ))
                }
            </div>
        </>
    )
    return <h1>baba</h1>


}