import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import IngredientsList from '../../components/IngredientsList';

interface PageProps {
  drink: any;
}

const Home: NextPage<PageProps> = function ({ drink }) {
  return (
    <div>
      <Head>
        <title>{drink.strDrink}</title>
        <meta name='description' content='Coctail recepies' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h2 className='text-2xl'>{drink.strDrink}</h2>
      <Image
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        width='200'
        height='200'
      />
      <p>{drink.strInstructions}</p>
      <IngredientsList
        ingredients={Object.keys(drink)
          .filter((prop) => {
            return prop.indexOf('strIngredient') >= 0 && drink[prop] !== null;
          })
          .map((prop) => {
            const ingredientIndex = prop.slice(-1);
            return {
              text: drink[prop],
              measure: drink[`strMeasure${ingredientIndex}`],
            };
          })}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async function () {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async function (
  context
) {
  const { API_URL } = process.env;
  const id = context.params?.id;
  const url = `${API_URL}/api/json/v1/1/lookup.php?i=${id}`;
  const result = await fetch(url);
  const drinks = (await result.json()).drinks;
  const drink = drinks[0];

  return {
    props: {
      drink: drink,
    },
    revalidate: 60,
  };
};

export default Home;
