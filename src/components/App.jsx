import React from 'react';
import UpdateProduceForm from './UpdateProduceForm';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App(){

  const header = {
    padding: '30px 15px 60px',
    textAlign: 'center',
  };

  return (
    <div>
      <style jsx global>{`
        body {
          font-family: monospace;
          background-color: #e9e6e1;
        }
      `}</style>
      <header style={header}>
        <h1>Avery's Organics</h1>
        <Link to="/">Home</Link> | <Link to="/updateproduce">Go to form</Link>
      </header>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/updateproduce' component={UpdateProduceForm} />
      </Switch>
    </div>
  );
}

export default App;
