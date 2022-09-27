    import Head from "next/head";
    import Link from "next/link";
    import Navbar from "./Nav";

    export default function Layout({children, home}) {
        return (
            <div>
                <Head>
                    <title>Howlett's Family Tree</title>
                    <meta name="viewpoint" content="width=device-width, initial-scale=1" />
                </Head>
                <Navbar />
                <div className="text-center">
                <main>{children}</main>
                </div>
                {!home && (
                    <div className="text-center">
                    <Link href="/" >
                        <a className="btn btn-info mt-3 text-center">Click here to return to Home</a>
                    </Link>
                    <br/>
                    </div>
                    
                )}
                <footer className="text-center">
                    <br/>
                    <p>Created for assignment week 6</p>
                </footer>
            </div>
        )
    }