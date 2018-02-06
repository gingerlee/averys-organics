import React from 'react';
import SeasonalProduce from './SeasonalProduce';
import MarketSchedule from './MarketSchedule';

function App(){

  const container = {
    display: 'grid',
    gridGap: '30px',
    gridTemplateColumns: '1fr 2fr',
    maxWidth: '1200px',
    margin: 'auto'
  };

  const main = {
    padding: '15px',
    border: '1px solid',
    display: 'grid',
    gridGap: '10px',
  };

  return (
    <div style={container}>
      <header style={{gridColumn: 'span 2', border: '1px solid', padding: '15px'}}><h1>Avery's Organics</h1></header>
      <div style={main}>
        <SeasonalProduce />
      </div>
      <div style={main}>
        <MarketSchedule />
      </div>
    </div>
  );
}

export default App;
