import styles from 'styles/pages/Menu.module.scss';
import Link from 'next/link';
import { useState, useContext } from 'react';
import { MenuContext } from 'contexts/MenuContext';

export function Menu() {
    const menu = ['new', 'past', 'comments', 'ask', 'show', 'job'];
    const { activeMenu, setActiveMenu } = useContext(MenuContext);
    return (
        <div className={styles.menuWrap}>
            {
                menu.map((v, i) => {
                    return (
                        <Link href={'/' + v} key={i} >
                            <a onClick={() => setActiveMenu(v)} className={activeMenu === i ? styles.active : ''}>{v[0].toUpperCase() + v.substr(1, v.length)}</a>
                        </Link>
                    )
                })
            }
        </div >

    )
}