import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { getAllIds, getData } from '../../lib/data';

export async function getStaticProps({ params }) {
    const itemData = await getData(params.id);
    return {
        props: {
            itemData
        }
    };
}

export async function getStaticPaths() {
    const paths = getAllIds();
    return {
        paths,
        fallback: false
    };
}

export default function Entry({ itemData }) {
    return (
        <Layout>
            <Head>
                <title>{itemData.name}</title>
            </Head>
            <br />
            <div className='smaller-scale'>
            <article className="card text-center">
                
                <h2>Family memebers details</h2>
                <div className="card-body text-center">
                    <h5 className="card-title">{itemData.name}</h5>
                    <h6 className="card-subtitle mb-2">{itemData.dob}</h6>
                    <p className="card-text">{itemData.birth}</p>
                </div>
            </article>
            <br></br>
            <div className="list-group text-center">
                {itemData.family ?
                    <h2>Family members related</h2> : null
                }
                {itemData.family ?
                    itemData.family.map(
                        ({ id, name }) => (
                            <Link key={id} href={`/people/${id}`}>
                                <a className="list-group item list-groupitem-action">{name}</a>
                            </Link>
                        )
                    ) : null
                }
            </div>
            <br></br>
            </div>
        </Layout>
    );
}