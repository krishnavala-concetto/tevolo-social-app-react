import { memo, type JSX, type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
const Layout: React.FC = () => {
  return (
    <>
      <header className="home-page">
        <h1>Layout Header</h1>
      </header>
      <Outlet />
      <footer>
        <p>Footer content goes here</p>{' '}
      </footer>
    </>
  );
};

export default memo(Layout);
