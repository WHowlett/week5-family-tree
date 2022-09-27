import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';

export async function getStaticProps() {
  const allData = getSortedList();
  return {
    props: {
      allData
    }
  }
}

export default function Home({allData}) {
  return (
  <Layout home>
    
    <h1 className='text-center'>List of Family Members in Howlett Family Tree</h1>
    <br />
    <div className="text-center">
    <div className='list-group smaller-scale'>
      {allData ? 
      allData.map (({id, name}) => (
        <Link key={id} href={`people/${id}`}>
          <a className='list-group-item list-group-item-action'>{name}</a>
        </Link>
      ))
    : null }
    </div>
    </div>
  </Layout>
  );
}
