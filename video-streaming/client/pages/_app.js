import React from "react";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "../components/Nav";


function MyApp({ Component, pageProps }) {
    return ( 
        <>
            <Head>
                <link rel="stylesheet" href="/css/style.css" />
            </Head>
            <Nav />
            <Component {...pageProps} /> 
        </>
    )
}

export default MyApp;