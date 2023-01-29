import {LayoutProps} from "@/layout/Layout.props";
import {Header} from "@/layout/Header/Header";
import {Footer} from "@/layout/Footer/Footer";
import {Sidebar} from "@/layout/Sidebar/Sidebar";
import {FunctionComponent} from "react";
import styles from './Layout.module.css'


const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
    )

}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        )
    }

}