import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = function () {
  return (
    <div>
      <Head>
        <title>Coctails Recepies</title>
        <meta name='description' content='Coctail recepies' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <form action='/search'>
          <label htmlFor='recipe-search'>Search for recipe</label>
          <input type='text' id='recipe-search' name='query' />
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
