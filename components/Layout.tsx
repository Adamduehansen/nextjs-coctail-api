import { PropsWithChildren } from 'react';

function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <h1>The Coctail DB</h1>
      {children}
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
    </div>
  );
}

export default Layout;
