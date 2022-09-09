import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface PageProps {
  results: any[];
  query: string;
}

const Query: NextPage<PageProps> = function ({ query, results }) {
  return (
    <div>
      <Head>
        <title>Search: {query}</title>
        <meta name='description' content='Coctail recepies' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Query</h1>
      {(results.length > 0 && (
        <ul>
          {results.map((result, index) => {
            return (
              <li key={`${index}_${result.id}`}>
                <Link href={`/cocktails/${result.id}`}>
                  <a>{result.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      )) || <div>No reults</div>}
      <Link href='/'>
        <a>Back to search</a>
      </Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<PageProps> =
  async function (context) {
    const query = context.query['query'] as string;
    const { API_URL } = process.env;
    const url = `${API_URL}/api/json/v1/1/search.php?s=${query}`;
    const result = await fetch(url);
    const drinks = (await result.json()).drinks;

    return {
      props: {
        query: query,
        results:
          drinks === null
            ? []
            : drinks.map((drink: any) => {
                return {
                  id: drink.idDrink,
                  name: drink.strDrink,
                };
              }),
      },
    };
  };

export default Query;
