import styles from 'styles/pages/Grid.module.scss';
import Link from 'next/link'
import BackButton from './BackButton';

export default function GridTemplate({ title, data }) {
    function contentRender(name, crest) {
        if (title === 'Leagues') {
            return name;
        } else {
            return (
                <a>
                    <img src={crest} alt="" width="50%" />
                    <p>{name}</p>
                </a>
            );
        }
    }

    const linkto = title === 'Leagues' ? 'teams' : 'teamprofile';
    return (
        <div className={styles.wrapper}>
            {title === 'Teams' && (<BackButton title="Leagues" />)}
            <h1>{title}</h1>
            <div className={styles.gridTemplate}>
                {
                    data && data.map(v => (
                        <Link href={`/${linkto}/[id]`} as={`/${linkto}/${v.id}`} key={v.id}>
                            {contentRender(v.name, v.crestUrl)}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}