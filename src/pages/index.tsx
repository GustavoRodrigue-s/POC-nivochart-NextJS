import React from 'react';

import { LineChart, PieChart, BarChar } from '../components/charts';

import { GlobalStyle } from '../components/styles/GlobalStyles';

const Home: React.FC = function () {
  return (
    <div>
      <GlobalStyle />

      <section>
        <LineChart />
      </section>
      <section>
        <PieChart />
      </section>
      <section>
        <BarChar />
      </section>
    </div>
  );
};

export default Home;
