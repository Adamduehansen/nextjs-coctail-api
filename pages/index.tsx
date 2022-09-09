import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = function () {
  return (
    <div className='flex justify-center items-center h-full'>
      <Head>
        <title>Coctails Recepies</title>
        <meta name='description' content='Coctail recepies' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <form action='/search' className='flex flex-col'>
        <input
          type='text'
          autoFocus
          id='recipe-search'
          name='query'
          className='border border-yellow-400 rounded p-2'
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default Home;
