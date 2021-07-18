import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import styles from 'styles/pages/Layout.module.scss';

export default function Layout(props) {
    const Children = () => (
        <div className={styles.contentWrap}>
            {props.children}
        </div>
    )
    return (
        <div>
            <Header />
            <Children />
            <Footer />
        </div>

    )
}