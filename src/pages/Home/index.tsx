import { memo, type JSX } from 'react';

const Home = (): JSX.Element => {
  return (
    <section className="home-page">
      <h1>Home Page</h1>
      <p>Welcome to the Tevolo Social App !!</p>
    </section>
  );
};

export default memo(Home);
