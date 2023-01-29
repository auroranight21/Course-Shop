import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link key={1} rel="icon" href="/favicon.ico"/>

            </Head>
            <Component {...pageProps} />
        </>)
}
