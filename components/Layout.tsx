import Link from 'next/link';
import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  return (
    <div className='w-full h-full flex flex-col p-4'>
      <header>
        <Link href='/'>
          <a>
            <h1 className='text-4xl'>The Cocktail DB</h1>
          </a>
        </Link>
      </header>
      <main className='flex-1'>{children}</main>
      <footer>
        <small>
          Supported by{' '}
          <a
            href='https://www.thecocktaildb.com/'
            target='_blank'
            rel='noreferrer'
          >
            https://www.thecocktaildb.com/
          </a>
        </small>
      </footer>
    </div>
  );
}

export default Layout;
