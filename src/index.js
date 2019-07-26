import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import CarPage from './components/CarPage';

function App() {
  return (
    <div className="App">
      <CarPage />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
